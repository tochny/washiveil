'use client'

import * as React from 'react'
import { Toaster as Sonner, toast } from 'sonner'

type GlassToasterProps = React.ComponentProps<typeof Sonner>

function GlassToaster({ ...props }: GlassToasterProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    const root = document.documentElement
    const update = () => {
      setTheme(root.classList.contains('dark') ? 'dark' : 'light')
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:rounded-2xl group-[.toaster]:border-glass-edge group-[.toaster]:bg-glass-stronger group-[.toaster]:backdrop-blur-2xl group-[.toaster]:backdrop-saturate-150 group-[.toaster]:text-foreground group-[.toaster]:shadow-[0_16px_48px_rgba(28,25,20,0.12)]',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-ruri group-[.toast]:text-white dark:group-[.toast]:bg-ruri-soft dark:group-[.toast]:text-deep',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { GlassToaster, toast }
