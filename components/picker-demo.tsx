'use client';

import * as React from 'react';

import { GlassCombobox } from '@/registry/washiveil/ui/glass-combobox';
import { GlassDatePicker } from '@/registry/washiveil/ui/glass-date-picker';

const OPTIONS = [
  { value: 'washi', label: 'Washi 和紙' },
  { value: 'veil', label: 'Veil 紗' },
  { value: 'ruri', label: 'Ruri 瑠璃' },
  { value: 'korozen', label: 'Korozen 黄櫨染' },
  { value: 'sumire', label: 'Sumire 菫' },
];

export function PickerDemo({
  comboboxPlaceholder,
  comboboxEmpty,
  datePlaceholder,
}: {
  comboboxPlaceholder: string;
  comboboxEmpty: string;
  datePlaceholder: string;
}) {
  const [material, setMaterial] = React.useState<string | undefined>();
  const [date, setDate] = React.useState<Date | undefined>();
  return (
    <div className="grid gap-3">
      <GlassCombobox
        options={OPTIONS}
        value={material}
        onValueChange={setMaterial}
        placeholder={comboboxPlaceholder}
        emptyText={comboboxEmpty}
      />
      <GlassDatePicker value={date} onValueChange={setDate} placeholder={datePlaceholder} />
    </div>
  );
}
