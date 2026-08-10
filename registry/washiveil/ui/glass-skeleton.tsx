import { cn } from '@/lib/utils';

export function GlassSkeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <>
      <div
        className={cn('wv-shimmer rounded-xl bg-foreground/6 relative overflow-hidden', className)}
        {...props}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `@media(prefers-reduced-motion:no-preference){@keyframes wv-shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.wv-shimmer::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);animation:wv-shimmer 1.5s infinite}:is(.dark,.dark *) .wv-shimmer::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)}}`,
        }}
      />
    </>
  );
}
