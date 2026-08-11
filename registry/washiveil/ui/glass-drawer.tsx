'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/utils'

function GlassDrawer({ shouldScaleBackground = false, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
}
GlassDrawer.displayName = 'GlassDrawer'

const GlassDrawerTrigger = DrawerPrimitive.Trigger

const GlassDrawerPortal = DrawerPrimitive.Portal

const GlassDrawerClose = DrawerPrimitive.Close

const GlassDrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-deep/20 backdrop-blur-sm dark:bg-black/40',
      className,
    )}
    {...props}
  />
))
GlassDrawerOverlay.displayName = 'GlassDrawerOverlay'

const GlassDrawerContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <GlassDrawerPortal>
    <GlassDrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-x-2 bottom-2 z-50 flex h-auto max-h-[85svh] flex-col rounded-3xl border border-glass-edge bg-glass-stronger backdrop-blur-2xl backdrop-saturate-150 shadow-[0_16px_48px_rgba(28,25,20,0.12)]',
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-foreground/15" />
      {children}
    </DrawerPrimitive.Content>
  </GlassDrawerPortal>
))
GlassDrawerContent.displayName = 'GlassDrawerContent'

function GlassDrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-1.5 p-6 pb-0 text-center sm:text-left', className)} {...props} />
}
GlassDrawerHeader.displayName = 'GlassDrawerHeader'

function GlassDrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-auto flex flex-col gap-2 p-6', className)} {...props} />
}
GlassDrawerFooter.displayName = 'GlassDrawerFooter'

const GlassDrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn('font-display text-lg font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
GlassDrawerTitle.displayName = 'GlassDrawerTitle'

const GlassDrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
GlassDrawerDescription.displayName = 'GlassDrawerDescription'

export {
  GlassDrawer,
  GlassDrawerPortal,
  GlassDrawerOverlay,
  GlassDrawerTrigger,
  GlassDrawerClose,
  GlassDrawerContent,
  GlassDrawerHeader,
  GlassDrawerFooter,
  GlassDrawerTitle,
  GlassDrawerDescription,
}
