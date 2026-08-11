'use client'

import * as React from 'react'
import { Toggle as TogglePrimitive } from 'radix-ui'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const glassToggleVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium text-muted-foreground dark:text-body transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-ruri data-[state=on]:text-white dark:data-[state=on]:bg-ruri-soft dark:data-[state=on]:text-deep [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-glass-edge bg-glass backdrop-blur-md dark:data-[state=off]:text-[color:color-mix(in_srgb,var(--body)_70%,var(--foreground))]',
      },
      size: {
        default: 'px-3 py-1.5',
        sm: 'px-2.5 py-1',
        lg: 'px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const GlassToggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof glassToggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(glassToggleVariants({ variant, size, className }))}
    {...props}
  />
))
GlassToggle.displayName = TogglePrimitive.Root.displayName

export { GlassToggle, glassToggleVariants }
