'use client'

import * as React from 'react'
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'
import { GlassLabel } from './glass-label'

const GlassForm = FormProvider

type GlassFormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const GlassFormFieldContext = React.createContext<GlassFormFieldContextValue>({} as GlassFormFieldContextValue)

function GlassFormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return (
    <GlassFormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </GlassFormFieldContext.Provider>
  )
}

function useGlassFormField() {
  const fieldContext = React.useContext(GlassFormFieldContext)
  const itemContext = React.useContext(GlassFormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext.name) {
    throw new Error('useGlassFormField should be used within <GlassFormField>')
  }

  const fieldState = getFieldState(fieldContext.name, formState)

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type GlassFormItemContextValue = {
  id: string
}

const GlassFormItemContext = React.createContext<GlassFormItemContextValue>({} as GlassFormItemContextValue)

const GlassFormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId()

    return (
      <GlassFormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('grid gap-1.5', className)} {...props} />
      </GlassFormItemContext.Provider>
    )
  },
)
GlassFormItem.displayName = 'GlassFormItem'

const GlassFormLabel = React.forwardRef<
  React.ComponentRef<typeof GlassLabel>,
  React.ComponentPropsWithoutRef<typeof GlassLabel>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useGlassFormField()

  return <GlassLabel ref={ref} className={cn(error && 'text-destructive', className)} htmlFor={formItemId} {...props} />
})
GlassFormLabel.displayName = 'GlassFormLabel'

const GlassFormControl = React.forwardRef<
  React.ComponentRef<typeof Slot.Root>,
  React.ComponentPropsWithoutRef<typeof Slot.Root>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useGlassFormField()

  return (
    <Slot.Root
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
})
GlassFormControl.displayName = 'GlassFormControl'

const GlassFormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useGlassFormField()

    return <p ref={ref} id={formDescriptionId} className={cn('text-xs text-muted-foreground', className)} {...props} />
  },
)
GlassFormDescription.displayName = 'GlassFormDescription'

const GlassFormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useGlassFormField()
    const body = error ? String(error.message) : children

    if (!body) {
      return null
    }

    return (
      <p ref={ref} id={formMessageId} className={cn('text-xs text-destructive', className)} {...props}>
        {body}
      </p>
    )
  },
)
GlassFormMessage.displayName = 'GlassFormMessage'

export {
  useGlassFormField,
  GlassForm,
  GlassFormItem,
  GlassFormLabel,
  GlassFormControl,
  GlassFormDescription,
  GlassFormMessage,
  GlassFormField,
}
