import { cn } from '@/lib/utils';

// Identifier badge (course codes, cert codes) -- rounded-md, no border.
// Distinct from Chip (rounded-full pill, bordered) which marks taxonomy.

export type CodeBadgeProps = React.ComponentProps<'span'>;

export function CodeBadge({ className, ...props }: CodeBadgeProps) {
  return (
    <span
      className={cn(
        'rounded-md bg-ruri/10 px-2 py-1 font-mono text-[0.75rem] font-semibold text-ruri dark:bg-ruri-soft/10 dark:text-ruri-soft',
        className,
      )}
      {...props}
    />
  );
}
