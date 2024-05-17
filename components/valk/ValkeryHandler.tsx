'use client';
import { valks } from '@/data/visibleValks';
import { useState } from 'react';
import { valkeryType } from '@/types/Valkery';
import { useStore } from '@/helpers/functions';
import useNonPersistentStore from '@/store/valk';
import ValkeryCard from './ValkeryCard';

export default function ValkeryHandler() {
  const nonPersistentStore = useStore(useNonPersistentStore, (state) => state);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<valkeryType[]>(valks);
  if (nonPersistentStore?.selectedValk != undefined) {
    document.body.classList.add(`overflow-hidden`);
  } else {
    document.body.classList.remove(`overflow-hidden`);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event?.target?.value?.toLowerCase();
    if (inputValue != undefined) {
      setQuery(inputValue);
      const filteredResults = valks.filter((valk) => valk.label.toLowerCase().includes(inputValue));
      setResults(filteredResults);
    } else {
      setResults(valks);
    }
  };

  return (
    <div
      className={`flex  flex-auto flex-row flex-wrap justify-center gap-4 ${
        nonPersistentStore?.selectedValk != undefined ? ' overscroll-contain	' : ''
      }`}
    >
      <div className=' mt-2 w-full flex-row  justify-center align-middle sm:flex'>
        <div className='form-control my-2 block text-center sm:mx-2 sm:my-0'>
          <input
            value={query}
            onChange={handleSearch}
            type='text'
            placeholder='Search'
            className='input input-bordered w-auto'
          />
        </div>
      </div>
      {results != undefined &&
        results.map((valk, index) => <ValkeryCard key={index} valk={valk} />)}
    </div>
  );
}
