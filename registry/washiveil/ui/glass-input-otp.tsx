'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { Minus } from 'lucide-react'

import { cn } from '@/lib/utils'

const GlassInputOTP = React.forwardRef<
  React.ComponentRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn('flex items-center gap-2 has-[:disabled]:opacity-50', containerClassName)}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
))
GlassInputOTP.displayName = 'GlassInputOTP'

function GlassInputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex items-center gap-1.5', className)} {...props} />
}
GlassInputOTPGroup.displayName = 'GlassInputOTPGroup'

function GlassInputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      className={cn(
        'relative flex size-10 items-center justify-center rounded-xl border border-border bg-glass font-mono text-sm backdrop-blur-md transition-all',
        isActive && 'z-10 outline-none ring-2 ring-ring ring-offset-2 ring-offset-background',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground motion-reduce:animate-none" />
        </div>
      )}
    </div>
  )
}
GlassInputOTPSlot.displayName = 'GlassInputOTPSlot'

function GlassInputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div role="separator" {...props}>
      <Minus className="size-3.5 text-faint" />
    </div>
  )
}
GlassInputOTPSeparator.displayName = 'GlassInputOTPSeparator'

export { GlassInputOTP, GlassInputOTPGroup, GlassInputOTPSlot, GlassInputOTPSeparator }
