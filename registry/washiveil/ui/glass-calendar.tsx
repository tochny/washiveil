'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import type { DayPickerProps } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

function GlassCalendar({ className, classNames, showOutsideDays = true, ...props }: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        // UI elements
        root: '',
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        month_caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'font-display font-medium text-sm',
        nav: 'flex items-center gap-1',
        button_previous: cn(
          'inline-flex size-8 items-center justify-center rounded-full border border-foreground/10 bg-transparent text-sm transition-colors',
          'hover:border-ruri hover:text-ruri dark:hover:border-ruri-soft dark:hover:text-ruri-soft',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'absolute left-1',
        ),
        button_next: cn(
          'inline-flex size-8 items-center justify-center rounded-full border border-foreground/10 bg-transparent text-sm transition-colors',
          'hover:border-ruri hover:text-ruri dark:hover:border-ruri-soft dark:hover:text-ruri-soft',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'absolute right-1',
        ),
        month_grid: 'w-full border-collapse',
        weekdays: 'flex',
        weekday: 'font-mono text-[0.6875rem] tracking-[0.15em] uppercase text-faint rounded-md w-9 font-normal',
        week: 'flex w-full mt-2',
        day: cn(
          'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20',
          'flex items-center justify-center rounded-full',
          'hover:bg-foreground/6',
        ),
        day_button: cn(
          'inline-flex size-9 items-center justify-center rounded-full text-sm',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        ),
        // Selection states
        selected: 'bg-ruri text-white dark:bg-ruri-soft dark:text-deep hover:bg-ruri hover:text-white dark:hover:bg-ruri-soft dark:hover:text-deep',
        range_start: 'bg-ruri text-white dark:bg-ruri-soft dark:text-deep rounded-l-full',
        range_end: 'bg-ruri text-white dark:bg-ruri-soft dark:text-deep rounded-r-full',
        range_middle: 'bg-accent text-accent-foreground',
        // Day flags
        today: 'border border-ruri/40 dark:border-ruri-soft/40',
        outside: 'text-faint/60 aria-selected:bg-accent/50 aria-selected:text-faint',
        disabled: 'text-muted-foreground opacity-40',
        hidden: 'invisible',
        focused: '',
        // Remaining UI elements
        chevron: 'size-4',
        dropdowns: '',
        dropdown: '',
        dropdown_root: '',
        footer: '',
        weeks: '',
        week_number: '',
        week_number_header: '',
        months_dropdown: '',
        years_dropdown: '',
        // Animation states
        weeks_before_enter: '',
        weeks_before_exit: '',
        weeks_after_enter: '',
        weeks_after_exit: '',
        caption_after_enter: '',
        caption_after_exit: '',
        caption_before_enter: '',
        caption_before_exit: '',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...chevronProps }) => {
          if (orientation === 'left') {
            return <ChevronLeft className="size-4" {...chevronProps} />
          }
          return <ChevronRight className="size-4" {...chevronProps} />
        },
      }}
      {...props}
    />
  )
}
GlassCalendar.displayName = 'GlassCalendar'

export { GlassCalendar }
