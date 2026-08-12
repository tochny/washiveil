import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/noto-sans-tc';
import '@fontsource-variable/noto-sans-jp';
import '@/app/globals.css';
import { CreditScript } from '@/components/credit-script';
import { LocaleScript } from '@/components/locale-script';
import { ThemeScript } from '@/registry/washiveil/ui/theme-toggle';

export function RootShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <LocaleScript />
        <ThemeScript />
        <CreditScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
