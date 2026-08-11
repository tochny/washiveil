'use client'

import * as React from 'react'
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const GlassNavigationMenu = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <GlassNavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
GlassNavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const GlassNavigationMenuList = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center gap-1 rounded-full border border-muted bg-muted p-1 backdrop-blur',
      className,
    )}
    {...props}
  />
))
GlassNavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const GlassNavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  'group inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground',
)

const GlassNavigationMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDown
      className="relative top-[1px] ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
GlassNavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const GlassNavigationMenuContent = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      className,
    )}
    {...props}
  />
))
GlassNavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const GlassNavigationMenuLink = NavigationMenuPrimitive.Link

const GlassNavigationMenuIndicator = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-glass-edge shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
GlassNavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

const GlassNavigationMenuViewport = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-2xl border border-glass-edge bg-glass-stronger p-1.5 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_16px_48px_rgba(28,25,20,0.12)] transition-[width,_height] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
))
GlassNavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

export {
  navigationMenuTriggerStyle,
  GlassNavigationMenu,
  GlassNavigationMenuList,
  GlassNavigationMenuItem,
  GlassNavigationMenuContent,
  GlassNavigationMenuTrigger,
  GlassNavigationMenuLink,
  GlassNavigationMenuIndicator,
  GlassNavigationMenuViewport,
}
