import { cn } from '@/lib/utils';

export interface StatStripItem {
  value: string;
  label: string;
}

export interface StatStripProps extends React.ComponentProps<'div'> {
  /** Designed for exactly three items — the grid is three columns and the
   *  numeral hues cycle ruri / korozen / sumire. */
  items: StatStripItem[];
}

// Tri-color numeral cycle: ruri / korozen / sumire — homage order
// (three numbers, three characters). Keep in sync with the palette.
const numeralHues = [
  'text-ruri dark:text-ruri-soft',
  'text-korozen dark:text-korozen-soft',
  'text-sumire dark:text-sumire-soft',
];

export function StatStrip({ items, className, ...props }: StatStripProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-3 gap-0 divide-x divide-glass-border rounded-2xl border border-glass-border bg-glass py-5 shadow-[0_8px_32px_rgba(28,25,20,0.06)] backdrop-blur-xl',
        className,
      )}
      {...props}
    >
      {items.map((item, i) => (
        <div key={i} className="px-4 sm:px-5">
          <p className={cn('font-display text-3xl font-medium', numeralHues[i % 3])}>{item.value}</p>
          <p className="mt-1 font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
