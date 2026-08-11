// A quiet console signature — the fourth place the author's name lives
// (manifest, README, footer being the loud three).
export function CreditScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          'try{console.log("%cwashiveil%c 紙 · 紗 · 三色光 — by Alex Chih · alexchih.com",' +
          '"background:#d0722e;color:#fff;padding:2px 8px;border-radius:9999px;font-weight:600",' +
          '"color:#7b68c8;padding-left:6px")}catch(e){}',
      }}
    />
  );
}
