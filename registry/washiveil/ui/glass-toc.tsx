import { cn } from '@/lib/utils';

export interface GlassTOCItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface GlassTOCProps extends Omit<React.ComponentProps<'nav'>, 'title'> {
  title?: string;
  items: GlassTOCItem[];
}

export function GlassTOC({ title = 'On this page', items, className, ...props }: GlassTOCProps) {
  return (
    <nav
      className={cn('rounded-2xl border border-glass-border bg-glass p-5 text-[0.8125rem] backdrop-blur-xl', className)}
      {...props}
    >
      <p className="font-mono text-[0.75rem] tracking-[0.2em] text-muted-foreground uppercase">{title}</p>
      <ul className="mt-3 space-y-2 text-muted-foreground">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={item.active ? 'text-ruri dark:text-ruri-soft' : 'hover:text-foreground'}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
