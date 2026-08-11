'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';

// Taketori Monogatari, opening through the naming of Kaguya-hime (public
// domain) — one continuous pass, no tiling. The text ends where she
// receives her name.
const PASSAGE =
  '今は昔、竹取の翁といふものありけり。野山にまじりて竹を取りつつ、よろづのことに使ひけり。名をば、さぬきの造となむいひける。その竹の中に、もと光る竹なむ一筋ありける。あやしがりて、寄りて見るに、筒の中光りたり。それを見れば、三寸ばかりなる人、いとうつくしうてゐたり。翁いふやう、我朝ごと夕ごとに見る竹の中におはするにて知りぬ。子となり給ふべき人なめり、とて手にうち入れて家へ持ちて来ぬ。妻の嫗に預けて養はす。うつくしきこと、かぎりなし。いと幼ければ、籠に入れて養ふ。竹取の翁、竹を取るに、この子を見つけてのちに竹取るに、節を隔てて、よごとに金ある竹を見つくること重なりぬ。かくて翁やうやう豊かになりゆく。この児、養ふほどに、すくすくと大きになりまさる。三月ばかりになるほどに、よき程なる人になりぬれば、髪上げなどさうして、髪上げさせ、裳着す。帳のうちよりも出さず、いつき養ふ。この児のかたち、けうらなること世になく、屋のうちは暗き所なく光満ちたり。翁、心地あしく苦しき時も、この子を見れば、苦しきこともやみぬ。腹立たしきことも慰みけり。翁、竹を取ること久しくなりぬ。勢ひ猛の者になりにけり。この子いと大きになりぬれば、名を、三室戸斎部の秋田を呼びてつけさす。秋田、なよ竹のかぐや姫とつけつ。';

// Bare manuscript — the veil over it is the real one: the nav pill crossing
// as you scroll, and the sumire selection if you select the text.
// Under sm the frame measures itself: vertical-rl quantizes width in
// line-height columns, so the minimal height that still fits the container
// is also the one whose columns run flush to both edges.
export function VeilProof() {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const useFitEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
  useFitEffect(() => {
    const g = frame.current;
    const t = inner.current;
    if (!g || !t) return;

    const fit = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        g.style.height = '';
        return;
      }
      const w = g.clientWidth;
      let lo = 640;
      let hi = 1600;
      let best = hi;
      for (let i = 0; i < 14; i++) {
        const mid = Math.round((lo + hi) / 2);
        g.style.height = `${mid}px`;
        if (t.scrollWidth <= w) {
          best = mid;
          hi = mid;
        } else {
          lo = mid + 1;
        }
      }
      g.style.height = `${best}px`;
    };

    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return (
    <div className="relative">
      <div
        ref={frame}
        className="wv-genko flex h-[60rem] justify-center overflow-hidden rounded-2xl p-8 sm:h-[44rem]"
        lang="ja"
      >
        <div ref={inner} style={{ writingMode: 'vertical-rl' }} className="h-full text-base leading-[2rem] text-foreground/80">
          <p>{PASSAGE}</p>
        </div>
      </div>
      <style>{`
        .wv-genko {
          background-image:
            repeating-linear-gradient(
              to right,
              color-mix(in srgb, var(--foreground) 10%, transparent) 0 1px,
              transparent 1px 2rem
            ),
            repeating-linear-gradient(
              to bottom,
              color-mix(in srgb, var(--foreground) 10%, transparent) 0 1px,
              transparent 1px 2rem
            );
        }
      `}</style>
    </div>
  );
}
