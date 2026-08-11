'use client'

import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'

import { cn } from '@/lib/utils'
import { GlassDialog, GlassDialogContent } from './glass-dialog'

const GlassCommand = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-2xl border border-glass-edge bg-glass-stronger backdrop-blur-2xl backdrop-saturate-150 shadow-[0_16px_48px_rgba(28,25,20,0.12)]',
      className,
    )}
    {...props}
  />
))
GlassCommand.displayName = CommandPrimitive.displayName

interface GlassCommandDialogProps extends React.ComponentPropsWithoutRef<typeof GlassDialog> {}

function GlassCommandDialog({ children, ...props }: GlassCommandDialogProps) {
  return (
    <GlassDialog {...props}>
      <GlassDialogContent className="overflow-hidden p-0">
        <CommandPrimitive className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[0.6875rem] [&_[cmdk-group-heading]]:tracking-[0.15em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-faint [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3">
          {children}
        </CommandPrimitive>
      </GlassDialogContent>
    </GlassDialog>
  )
}

const GlassCommandInput = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center gap-2 border-b border-foreground/10 px-3.5" cmdk-input-wrapper="">
    <Search className="size-4 shrink-0 text-faint" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full bg-transparent text-sm outline-none placeholder:text-faint disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
))
GlassCommandInput.displayName = CommandPrimitive.Input.displayName

const GlassCommandList = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-x-hidden overflow-y-auto p-1.5', className)}
    {...props}
  />
))
GlassCommandList.displayName = CommandPrimitive.List.displayName

const GlassCommandEmpty = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty ref={ref} className={cn('py-6 text-center text-sm text-muted-foreground', className)} {...props} />
))
GlassCommandEmpty.displayName = CommandPrimitive.Empty.displayName

const GlassCommandGroup = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[0.6875rem] [&_[cmdk-group-heading]]:tracking-[0.15em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-faint',
      className,
    )}
    {...props}
  />
))
GlassCommandGroup.displayName = CommandPrimitive.Group.displayName

const GlassCommandSeparator = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn('-mx-1.5 my-1 h-px bg-border', className)} {...props} />
))
GlassCommandSeparator.displayName = CommandPrimitive.Separator.displayName

const GlassCommandItem = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default gap-2 select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[selected=true]:ring-2 data-[selected=true]:ring-inset data-[selected=true]:ring-ring data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      className,
    )}
    {...props}
  />
))
GlassCommandItem.displayName = CommandPrimitive.Item.displayName

function GlassCommandShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('ml-auto font-mono text-xs tracking-widest text-faint', className)} {...props} />
}
GlassCommandShortcut.displayName = 'GlassCommandShortcut'

export {
  GlassCommand,
  GlassCommandDialog,
  GlassCommandInput,
  GlassCommandList,
  GlassCommandEmpty,
  GlassCommandGroup,
  GlassCommandItem,
  GlassCommandSeparator,
  GlassCommandShortcut,
}
