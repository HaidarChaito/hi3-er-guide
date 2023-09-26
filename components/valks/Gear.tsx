'use client';
import useGlobalStore from '@/store/mode';
import { useStore } from '@/helpers/functions';
import { Gear } from '@/types/Gear';
type props = {
  gear: Gear;
};

export default function Gear({ gear }: props) {
  const store = useStore(useGlobalStore, (state) => state);

  if (store?.gamerMode === false && gear.isBudgetVisible) {
    return <div className='w-full'>{gear.gearInfo}</div>;
  }
  if (store?.gamerMode === true) return <div className='w-full'>{gear.gearInfo}</div>;
  return <></>;
}
