import { GlassCard } from '@/registry/washiveil/ui/glass-card';

// Taketori Monogatari, opening through the naming of Kaguya-hime (public
// domain) — one continuous pass, no tiling. The text ends where she
// receives her name.
const PASSAGE =
  '今は昔、竹取の翁といふものありけり。野山にまじりて竹を取りつつ、よろづのことに使ひけり。名をば、さぬきの造となむいひける。その竹の中に、もと光る竹なむ一筋ありける。あやしがりて、寄りて見るに、筒の中光りたり。それを見れば、三寸ばかりなる人、いとうつくしうてゐたり。翁いふやう、我朝ごと夕ごとに見る竹の中におはするにて知りぬ。子となり給ふべき人なめり、とて手にうち入れて家へ持ちて来ぬ。妻の嫗に預けて養はす。うつくしきこと、かぎりなし。いと幼ければ、籠に入れて養ふ。竹取の翁、竹を取るに、この子を見つけてのちに竹取るに、節を隔てて、よごとに金ある竹を見つくること重なりぬ。かくて翁やうやう豊かになりゆく。この児、養ふほどに、すくすくと大きになりまさる。三月ばかりになるほどに、よき程なる人になりぬれば、髪上げなどさうして、髪上げさせ、裳着す。帳のうちよりも出さず、いつき養ふ。この児のかたち、けうらなること世になく、屋のうちは暗き所なく光満ちたり。翁、心地あしく苦しき時も、この子を見れば、苦しきこともやみぬ。腹立たしきことも慰みけり。翁、竹を取ること久しくなりぬ。勢ひ猛の者になりにけり。この子いと大きになりぬれば、名を、三室戸斎部の秋田を呼びてつけさす。秋田、なよ竹のかぐや姫とつけつ。';

export function VeilProof({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative">
      {/* sticky glass card overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto sticky top-32 mx-auto max-w-sm">
          {/* Lift the veil: hover (desktop) or press-and-hold (touch) fades the
              card so the ink beneath shows sharp. Pure CSS — :active covers touch. */}
          <GlassCard className="transition-opacity duration-500 hover:opacity-0 active:opacity-0">
            <p className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">paper &times; ink &times; veil</p>
            <h3 className="mt-2 font-display text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{body}</p>
          </GlassCard>
        </div>
      </div>
      {/* manuscript underlay */}
      <div className="wv-genko flex h-[44rem] justify-center overflow-hidden rounded-2xl p-8" lang="ja">
        <div style={{ writingMode: 'vertical-rl' }} className="h-full text-base leading-[2rem] text-foreground/80">
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
