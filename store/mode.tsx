import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type store = {
  gamerMode: boolean;
};
type actions = {
  toggleMode: () => void;
};
const useModeStore = create<store & actions>()(
  persist(
    (set) => ({
      gamerMode: false,
      toggleMode: () => set((state) => ({ gamerMode: !state.gamerMode })),
    }),
    {
      name: 'mode',
    }
  )
);

export default useModeStore;

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
