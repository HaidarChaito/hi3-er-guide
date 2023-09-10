'use client';
import CardList from '@/components/CardList';
import ValkModal from '@/components/ValkModal';
import { valks } from '@/data/visibleValks';
import { useState } from 'react';

export default function Home() {
  const [isSelectedValk, setSelectedValk] = useState(undefined);
  return (
    <div className='flex flex-row flex-wrap'>
      <CardList valkeries={valks} setSelected={setSelectedValk} />
      <ValkModal selectedValk={isSelectedValk} setSelected={setSelectedValk} />
    </div>
  );
}
