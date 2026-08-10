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
        'inline-flex rounded-full border border-glass-edge bg-glass p-1 font-mono text-[0.75rem] backdrop-blur',
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
            'rounded-full px-3 py-1 transition-colors',
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
