'use client';

import { GlassButton } from '@/registry/washiveil/ui/glass-button';
import { toast } from '@/registry/washiveil/ui/glass-sonner';

export function ToastDemo() {
  return (
    <GlassButton
      variant="secondary"
      size="sm"
      onClick={() => toast('A small veil', { description: 'It fades like paper in the light.' })}
    >
      Show toast
    </GlassButton>
  );
}
