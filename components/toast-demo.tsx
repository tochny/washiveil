'use client';

import { GlassButton } from '@/registry/washiveil/ui/glass-button';
import { toast } from '@/registry/washiveil/ui/glass-sonner';

export function ToastDemo({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <GlassButton variant="secondary" size="sm" onClick={() => toast(title, { description })}>
      {label}
    </GlassButton>
  );
}
