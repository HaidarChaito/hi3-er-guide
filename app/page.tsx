'use client';
import CardList from '@/components/CardList';
import ValkModal from '@/components/ValkModal';
import { recValks } from '@/data/recommendedValks';
import { valks } from '@/data/visibleValks';
import { useState } from 'react';

export default function Home() {
  const [isSelectedValk, setSelectedValk] = useState(undefined);
  return (
    <div className='flex flex-row flex-wrap'>
      <CardList recValks={recValks} valkeries={valks} setSelected={setSelectedValk} />
      <ValkModal selectedValk={isSelectedValk} setSelected={setSelectedValk} />
    </div>
  );
}
