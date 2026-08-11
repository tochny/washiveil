'use client'

import * as React from 'react'
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { glassToggleVariants } from './glass-toggle'

const GlassToggleGroupContext = React.createContext<VariantProps<typeof glassToggleVariants>>({
  size: 'default',
  variant: 'default',
})

const GlassToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof glassToggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(
      'inline-flex gap-1 rounded-full border border-muted bg-muted p-1 backdrop-blur',
      className,
    )}
    {...props}
  >
    <GlassToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </GlassToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))
GlassToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const GlassToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof glassToggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(GlassToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        glassToggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})
GlassToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { GlassToggleGroup, GlassToggleGroupItem }
