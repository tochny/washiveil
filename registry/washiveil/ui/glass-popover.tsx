'use client'

import * as React from 'react'
import { Popover as PopoverPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

const GlassPopover = PopoverPrimitive.Root

const GlassPopoverTrigger = PopoverPrimitive.Trigger

const GlassPopoverAnchor = PopoverPrimitive.Anchor

const GlassPopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 6, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-2xl border border-glass-edge bg-glass-stronger p-4 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_16px_48px_rgba(28,25,20,0.12)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
GlassPopoverContent.displayName = PopoverPrimitive.Content.displayName

export { GlassPopover, GlassPopoverTrigger, GlassPopoverAnchor, GlassPopoverContent }
