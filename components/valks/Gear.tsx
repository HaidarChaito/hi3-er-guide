'use client';
import useGlobalStore from '@/store/mode';
import { useStore } from '@/helpers/functions';
import { gearType } from '@/types/Gear';
type props = {
  gear: gearType;
};

export default function Gear({ gear }: props) {
  const store = useStore(useGlobalStore, (state) => state);

  if (store?.gamerMode === false && gear.is_budget_visible) {
    return <div className='w-full'>{gear.gearInfo}</div>;
  }
  if (store?.gamerMode === true) return <div className='w-full'>{gear.gearInfo}</div>;
  return <></>;
}
