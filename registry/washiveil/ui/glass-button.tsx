import { Slot } from 'radix-ui';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const glassButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-korozen font-semibold text-white shadow-[0_8px_24px_rgba(208,114,46,0.30)] hover:bg-korozen-deep dark:bg-korozen-soft dark:font-medium dark:text-deep dark:hover:bg-[#F7B888]',
        secondary:
          'border border-border text-body hover:border-ruri hover:text-ruri dark:hover:border-ruri-soft dark:hover:text-ruri-soft',
        tinted:
          'border border-ruri/25 bg-ruri/10 text-ruri hover:bg-ruri/20 dark:border-ruri-soft/25 dark:bg-ruri-soft/10 dark:text-ruri-soft dark:hover:bg-ruri-soft/20',
      },
      size: {
        md: 'px-6 py-3',
        sm: 'px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean;
}

export function GlassButton({ variant, size, asChild, className, ...props }: GlassButtonProps) {
  const Comp = asChild ? Slot.Root : 'button';
  return <Comp className={cn(glassButtonVariants({ variant, size }), className)} {...props} />;
}
