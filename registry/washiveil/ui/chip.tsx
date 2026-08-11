import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const hues = {
  ruri: 'border-ruri/25 bg-ruri/10 text-ruri dark:border-ruri-soft/25 dark:bg-ruri-soft/10 dark:text-ruri-soft',
  korozen:
    'border-korozen/25 bg-korozen/10 text-korozen-deep dark:border-korozen-soft/25 dark:bg-korozen-soft/10 dark:text-korozen-soft',
  sumire:
    'border-sumire/25 bg-sumire/10 text-sumire-deep dark:border-sumire-soft/25 dark:bg-sumire-soft/10 dark:text-sumire-soft',
  neutral: 'border-glass-edge bg-glass text-muted-foreground backdrop-blur',
} as const;

export type ChipHue = keyof typeof hues;

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  hue?: ChipHue;
  asChild?: boolean;
}

export function Chip({ hue = 'ruri', asChild, className, children, ...props }: ChipProps) {
  const Comp = asChild ? Slot.Root : 'span';
  return (
    <Comp
      className={cn(
        'inline-block rounded-full border px-2.5 py-0.5 font-mono text-[0.75rem] tracking-[0.2em] uppercase',
        hues[hue],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
