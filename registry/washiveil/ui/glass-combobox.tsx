'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { GlassPopover, GlassPopoverContent, GlassPopoverTrigger } from './glass-popover'
import {
  GlassCommand,
  GlassCommandEmpty,
  GlassCommandGroup,
  GlassCommandInput,
  GlassCommandItem,
  GlassCommandList,
} from './glass-command'

export interface GlassComboboxProps {
  options: { value: string; label: string }[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  emptyText?: string
  className?: string
}

function GlassCombobox({
  options,
  value: controlledValue,
  onValueChange,
  placeholder = 'Select...',
  emptyText = 'No results found.',
  className,
}: GlassComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState('')

  const value = controlledValue !== undefined ? controlledValue : internalValue

  const selectedLabel = options.find((opt) => opt.value === value)?.label

  function handleSelect(currentValue: string) {
    const newValue = currentValue === value ? '' : currentValue
    if (controlledValue === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
    setOpen(false)
  }

  return (
    <GlassPopover open={open} onOpenChange={setOpen}>
      <GlassPopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className={cn(
            'flex h-10 w-full items-center justify-between rounded-xl border border-glass-edge bg-glass px-3.5 py-2.5 text-sm backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
        >
          <span className={cn(!selectedLabel && 'text-faint')}>{selectedLabel ?? placeholder}</span>
          <ChevronsUpDown className="size-4 shrink-0 text-faint" />
        </button>
      </GlassPopoverTrigger>
      <GlassPopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <GlassCommand>
          <GlassCommandInput placeholder={placeholder} />
          <GlassCommandList>
            <GlassCommandEmpty>{emptyText}</GlassCommandEmpty>
            <GlassCommandGroup>
              {options.map((option) => (
                <GlassCommandItem key={option.value} value={option.value} onSelect={handleSelect}>
                  <Check className={cn('size-4 shrink-0', value === option.value ? 'opacity-100' : 'opacity-0')} />
                  {option.label}
                </GlassCommandItem>
              ))}
            </GlassCommandGroup>
          </GlassCommandList>
        </GlassCommand>
      </GlassPopoverContent>
    </GlassPopover>
  )
}

export { GlassCombobox }
