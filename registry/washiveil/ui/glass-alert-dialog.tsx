'use client'

import * as React from 'react'
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

const GlassAlertDialog = AlertDialogPrimitive.Root

const GlassAlertDialogTrigger = AlertDialogPrimitive.Trigger

const GlassAlertDialogPortal = AlertDialogPrimitive.Portal

const GlassAlertDialogOverlay = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-deep/20 backdrop-blur-sm dark:bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
GlassAlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const GlassAlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <GlassAlertDialogPortal>
    <GlassAlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-3xl border border-glass-edge bg-glass-stronger p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_16px_48px_rgba(28,25,20,0.12)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        className,
      )}
      {...props}
    />
  </GlassAlertDialogPortal>
))
GlassAlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

function GlassAlertDialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
}
GlassAlertDialogHeader.displayName = 'GlassAlertDialogHeader'

function GlassAlertDialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
}
GlassAlertDialogFooter.displayName = 'GlassAlertDialogFooter'

const GlassAlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('font-display text-lg font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
GlassAlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const GlassAlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
GlassAlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

const GlassAlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
  />
))
GlassAlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const GlassAlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
  />
))
GlassAlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  GlassAlertDialog,
  GlassAlertDialogPortal,
  GlassAlertDialogOverlay,
  GlassAlertDialogTrigger,
  GlassAlertDialogContent,
  GlassAlertDialogHeader,
  GlassAlertDialogFooter,
  GlassAlertDialogTitle,
  GlassAlertDialogDescription,
  GlassAlertDialogAction,
  GlassAlertDialogCancel,
}
