import { cn } from '@/lib/utils'

export function GlassEmpty({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'grid place-items-center gap-3 rounded-2xl border border-dashed border-border bg-glass/50 p-10 text-center backdrop-blur-md',
        className,
      )}
      {...props}
    />
  )
}

export function GlassEmptyIcon({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'grid size-12 place-items-center rounded-full border border-glass-edge bg-glass text-faint [&_svg]:size-5',
        className,
      )}
      {...props}
    />
  )
}

export function GlassEmptyTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return <h3 className={cn('font-display text-base font-medium', className)} {...props} />
}

export function GlassEmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p className={cn('max-w-sm text-sm text-muted-foreground', className)} {...props} />
}

export function GlassEmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mt-1 flex flex-wrap items-center justify-center gap-3', className)}
      {...props}
    />
  )
}
