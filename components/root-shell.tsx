import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/noto-sans-tc';
import '@fontsource-variable/noto-sans-jp';
import '@/app/globals.css';
import { CreditScript } from '@/components/credit-script';
import { LocaleScript } from '@/components/locale-script';
import { ThemeScript } from '@/registry/washiveil/ui/theme-toggle';

// GA measurement ID — hardcoded because it is public by design (shipped in
// page HTML) and this site deploys from a manual local build where a missing
// build-time env var would silently ship no analytics.
const GA_ID = 'G-BJKR77KRZ2';

function AnalyticsScript() {
  if (process.env.NODE_ENV !== 'production') return null;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`,
        }}
      />
    </>
  );
}

export function RootShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <LocaleScript />
        <ThemeScript />
        <CreditScript />
        <AnalyticsScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
