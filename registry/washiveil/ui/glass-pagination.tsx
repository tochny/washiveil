import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';

function GlassPagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return <nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />;
}

function GlassPaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('flex items-center gap-2', className)} {...props} />;
}

function GlassPaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li {...props} />;
}

const ghostCircle =
  'grid size-9 place-items-center rounded-full border border-foreground/10 text-muted-foreground transition-colors hover:border-ruri hover:text-ruri dark:border-white/10 dark:hover:border-ruri-soft dark:hover:text-ruri-soft';

const activePill = 'border-transparent bg-ruri text-white dark:bg-ruri-soft dark:text-deep';

interface GlassPaginationLinkProps extends React.ComponentProps<'a'> {
  isActive?: boolean;
}

function GlassPaginationLink({ isActive, className, ...props }: GlassPaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(ghostCircle, isActive && activePill, className)}
      {...props}
    />
  );
}

function GlassPaginationPrevious({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a aria-label="Go to previous page" className={cn(ghostCircle, className)} {...props}>
      <ChevronLeft className="size-4" />
      <span className="sr-only">Previous</span>
    </a>
  );
}

function GlassPaginationNext({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a aria-label="Go to next page" className={cn(ghostCircle, className)} {...props}>
      <ChevronRight className="size-4" />
      <span className="sr-only">Next</span>
    </a>
  );
}

function GlassPaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span className={cn('grid size-9 place-items-center text-faint', className)} {...props}>
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  GlassPagination,
  GlassPaginationContent,
  GlassPaginationItem,
  GlassPaginationLink,
  GlassPaginationPrevious,
  GlassPaginationNext,
  GlassPaginationEllipsis,
};
