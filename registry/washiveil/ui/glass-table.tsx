import * as React from 'react'

import { cn } from '@/lib/utils'

function GlassTable({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div className="overflow-x-auto">
      <table className={cn('w-full text-left text-sm', className)} {...props} />
    </div>
  )
}

function GlassTableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead className={cn('[&_tr]:border-b [&_tr]:border-border', className)} {...props} />
}

function GlassTableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
}

function GlassTableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return <tfoot className={cn('border-t border-border font-medium', className)} {...props} />
}

function GlassTableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      className={cn('border-b border-foreground/10 last:border-0 transition-colors hover:bg-foreground/3', className)}
      {...props}
    />
  )
}

function GlassTableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      className={cn('py-2 pr-4 font-mono text-[0.75rem] tracking-[0.2em] uppercase text-faint font-normal', className)}
      {...props}
    />
  )
}

function GlassTableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return <td className={cn('py-2 pr-4', className)} {...props} />
}

function GlassTableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return <caption className={cn('mt-3 text-xs text-faint', className)} {...props} />
}

export {
  GlassTable,
  GlassTableHeader,
  GlassTableBody,
  GlassTableFooter,
  GlassTableRow,
  GlassTableHead,
  GlassTableCell,
  GlassTableCaption,
}
