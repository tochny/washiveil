'use client';

import * as React from 'react';
import { Avatar as AvatarPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

const GlassAvatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex size-10 shrink-0 overflow-hidden rounded-full border border-glass-edge bg-glass backdrop-blur',
      className,
    )}
    {...props}
  />
));
GlassAvatar.displayName = AvatarPrimitive.Root.displayName;

const GlassAvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn('aspect-square size-full object-cover', className)} {...props} />
));
GlassAvatarImage.displayName = AvatarPrimitive.Image.displayName;

const GlassAvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex size-full items-center justify-center font-mono text-[0.75rem] uppercase text-muted-foreground',
      className,
    )}
    {...props}
  />
));
GlassAvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { GlassAvatar, GlassAvatarImage, GlassAvatarFallback };
