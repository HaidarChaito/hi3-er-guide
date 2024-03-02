'use client';
import { recValks } from '@/data/recommendedValks';
import { valks } from '@/data/visibleValks';
import { brokeValks } from '@/data/brokeModeValks';
import { useState } from 'react';
import { valkeryType } from '@/types/Valkery';
import useGlobalStore from '@/store/mode';
import { compareValkeriesTier, useStore } from '@/helpers/functions';
import useNonPersistentStore from '@/store/valk';
import ValkModal from './ValkModal';
import CardList from './CardList';
import { buildType } from '@/types/Build';

export default function ValkHandler() {
  const store = useStore(useGlobalStore, (state) => state);
  const nonPersistentStore = useStore(useNonPersistentStore, (state) => state);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<valkeryType[]>(valks);
  const [recResults, setRecResults] = useState<valkeryType[]>(recValks);
  const [brokeResults, setBrokeResults] = useState<valkeryType[]>(brokeValks);
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
    <div
      className={`mt-2 flex flex-row flex-wrap ${
        nonPersistentStore?.selectedValk != undefined ? ' overscroll-contain	' : ''
      }`}
    >
      <div className=' mb-1 w-full flex-row  justify-center align-middle sm:flex'>
        <div className='form-control my-2 block text-center sm:mx-2 sm:my-0'>
          <input
            value={query}
            onChange={handleSearch}
            type='text'
            placeholder='Search'
            className='input input-bordered w-auto'
          />
        </div>
        <label className='tabs-boxed tabs mx-auto w-52 bg-neutral sm:mx-0 sm:w-auto '>
          <div
            className={`tab my-auto w-full sm:w-auto ${
              store?.gamerMode ? ' text-gray-400' : 'tab-active '
            }`}
          >
            Budget mode
          </div>
          <div
            className={`tab my-auto w-full sm:w-auto ${
              store?.gamerMode ? 'tab-active ' : 'text-gray-400'
            }`}
          >
            Full gear mode
          </div>
          <input
            checked={store?.gamerMode}
            type='checkbox'
            className='hidden'
            onChange={store?.toggleMode}
          />
        </label>
      </div>
      <div className='my-1 w-full text-center'>
        <span className='text-primary'>Site is now out of support, Last update 7.2</span>
      </div>
      <div className='my-1 w-full text-center'>
        <span className='text-primary'>Thank you for your support Captains</span>
      </div>
      <CardList
        brokeValks={brokeResults}
        recValks={recResults}
        valkeries={results}
        setSelected={(valk: valkeryType | undefined) => nonPersistentStore?.setSelectedValk(valk)}
        setSelectedBuild={(build: buildType | undefined) =>
          nonPersistentStore?.setSelectedBuild(build)
        }
      />
      <ValkModal
        isBudgetMode={!store?.gamerMode}
        selectedValk={nonPersistentStore?.selectedValk}
        selectedBuild={nonPersistentStore?.selectedBuild}
        setSelected={(valk: valkeryType | undefined) => nonPersistentStore?.setSelectedValk(valk)}
      />
    </div>
  );
}
