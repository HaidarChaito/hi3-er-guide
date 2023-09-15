'use client';
import CardList from '@/components/CardList';
import ValkModal from '@/components/ValkModal';
import { recValks } from '@/data/recommendedValks';
import { valks } from '@/data/visibleValks';
import { useState } from 'react';
import { Valkery } from '@/types/Valkery';

export default function ValkHandler() {
  const [isSelectedValk, setSelectedValk] = useState<undefined | Valkery>(undefined);
  return (
    <div className='mt-2 flex flex-row flex-wrap '>
      <CardList recValks={recValks} valkeries={valks} setSelected={setSelectedValk} />
      <ValkModal selectedValk={isSelectedValk} setSelected={setSelectedValk} />
    </div>
  );
}
