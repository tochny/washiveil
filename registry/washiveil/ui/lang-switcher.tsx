import { cn } from '@/lib/utils';

// Locale switcher on the glass pill ground — the active language is a filled
// ruri moment, exactly like an active nav item. Styling keys off aria-current
// so client scripts can re-point the pill without knowing the class list.

export interface LangSwitcherItem {
  label: string;
  href: string;
  current?: boolean;
}

export interface LangSwitcherProps extends React.ComponentProps<'nav'> {
  items: LangSwitcherItem[];
}

export function LangSwitcher({ items, className, ...props }: LangSwitcherProps) {
  return (
    <nav
      aria-label="Language"
      className={cn(
        // Lives on glass (the nav pill): a muted track, not glass-on-glass — white-on-white
        // has no value step in light, so the zone would vanish. muted steps down in light
        // (ink 6%) and up in dark (white 10%); the surface, not the border, carries the edge.
        'inline-flex rounded-full border border-muted bg-muted p-1 font-mono text-[0.75rem] backdrop-blur',
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={cn(
            'rounded-full px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            item.current
              ? 'bg-ruri font-medium text-white dark:bg-ruri-soft dark:text-deep'
              : 'text-muted-foreground hover:bg-foreground/6 hover:text-foreground dark:hover:bg-white/10',
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
