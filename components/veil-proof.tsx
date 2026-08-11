import { GlassCard } from '@/registry/washiveil/ui/glass-card';

const PASSAGE =
  '「今は昔、竹取の翁といふものありけり。野山にまじりて竹を取りつつ、よろづのことに使ひけり。名をば、さぬきの造となむいひける。その竹の中に、もと光る竹なむ一筋ありける。あやしがりて、寄りて見るに、筒の中光りたり。それを見れば、三寸ばかりなる人、いとうつくしうてゐたり。翁いふやう、我朝ごと夕ごとに見る竹の中におはするにて知りぬ。子となり給ふべき人なめり、とて手にうち入れて家へ持ちて来ぬ。」';

export function VeilProof({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative">
      {/* sticky glass card overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto sticky top-32 mx-auto max-w-sm">
          <GlassCard>
            <p className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">paper &times; ink &times; veil</p>
            <h3 className="mt-2 font-display text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{body}</p>
          </GlassCard>
        </div>
      </div>
      {/* manuscript underlay */}
      <div className="wv-genko h-[44rem] overflow-hidden rounded-2xl p-8" lang="ja">
        <div style={{ writingMode: 'vertical-rl' }} className="h-full text-base leading-[2rem] text-foreground/80">
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>{PASSAGE}</p>
          ))}
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
