'use client'

import * as React from 'react'
import { Link, Share2 } from 'lucide-react'

import { cn } from '@/lib/utils'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  )
}

const btn =
  'grid size-9 place-items-center rounded-full border transition-colors border-foreground/10 text-muted-foreground hover:border-ruri hover:text-ruri dark:border-white/10 dark:hover:border-ruri-soft dark:hover:text-ruri-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

interface ShareRowProps {
  url: string
  title: string
  label?: string
  copiedLabel?: string
  className?: string
}

function ShareRow({ url, title, label = 'Share', copiedLabel = 'Link copied', className }: ShareRowProps) {
  const [copied, setCopied] = React.useState(false)
  const [supportsShare, setSupportsShare] = React.useState(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      setSupportsShare(true)
    }
  }, [])

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const enc = encodeURIComponent

  const nets = [
    {
      label: 'X',
      icon: XIcon,
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
    },
    {
      label: 'LinkedIn',
      icon: LinkedInIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    },
  ]

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked */
    }
  }

  async function handleNativeShare() {
    try {
      await navigator.share({ title, url })
    } catch {
      /* user dismissed the sheet */
    }
  }

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <span className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">{label}</span>
      <div className="flex items-center gap-2">
        {nets.map((n) => (
          <a key={n.label} href={n.href} target="_blank" rel="noopener noreferrer" aria-label={n.label} className={btn}>
            <n.icon className="size-4.5" />
          </a>
        ))}
        <button type="button" onClick={handleCopy} aria-label="Copy link" className={btn}>
          <Link className="size-4.5" />
        </button>
        {supportsShare && (
          <button type="button" onClick={handleNativeShare} aria-label={label} className={btn}>
            <Share2 className="size-4.5" />
          </button>
        )}
      </div>
      {copied && <span className="text-xs text-ruri dark:text-ruri-soft">{copiedLabel}</span>}
    </div>
  )
}

export { ShareRow }
export type { ShareRowProps }
