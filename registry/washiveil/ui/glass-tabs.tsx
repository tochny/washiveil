'use client'

import * as React from 'react'
import { Tabs as TabsPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

const GlassTabs = TabsPrimitive.Root

const GlassTabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex items-center gap-1 rounded-full border border-muted bg-muted p-1 backdrop-blur',
      className,
    )}
    {...props}
  />
))
GlassTabsList.displayName = TabsPrimitive.List.displayName

const GlassTabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'rounded-full px-3.5 py-1.5 text-sm text-muted-foreground dark:text-body transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=active]:bg-ruri data-[state=active]:font-medium data-[state=active]:text-white dark:data-[state=active]:bg-ruri-soft dark:data-[state=active]:text-deep',
      className,
    )}
    {...props}
  />
))
GlassTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const GlassTabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      className,
    )}
    {...props}
  />
))
GlassTabsContent.displayName = TabsPrimitive.Content.displayName

export { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent }
