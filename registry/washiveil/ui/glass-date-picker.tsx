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
}

function GlassDatePicker({
  value,
  onValueChange,
  placeholder = 'Pick a date',
  className,
}: GlassDatePickerProps) {
  const [open, setOpen] = React.useState(false)
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
          {value
            ? new Intl.DateTimeFormat(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(value)
            : placeholder}
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
