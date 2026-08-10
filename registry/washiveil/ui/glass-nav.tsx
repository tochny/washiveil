'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlassNavProps {
  brand: React.ReactNode;
  links: { label: string; href: string }[];
  activeHref?: string;
  cta?: { label: string; href: string };
  children?: React.ReactNode;
  className?: string;
}

export function GlassNav({ brand, links, activeHref, cta, children, className }: GlassNavProps) {
  const headerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const hdr = headerRef.current;
    if (!hdr) return;
    const sync = () => hdr.toggleAttribute('data-scrolled', window.scrollY > 24);
    window.addEventListener('scroll', sync, { passive: true });
    sync();
    return () => window.removeEventListener('scroll', sync);
  }, []);

  const handleItemEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const pill = pillRef.current;
    if (!pill) return;
    pill.style.width = `${el.offsetWidth}px`;
    pill.style.height = `${el.offsetHeight}px`;
    pill.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px)`;
    pill.style.opacity = '1';
  };

  const handleNavLeave = () => {
    if (pillRef.current) pillRef.current.style.opacity = '0';
  };

  const activeClass = 'bg-ruri font-medium text-white dark:bg-ruri-soft dark:text-deep';
  const inactiveClass = 'text-muted-foreground hover:text-foreground';

  return (
    <header
      ref={headerRef}
      className={cn('group sticky top-4 z-10 mt-4', className)}
      style={{ viewTransitionName: 'site-nav' }}
    >
      {/* Scroll-edge masked backdrop-blur band */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-4 -z-10 h-[calc(100%+2.5rem)] backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
        aria-hidden="true"
      />

      {/* Glass pill */}
      <div className="grid grid-cols-[1fr_auto] items-center rounded-full lg:grid-cols-[1fr_auto_1fr] border border-glass-edge bg-glass-strong px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.70),inset_0_-1px_0_rgba(28,25,20,0.05),0_8px_32px_rgba(28,25,20,0.08)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300 group-data-[scrolled]:bg-glass-stronger sm:px-6 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(0,0,0,0.35),0_8px_32px_rgba(0,0,0,0.35)]">
        {/* Brand zone */}
        {brand}

        {/* Desktop nav with sliding hover pill */}
        <nav
          className="relative hidden items-center gap-1 text-[0.9375rem] lg:flex lg:justify-self-center"
          onMouseLeave={handleNavLeave}
        >
          <span
            ref={pillRef}
            className="pointer-events-none absolute rounded-full bg-foreground/6 opacity-0 transition-all duration-200 dark:bg-white/10"
            aria-hidden="true"
          />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === activeHref ? 'page' : undefined}
              onMouseEnter={handleItemEnter}
              className={`relative rounded-full px-3 py-1.5 ${
                link.href === activeHref ? activeClass : inactiveClass
              }`}
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <a
              href={cta.href}
              aria-current={cta.href === activeHref ? 'page' : undefined}
              onMouseEnter={handleItemEnter}
              className={`relative rounded-full px-3 py-1.5 ${
                cta.href === activeHref ? activeClass : inactiveClass
              }`}
            >
              {cta.label}
            </a>
          )}
        </nav>

        {/* Desktop actions zone */}
        <div className="hidden items-center gap-2 lg:flex lg:justify-self-end">{children}</div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center justify-self-end rounded-full border border-glass-edge bg-secondary lg:hidden"
        >
          <span className="flex flex-col gap-1">
            <span className="h-0.5 w-4 rounded bg-current" />
            <span className="h-0.5 w-4 rounded bg-current" />
          </span>
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        id={panelId}
        hidden={!open}
        className="mt-2 rounded-3xl border border-glass-edge bg-glass-stronger p-4 shadow-[0_16px_48px_rgba(28,25,20,0.12)] backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
      >
        <nav className="flex flex-col gap-1 text-base">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === activeHref ? 'page' : undefined}
              className={`rounded-xl px-4 py-2.5 ${
                link.href === activeHref ? activeClass : inactiveClass
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        {(cta || children) && (
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-foreground/10 px-2 pt-4 dark:border-white/6">
            {cta && (
              <a
                href={cta.href}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                {cta.label}
              </a>
            )}
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
