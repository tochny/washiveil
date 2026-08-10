import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const glassAlertVariants = cva(
  'relative grid grid-cols-[0_1fr] items-start gap-x-3 rounded-2xl border p-4 text-sm backdrop-blur-md [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4 [&>svg]:text-current has-[svg]:grid-cols-[auto_1fr] has-[svg]:pl-11',
  {
    variants: {
      variant: {
        default: 'border-glass-border bg-glass text-body',
        info: 'border-ruri/25 bg-ruri/10 text-ruri dark:border-ruri-soft/25 dark:bg-ruri-soft/10 dark:text-ruri-soft',
        warning:
          'border-korozen/25 bg-korozen/10 text-korozen dark:border-korozen-soft/25 dark:bg-korozen-soft/10 dark:text-korozen-soft',
        destructive: 'border-destructive/30 bg-destructive/10 text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface GlassAlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof glassAlertVariants> {}

function GlassAlert({ variant, className, ...props }: GlassAlertProps) {
  return <div role="alert" className={cn(glassAlertVariants({ variant }), className)} {...props} />
}

function GlassAlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn('col-start-2 font-medium leading-none tracking-tight', className)} {...props} />
}

function GlassAlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <div className={cn('col-start-2 text-sm text-muted-foreground [&_p]:leading-relaxed', className)} {...props} />
}

export { GlassAlert, GlassAlertTitle, GlassAlertDescription }
