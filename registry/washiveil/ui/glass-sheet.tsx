'use client'

import * as React from 'react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { X } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const GlassSheet = DialogPrimitive.Root

const GlassSheetTrigger = DialogPrimitive.Trigger

const GlassSheetClose = DialogPrimitive.Close

const GlassSheetPortal = DialogPrimitive.Portal

const GlassSheetOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-deep/20 backdrop-blur-sm dark:bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
GlassSheetOverlay.displayName = DialogPrimitive.Overlay.displayName

const glassSheetContentVariants = cva(
  'fixed z-50 gap-4 bg-glass-stronger backdrop-blur-2xl backdrop-saturate-150 p-6 shadow-[0_16px_48px_rgba(28,25,20,0.12)] transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:duration-300 data-[state=closed]:duration-200',
  {
    variants: {
      side: {
        top: 'inset-x-2 top-2 rounded-3xl border border-glass-edge data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-2 bottom-2 rounded-3xl border border-glass-edge data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-2 left-2 h-auto w-3/4 max-w-sm rounded-3xl border border-glass-edge data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        right:
          'inset-y-2 right-2 h-auto w-3/4 max-w-sm rounded-3xl border border-glass-edge data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

export interface GlassSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof glassSheetContentVariants> {}

const GlassSheetContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  GlassSheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <GlassSheetPortal>
    <GlassSheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(glassSheetContentVariants({ side }), className)}
      {...props}
    >
      <DialogPrimitive.Close className="absolute right-4 top-4 grid size-6 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none">
        <X className="size-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
      {children}
    </DialogPrimitive.Content>
  </GlassSheetPortal>
))
GlassSheetContent.displayName = DialogPrimitive.Content.displayName

function GlassSheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
}
GlassSheetHeader.displayName = 'GlassSheetHeader'

function GlassSheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props} />
}
GlassSheetFooter.displayName = 'GlassSheetFooter'

const GlassSheetTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('font-display text-lg font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
GlassSheetTitle.displayName = DialogPrimitive.Title.displayName

const GlassSheetDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
GlassSheetDescription.displayName = DialogPrimitive.Description.displayName

export {
  GlassSheet,
  GlassSheetPortal,
  GlassSheetOverlay,
  GlassSheetTrigger,
  GlassSheetClose,
  GlassSheetContent,
  GlassSheetHeader,
  GlassSheetFooter,
  GlassSheetTitle,
  GlassSheetDescription,
}
