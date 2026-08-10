import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.ComponentProps<'div'> {
  padded?: boolean;
}

export function GlassCard({ padded = true, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-glass-border bg-glass shadow-[0_8px_32px_rgba(28,25,20,0.06)] backdrop-blur-xl',
        padded && 'p-6',
        className,
      )}
      {...props}
    />
  );
}
