import { cn } from '@/lib/utils';

export type StatusBadgeProps = React.ComponentProps<'div'>;

export function StatusBadge({ className, children, ...props }: StatusBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-glass-edge bg-glass px-3 py-1 font-mono text-[0.75rem] text-ruri backdrop-blur-md dark:text-ruri-soft',
        className,
      )}
      {...props}
    >
      <span className="inline-flex size-1.5 rounded-full bg-ruri motion-safe:animate-pulse dark:bg-ruri-soft" />
      {children}
    </div>
  );
}
