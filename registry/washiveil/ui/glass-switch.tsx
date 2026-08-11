'use client'

import * as React from 'react'
import { Switch as SwitchPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

const GlassSwitch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      'peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-input transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-ruri dark:data-[state=checked]:bg-ruri-soft',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block size-5 rounded-full bg-background shadow ring-0 dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-deep transition-transform data-[state=checked]:translate-x-[17px] data-[state=unchecked]:translate-x-px',
      )}
    />
  </SwitchPrimitive.Root>
))
GlassSwitch.displayName = SwitchPrimitive.Root.displayName

export { GlassSwitch }
