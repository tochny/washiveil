'use client';

import * as React from 'react';

import { COPY, LOCALE_LABELS, LOCALE_PATHS, type Locale } from '@/components/copy';
import { GlassNav } from '@/registry/washiveil/ui/glass-nav';
import { LangSwitcher } from '@/registry/washiveil/ui/lang-switcher';
import { ThemeToggle } from '@/registry/washiveil/ui/theme-toggle';

const LOCALES: Locale[] = ['en', 'zh-tw', 'ja'];

/** Persist the manual locale choice into localStorage on click. */
function handleLangClick(e: React.MouseEvent) {
  const el = e.target;
  if (!(el instanceof HTMLElement)) return;
  const anchor = el.closest('a');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (!href) return;
  for (const loc of LOCALES) {
    if (LOCALE_PATHS[loc] === href) {
      try {
        localStorage.setItem('locale', loc);
      } catch {
        /* non-persistent */
      }
      return;
    }
  }
}

// Scrollspy lives in the demo, not in GlassNav — the nav stays a controlled
// component and each consumer decides what "active" means.
export function SiteNav({ locale }: { locale: Locale }) {
  const [active, setActive] = React.useState<string | undefined>();
  const t = COPY[locale];

  const navLinks = [
    { label: t.nav.surfaces, href: '#surfaces' },
    { label: t.nav.controls, href: '#controls' },
    { label: t.nav.overlays, href: '#overlays' },
    { label: t.nav.structure, href: '#structure' },
    { label: t.nav.install, href: '#install' },
  ];

  React.useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );
    const visible = new Set<string>();
    const lastHref = navLinks[navLinks.length - 1].href;
    let atBottom = false;

    function checkBottom() {
      atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        checkBottom();
        if (atBottom) {
          setActive(lastHref);
        } else {
          const current = sections.find((s) => visible.has(s.id));
          setActive(current ? `#${current.id}` : undefined);
        }
      },
      // A band around the upper-middle of the viewport: the section crossing
      // it owns the pill. Top offset clears the sticky nav.
      { rootMargin: '-15% 0px -55% 0px' },
    );
    sections.forEach((s) => observer.observe(s));

    function onScroll() {
      checkBottom();
      if (atBottom) {
        setActive(lastHref);
      } else {
        const current = sections.find((s) => visible.has(s.id));
        setActive(current ? `#${current.id}` : undefined);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlassNav
      brand={<span className="font-display text-xl font-semibold">washiveil</span>}
      links={navLinks}
      activeHref={active}
      cta={{ label: 'GitHub', href: 'https://github.com/tochny' }}
    >
      <LangSwitcher
        onClickCapture={handleLangClick}
        items={LOCALES.map((l) => ({ label: LOCALE_LABELS[l], href: LOCALE_PATHS[l], current: l === locale }))}
      />
      <ThemeToggle />
    </GlassNav>
  );
}
