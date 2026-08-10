import * as React from 'react'

import { cn } from '@/lib/utils'

const GlassInput = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-xl border border-glass-edge bg-glass px-3.5 py-2.5 text-sm text-foreground backdrop-blur-md placeholder:text-faint transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
GlassInput.displayName = 'GlassInput'

export { GlassInput }
