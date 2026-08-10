'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';

import { cn } from '@/lib/utils';

interface InstallCommandProps {
  item: string;
  copyLabel: string;
  copiedLabel: string;
  className?: string;
}

function InstallCommand({ item, copyLabel, copiedLabel, className }: InstallCommandProps) {
  const [copied, setCopied] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const command = `npx shadcn@latest add https://washiveil.alexchih.com/r/${item}.json`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 overflow-x-auto rounded-xl border-glass-edge bg-glass px-3.5 py-2.5 font-mono text-[0.8125rem] backdrop-blur-md',
        className,
      )}
    >
      <code className="whitespace-nowrap">{command}</code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copyLabel}
        title={copied ? copiedLabel : copyLabel}
        className="grid size-8 shrink-0 place-items-center rounded-full border transition-colors border-foreground/10 text-muted-foreground hover:border-ruri hover:text-ruri dark:border-white/10 dark:hover:border-ruri-soft dark:hover:text-ruri-soft"
      >
        {copied ? (
          <Check className="size-4 text-ruri dark:text-ruri-soft" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>
    </div>
  );
}

export { InstallCommand };
export type { InstallCommandProps };
