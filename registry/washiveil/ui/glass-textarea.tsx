import * as React from 'react'

import { cn } from '@/lib/utils'

const GlassTextarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-24 w-full rounded-xl border border-glass-edge bg-glass px-3.5 py-2.5 text-sm text-foreground backdrop-blur-md placeholder:text-faint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
GlassTextarea.displayName = 'GlassTextarea'

export { GlassTextarea }
