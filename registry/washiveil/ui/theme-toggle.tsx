'use client';

import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => {
        const isDark = document.documentElement.classList.toggle('dark');
        try {
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch {
          /* non-persistent */
        }
      }}
      className={cn(
        'grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground',
        className,
      )}
    >
      <Sun className="hidden size-[1.125rem] dark:block" />
      <Moon className="size-[1.125rem] dark:hidden" />
    </button>
  );
}

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `try{var t=localStorage.getItem("theme"),d=t==="dark"||t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}`,
      }}
    />
  );
}
