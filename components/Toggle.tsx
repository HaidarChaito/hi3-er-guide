'use client';

import useModeStore, { useStore } from '@/store/mode';

export default function Toggle() {
  const store = useStore(useModeStore, (state) => state);

  return (
    <label className='swap swap-flip h-full'>
      <input onChange={store?.toggleMode} checked={store?.gamerMode} type='checkbox' />
      <div className='swap-on '>😈Gamer mode</div>
      <div className='swap-off'>😇 Casual mode</div>
    </label>
  );
}
