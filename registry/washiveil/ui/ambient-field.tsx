'use client';

// Viewport-fixed tri-color ambient light field. Three engines:
// - WebGL canvas (primary): renders three glows in float precision with
//   per-pixel dither — no 8-bit contour rings at any zoom. Adaptive loop:
//   full-rate only while scroll inertia settles, ~15fps for the idle wander,
//   paused on hidden tabs; reduced-motion users get a static render. Colors
//   read from @theme tokens at render time — palette stays live.
// - CSS divs (fallback): the pre-JS FIRST PAINT — server-rendered, visible
//   the instant HTML arrives, swapped invisibly once the canvas renders. This
//   is why it stays: without it every navigation would flash a bare ground
//   before the glows pop in. no-JS / no-WebGL / context-loss coverage is a
//   bonus. Geometry: the shader anchors to these sizes at phone/desktop
//   widths and interpolates continuously in the tablet band.
// - Film-grain overlay div with SVG turbulence data-URI background and a
//   dark-mode radial mask.
//
// The inset-0 clip keeps negative offsets from widening the document
// (scrollWidth bug). Note: full-page screenshot tools paint fixed layers at the
// first viewport only — capture artifact, not a bug.

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform vec4 u_g0;uniform vec4 u_g1;uniform vec4 u_g2;
uniform vec3 u_s;
uniform vec3 u_c0;uniform vec3 u_c1;uniform vec3 u_c2;
uniform vec3 u_a;
float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
float glow(vec2 p,vec4 g,float s){
  vec2 q=(p-g.xy)/g.zw;
  float d=(length(q)-1.0)*min(g.z,g.w);
  return 1.0-smoothstep(-1.2*s,1.6*s,d);
}
void main(){
  vec2 p=vec2(gl_FragCoord.x,u_res.y-gl_FragCoord.y);
  float c0=glow(p,u_g0,u_s.x);
  float c1=glow(p,u_g1,u_s.y);
  float c2=glow(p,u_g2,u_s.z);
  vec3 rgb=vec3(0.0);float a=0.0;float ai;
  ai=u_a.x*c0;rgb+=(1.0-a)*ai*u_c0;a+=(1.0-a)*ai;
  ai=u_a.y*c1;rgb+=(1.0-a)*ai*u_c1;a+=(1.0-a)*ai;
  ai=u_a.z*c2;rgb+=(1.0-a)*ai*u_c2;a+=(1.0-a)*ai;
  // Full-strength dither wherever ANY coverage exists (the faint tails are
  // exactly where 8-bit steps live) — alpha-scaled dither was a bug that
  // switched the cure off where the disease is. Bare ground stays clean.
  float dn=(hash(gl_FragCoord.xy)-0.5)*(1.5/255.0)*smoothstep(0.0,0.005,max(c0,max(c1,c2)));
  rgb=max(rgb+vec3(dn),vec3(0.0));
  a=clamp(a+dn,0.0,1.0);
  gl_FragColor=vec4(rgb,a);
}`;

/** Parse a --color-* CSS custom property to normalized [r, g, b]. */
const hex = (name: string): [number, number, number] => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const n = parseInt(v.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

export function AmbientField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const fallback = fallbackRef.current;
    if (!canvas || !fallback) return;

    const drift = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1;

    let gl: WebGLRenderingContext | null = null;
    let raf = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;
    let contextLost = false;
    // GL resource handles — retained for cleanup and context-restore rebuild.
    let glProgram: WebGLProgram | null = null;
    let glVertShader: WebGLShader | null = null;
    let glFragShader: WebGLShader | null = null;
    let glBuffer: WebGLBuffer | null = null;
    // Handles accumulated during init — all cleaned up on unmount.
    let visibilityHandler: (() => void) | null = null;
    let contextLostHandler: ((e: Event) => void) | null = null;
    let contextRestoredHandler: (() => void) | null = null;
    let mutationObserver: MutationObserver | null = null;
    let resizeHandler: ((this: Window, ev: Event) => void) | undefined;

    const init = () => {
      gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false });
      if (!gl) return;

      const sh = (type: number, src: string) => {
        const s = gl!.createShader(type)!;
        gl!.shaderSource(s, src);
        gl!.compileShader(s);
        if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) throw new Error(gl!.getShaderInfoLog(s) ?? 'shader');
        return s;
      };
      glVertShader = sh(gl.VERTEX_SHADER, VERT);
      glFragShader = sh(gl.FRAGMENT_SHADER, FRAG);
      const prog = gl.createProgram()!;
      glProgram = prog;
      gl.attachShader(prog, glVertShader);
      gl.attachShader(prog, glFragShader);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error('link');
      gl.useProgram(prog);
      glBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, glBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, 'p');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const u = (n: string) => gl!.getUniformLocation(prog, n);
      let sScroll = window.scrollY || 0;

      const render = (now: number = performance.now()) => {
        if (!gl || contextLost) return;
        const dpr = Math.min(devicePixelRatio || 1, 2);
        const vw = innerWidth;
        const vh = innerHeight;
        const W = Math.round(vw * dpr);
        const H = Math.round(vh * dpr);
        if (canvas.width !== W || canvas.height !== H) {
          canvas.width = W;
          canvas.height = H;
        }
        gl.viewport(0, 0, W, H);

        // Geometry anchors to the CSS fallback at phone (<=640) and desktop
        // (>=1024) widths, and interpolates continuously between them — no size
        // pop while resizing, better-fitted glows on tablets. (The CSS fallback
        // stays two-step; it only shows pre-JS, so the divergence window is the
        // tablet band for ~100ms.) rem-based, so 4K root-font scaling carries.
        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const t = Math.min(Math.max((vw - 640) / (1024 - 640), 0), 1);
        const lerp = (a: number, b: number) => a + (b - a) * t;
        const geo = (w: number, h: number, cx: number, cy: number): [number, number, number, number] => [
          cx * dpr,
          cy * dpr,
          ((w * rem) / 2) * dpr,
          ((h * rem) / 2) * dpr,
        ];
        const w1 = lerp(22, 32.5);
        const h1 = lerp(18, 26.25);
        const w2 = lerp(18, 27.5);
        const h2 = lerp(16, 23.75);
        const w3 = lerp(20, 30);
        const h3 = lerp(15, 22.5);
        // Motion, all gated by prefers-reduced-motion: scroll drift with
        // inertia (sScroll eases toward scrollY in the loop) plus a subliminal
        // idle wander — the 404 orbs' narrative at "stare ten seconds to be
        // sure" amplitude. Knobs: drift factors, WANDER, per-orb periods
        // (co-prime seconds so the paths don't visibly repeat).
        // Drift is a whisper, not a journey — long pages must not relocate the lights.
        const syMax = (8 / 0.07) * rem; // largest drift factor pins the cap
        const sy = drift * Math.max(-syMax, Math.min(syMax, sScroll));
        const tm = (drift * now) / 1000;
        const WANDER = drift * 0.6 * rem;
        const wob = (px: number, py: number, ph: number): [number, number] => [
          WANDER * Math.sin((tm / px) * 2 * Math.PI + ph),
          WANDER * Math.sin((tm / py) * 2 * Math.PI + ph * 1.7),
        ];
        const [ax, ay] = wob(53, 37, 0);
        const [bx, by] = wob(61, 43, 2.1);
        const [cx, cy] = wob(47, 31, 4.2);
        const g0 = geo(
          w1,
          h1,
          -7.5 * rem + (w1 * rem) / 2 + 0.02 * sy + ax,
          -10 * rem + (h1 * rem) / 2 + 0.05 * sy + ay,
        );
        const g1 = geo(
          w2,
          h2,
          vw + 10 * rem - (w2 * rem) / 2 - 0.02 * sy + bx,
          0.35 * vh + (h2 * rem) / 2 - 0.07 * sy + by,
        );
        const g2 = geo(
          w3,
          h3,
          -6.25 * rem + (w3 * rem) / 2 + 0.03 * sy + cx,
          vh + 8.75 * rem - (h3 * rem) / 2 - 0.04 * sy + cy,
        );

        const dark = document.documentElement.classList.contains('dark');
        const cols = dark
          ? [hex('--color-ruri'), hex('--color-sumire-soft'), hex('--color-korozen-soft')]
          : [hex('--color-ruri'), hex('--color-sumire'), hex('--color-korozen')];
        const alphas = dark ? [0.4, 0.36, 0.24] : [0.26, 0.28, 0.21];

        gl.uniform2f(u('u_res'), canvas.width, canvas.height);
        gl.uniform4fv(u('u_g0'), g0);
        gl.uniform4fv(u('u_g1'), g1);
        gl.uniform4fv(u('u_g2'), g2);
        gl.uniform3f(u('u_s'), 6.25 * rem * dpr, 6.875 * rem * dpr, 7.5 * rem * dpr);
        gl.uniform3fv(u('u_c0'), cols[0]);
        gl.uniform3fv(u('u_c1'), cols[1]);
        gl.uniform3fv(u('u_c2'), cols[2]);
        gl.uniform3f(u('u_a'), alphas[0], alphas[1], alphas[2]);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        canvas.hidden = false;
        fallback.hidden = true;
      };

      render();

      const _resizeHandler = () => {
        if (contextLost) return;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => render(), 150);
      };
      window.addEventListener('resize', _resizeHandler);
      resizeHandler = _resizeHandler;

      if (drift) {
        // One adaptive loop: full-rate while scroll inertia settles, ~15fps for
        // the idle wander, paused entirely while the tab is hidden.
        let last = 0;
        let activeUntil = 0;
        const tick = (now: number) => {
          if (contextLost) return;
          const target = window.scrollY || 0;
          if (Math.abs(target - sScroll) > 0.5) activeUntil = now + 300;
          sScroll += (target - sScroll) * 0.1;
          if (now < activeUntil || now - last >= 66) {
            render(now);
            last = now;
          }
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        visibilityHandler = () => {
          cancelAnimationFrame(raf);
          if (!document.hidden && !contextLost) raf = requestAnimationFrame(tick);
        };
        document.addEventListener('visibilitychange', visibilityHandler);

        // Rebuild GL and restart the loop on context restore. init() re-registers
        // every listener below, so tear the current set down first — otherwise
        // each loss/restore cycle stacks another resize/visibility/observer set.
        contextRestoredHandler = () => {
          contextLost = false;
          deleteGLResources();
          cancelAnimationFrame(raf);
          if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler);
            resizeHandler = undefined;
          }
          if (visibilityHandler) {
            document.removeEventListener('visibilitychange', visibilityHandler);
            visibilityHandler = null;
          }
          if (contextRestoredHandler) canvas.removeEventListener('webglcontextrestored', contextRestoredHandler);
          if (mutationObserver) {
            mutationObserver.disconnect();
            mutationObserver = null;
          }
          try {
            init();
          } catch {
            // rebuild failed — fallback stays visible
          }
        };
        canvas.addEventListener('webglcontextrestored', contextRestoredHandler);
      }

      // Re-render when dark mode toggles (html class change).
      mutationObserver = new MutationObserver(() => {
        if (!contextLost) render();
      });
      mutationObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    };

    /** Delete retained GL resources (program, shaders, buffer). */
    const deleteGLResources = () => {
      if (gl) {
        if (glProgram) gl.deleteProgram(glProgram);
        if (glVertShader) gl.deleteShader(glVertShader);
        if (glFragShader) gl.deleteShader(glFragShader);
        if (glBuffer) gl.deleteBuffer(glBuffer);
      }
      glProgram = null;
      glVertShader = null;
      glFragShader = null;
      glBuffer = null;
    };

    // Context-lost handler: prevent default (allows restore), cancel the loop,
    // set the lost flag, and show the CSS fallback.
    contextLostHandler = (e: Event) => {
      e.preventDefault();
      contextLost = true;
      cancelAnimationFrame(raf);
      canvas.hidden = true;
      fallback.hidden = false;
    };
    canvas.addEventListener('webglcontextlost', contextLostHandler);

    try {
      init();
    } catch {
      // init failed — fallback divs stay visible.
    }

    // FULL cleanup on unmount (Astro source never unmounts; React must).
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      deleteGLResources();
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
      if (visibilityHandler) document.removeEventListener('visibilitychange', visibilityHandler);
      if (contextLostHandler) canvas.removeEventListener('webglcontextlost', contextLostHandler);
      if (contextRestoredHandler) canvas.removeEventListener('webglcontextrestored', contextRestoredHandler);
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className={cn('pointer-events-none fixed inset-0 isolate overflow-hidden', className)} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" hidden />
      <div ref={fallbackRef}>
        <div className="absolute top-[-10rem] left-[-7.5rem] h-[18rem] w-[22rem] rounded-full bg-ruri/26 blur-[6.25rem] sm:h-[26.25rem] sm:w-[32.5rem] dark:bg-ruri/40" />
        <div className="absolute top-[35%] right-[-10rem] h-[16rem] w-[18rem] rounded-full bg-sumire/28 blur-[6.875rem] sm:h-[23.75rem] sm:w-[27.5rem] dark:bg-sumire-soft/36" />
        <div className="absolute bottom-[-8.75rem] left-[-6.25rem] h-[15rem] w-[20rem] rounded-full bg-korozen/21 blur-[7.5rem] sm:h-[22.5rem] sm:w-[30rem] dark:bg-korozen-soft/24" />
      </div>
      {/* Film-grain dither: breaks the 8-bit quantization rings the blurred glows
          show on the dark ground. Monochrome SVG turbulence, soft-light blend. */}
      <div className="wv-grain absolute inset-0 opacity-[0.14] dark:opacity-[0.15]" />
      <style>{`
        .wv-grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='128' height='128' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
          mix-blend-mode: soft-light;
        }
        /* Dark: true black can't read as paper (soft-light's darken half has nothing
           to darken, leaving lighten-only speckle = static). So the ground gets NO
           grain at all — the dither is masked to the three glow regions, the only
           place banding exists. Light keeps the full-field paper feel. */
        html.dark .wv-grain {
          mask-image:
            radial-gradient(40rem 32rem at 9rem 3rem, black 35%, transparent 72%),
            radial-gradient(38rem 32rem at calc(100% + 4rem) 45%, black 35%, transparent 72%),
            radial-gradient(40rem 30rem at 9rem 100%, black 35%, transparent 72%);
        }
      `}</style>
    </div>
  );
}
