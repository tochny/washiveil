import { cn } from '@/lib/utils'

export type GlassKbdProps = React.ComponentProps<'kbd'>

export function GlassKbd({ className, ...props }: GlassKbdProps) {
  return (
    <kbd
      className={cn(
        'inline-flex h-5 min-w-5 items-center justify-center rounded-md border border-glass-edge bg-glass px-1.5 font-mono text-[0.6875rem] font-medium text-muted-foreground backdrop-blur',
        className,
      )}
      {...props}
    />
  )
}
