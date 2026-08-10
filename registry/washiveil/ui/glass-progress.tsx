'use client';

import * as React from 'react';
import { Progress as ProgressPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

const GlassProgress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    value={value}
    className={cn('h-2 w-full overflow-hidden rounded-full border border-glass-edge bg-glass backdrop-blur', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full rounded-full bg-ruri transition-transform dark:bg-ruri-soft"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
GlassProgress.displayName = ProgressPrimitive.Root.displayName;

export { GlassProgress };
