import * as React from 'react';
import { Slot } from 'radix-ui';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';

function GlassBreadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" {...props} />;
}

function GlassBreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      className={cn('flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

function GlassBreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />;
}

interface GlassBreadcrumbLinkProps extends React.ComponentProps<'a'> {
  asChild?: boolean;
}

function GlassBreadcrumbLink({ asChild, className, ...props }: GlassBreadcrumbLinkProps) {
  const Comp = asChild ? Slot.Root : 'a';
  return (
    <Comp
      className={cn('transition-colors hover:text-ruri dark:hover:text-ruri-soft', className)}
      {...props}
    />
  );
}

function GlassBreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('text-foreground', className)}
      {...props}
    />
  );
}

function GlassBreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li role="presentation" aria-hidden="true" className={cn('[&>svg]:size-3.5', className)} {...props}>
      {children ?? <ChevronRight className="text-faint" />}
    </li>
  );
}

function GlassBreadcrumbEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('grid size-9 place-items-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4 text-faint" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  GlassBreadcrumb,
  GlassBreadcrumbList,
  GlassBreadcrumbItem,
  GlassBreadcrumbLink,
  GlassBreadcrumbPage,
  GlassBreadcrumbSeparator,
  GlassBreadcrumbEllipsis,
};
