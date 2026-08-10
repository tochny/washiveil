import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/noto-sans-tc';
import '@fontsource-variable/noto-sans-jp';
import './globals.css';
import { ThemeScript } from '@/registry/washiveil/ui/theme-toggle';

export const metadata: Metadata = {
  title: 'washiveil — warm paper, translucent veils',
  description:
    'A shadcn registry: washi ground, glass veils, the ruri/korozen/sumire tri-color, and first-class Chinese & Japanese typography.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
