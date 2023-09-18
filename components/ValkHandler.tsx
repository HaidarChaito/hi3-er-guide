'use client';
import CardList from '@/components/CardList';
import ValkModal from '@/components/ValkModal';
import { recValks } from '@/data/recommendedValks';
import { valks } from '@/data/visibleValks';
import { brokeValks } from '@/data/brokeModeValks';
import { useState } from 'react';
import { Valkery } from '@/types/Valkery';
import useGlobalStore, { useStore } from '@/store/mode';
import { compareValkeriesTier } from '@/helpers/functions';

export default function ValkHandler() {
  const [isSelectedValk, setSelectedValk] = useState<undefined | Valkery>(undefined);
  const store = useStore(useGlobalStore, (state) => state);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<Valkery[]>(valks);
  const [recResults, setRecResults] = useState<Valkery[]>(recValks);
  const [brokeResults, setBrokeResults] = useState<Valkery[]>(brokeValks);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event?.target?.value?.toLowerCase();
    if (inputValue != undefined) {
      setQuery(inputValue);

      const filteredResults = valks.filter((valk) => valk.label.toLowerCase().includes(inputValue));
      filteredResults.sort(compareValkeriesTier);
      setResults(filteredResults);

      const filteredRecResults = recValks.filter((valk) =>
        valk.label.toLowerCase().includes(inputValue)
      );
      filteredRecResults.sort(compareValkeriesTier);
      setRecResults(filteredRecResults);

      const filteredBrokeResults = brokeValks.filter((valk) =>
        valk.label.toLowerCase().includes(inputValue)
      );
      filteredBrokeResults.sort(compareValkeriesTier);
      setBrokeResults(filteredBrokeResults);
    } else {
      setRecResults(recValks);
      setResults(valks);
      setBrokeResults(brokeValks);
    }
  };

  return (
    <div className='mt-2 flex flex-row flex-wrap '>
      <div className='w-/ mb-4 flex w-full justify-center align-middle'>
        <div className='form-control mx-2'>
          <input
            value={query}
            onChange={handleSearch}
            type='text'
            placeholder='Search'
            className='input input-bordered w-24 md:w-auto'
          />
        </div>
        <label className='tabs-boxed tabs h-full bg-neutral'>
          <div className={`tab h-full ${store?.gamerMode ? 'text-gray-400' : 'tab-active'}`}>
            Budget mode
          </div>
          <div className={`tab h-full ${store?.gamerMode ? 'tab-active' : 'text-gray-400'}`}>
            full gear mode
          </div>
          <input
            checked={store?.gamerMode}
            type='checkbox'
            className='hidden'
            onChange={store?.toggleMode}
          />
        </label>
      </div>
      <CardList
        brokeValks={brokeResults}
        recValks={recResults}
        valkeries={results}
        setSelected={setSelectedValk}
      />
      <ValkModal selectedValk={isSelectedValk} setSelected={setSelectedValk} />
    </div>
  );
}
