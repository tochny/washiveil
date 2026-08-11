'use client'

import * as React from 'react'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { GlassButton } from './glass-button'
import { GlassPopover, GlassPopoverContent, GlassPopoverTrigger } from './glass-popover'
import { GlassCalendar } from './glass-calendar'

export interface GlassDatePickerProps {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  /** Custom date formatter. Defaults to Intl.DateTimeFormat with long month. */
  formatDate?: (date: Date) => string
}

const defaultFormatDate = (date: Date) =>
  new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)

function GlassDatePicker({
  value,
  onValueChange,
  placeholder = 'Pick a date',
  className,
  formatDate = defaultFormatDate,
}: GlassDatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  let displayText: string | undefined
  if (value) {
    // Before mount, render a deterministic ISO-like fallback so server/client
    // HTML is identical. After mount, swap to the locale-aware formatter.
    displayText = mounted ? formatDate(value) : value.toISOString().slice(0, 10)
  }

  return (
    <GlassPopover open={open} onOpenChange={setOpen}>
      <GlassPopoverTrigger asChild>
        <GlassButton
          variant="secondary"
          className={cn(
            'w-full justify-start rounded-xl font-normal',
            !value && 'text-faint',
            className,
          )}
        >
          <CalendarIcon className="mr-2 size-4 text-faint" />
          {displayText ?? placeholder}
        </GlassButton>
      </GlassPopoverTrigger>
      <GlassPopoverContent className="w-auto p-0">
        <GlassCalendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onValueChange?.(date)
            setOpen(false)
          }}
          autoFocus
        />
      </GlassPopoverContent>
    </GlassPopover>
  )
}
GlassDatePicker.displayName = 'GlassDatePicker'

export { GlassDatePicker }
