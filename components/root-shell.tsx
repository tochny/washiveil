import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/noto-sans-tc';
import '@fontsource-variable/noto-sans-jp';
import '@/app/globals.css';
import { CreditScript } from '@/components/credit-script';
import { LocaleScript } from '@/components/locale-script';
import { ThemeScript } from '@/registry/washiveil/ui/theme-toggle';

const BASE = 'https://washiveil.alexchih.com';

const hreflangEntries = [
  { lang: 'en', href: `${BASE}/` },
  { lang: 'zh-Hant', href: `${BASE}/zh-tw/` },
  { lang: 'ja', href: `${BASE}/ja/` },
  { lang: 'x-default', href: `${BASE}/` },
] as const;

export function RootShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <LocaleScript />
        <ThemeScript />
        <CreditScript />
        {/* React 19 serializes the known hrefLang JSX prop as camelCase in SSR
            output. Next.js metadata's alternates.languages goes through the same
            path. Work around by passing hreflang as a lowercase custom attribute
            — React 19 forwards unknown props on standard HTML elements as-is. */}
        {hreflangEntries.map((e) => (
          <link
            key={e.lang}
            rel="alternate"
            href={e.href}
            {...({ hreflang: e.lang } as React.LinkHTMLAttributes<HTMLLinkElement>)}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
