import { LoaderCircle } from 'lucide-react'

import { cn } from '@/lib/utils'

export type GlassSpinnerProps = React.ComponentProps<typeof LoaderCircle>

export function GlassSpinner({ className, ...props }: GlassSpinnerProps) {
  return (
    <LoaderCircle
      role="status"
      aria-label="Loading"
      className={cn('size-4 text-muted-foreground motion-safe:animate-spin', className)}
      {...props}
    />
  )
}
