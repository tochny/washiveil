'use client';

// A stored "theme" is an explicit pin; its absence means follow the system.

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
          // Back in step with the system — drop the pin instead of storing a
          // value that only agrees today.
          if (isDark === matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.removeItem('theme');
          } else {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
          }
        } catch {
          /* non-persistent */
        }
      }}
      className={cn(
        'grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
    >
      <Sun className="hidden size-[1.125rem] dark:block" />
      <Moon className="size-[1.125rem] dark:hidden" />
    </button>
  );
}

// Inline so it resolves before first paint, ahead of any bundle.
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `try{var m=matchMedia("(prefers-color-scheme:dark)"),s=function(){try{return localStorage.getItem("theme")}catch(e){return null}},t=s();if(t==="dark"||t!=="light"&&m.matches)document.documentElement.classList.add("dark");m.addEventListener("change",function(e){if(!s())document.documentElement.classList.toggle("dark",e.matches)})}catch(e){}`,
      }}
    />
  );
}
