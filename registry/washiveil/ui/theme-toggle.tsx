'use client';

// Three states, two controls: a stored "theme" key is an explicit pin, and its
// ABSENCE means "follow the system". That absence is what makes the OS switch
// live — see ThemeScript below.

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
          // Landing back on what the system already says means the user is
          // following it again, so drop the pin rather than storing a value
          // that happens to agree today. Writing it unconditionally is what
          // made the first toggle a one-way door out of system-follow.
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

/**
 * Pre-paint theme resolution, plus a live subscription to the OS setting.
 *
 * Reading `matches` once at boot is what strands the page: flip the OS to dark
 * with the tab open and nothing happens until a reload. The `change` listener
 * fixes that, and it defers to a stored pin so an explicit choice still wins.
 *
 * Stays inline and un-minified-by-hand because it must run before first paint,
 * ahead of any bundle. `prefers-contrast` needs no equivalent — it is pure CSS
 * and the browser re-evaluates it on its own.
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `try{var m=matchMedia("(prefers-color-scheme:dark)"),s=function(){try{return localStorage.getItem("theme")}catch(e){return null}},t=s();if(t==="dark"||t!=="light"&&m.matches)document.documentElement.classList.add("dark");m.addEventListener("change",function(e){if(!s())document.documentElement.classList.toggle("dark",e.matches)})}catch(e){}`,
      }}
    />
  );
}
