import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type store = {
  gamerMode?: boolean;
  isFaqOpen: boolean;
  theme: string;
};
type actions = {
  toggleMode: () => void;
  toggleFaq: () => void;
  toggleTheme: () => void;
};
const useGlobalStore = create<store & actions>()(
  persist(
    (set) => ({
      gamerMode: undefined,
      isFaqOpen: false,
      theme: 'night',
      toggleTheme: () => set((state) => ({ theme: swapThemes(state.theme) })),
      toggleFaq: () => set((state) => ({ isFaqOpen: !state.isFaqOpen })),
      toggleMode: () => set((state) => ({ gamerMode: !state.gamerMode })),
    }),
    {
      name: 'globals',
    }
  )
);
function swapThemes(theme?: string) {
  if (theme === undefined) return 'night';
  else if (theme === 'night') return 'winter';
  else if (theme === 'winter') return 'dracula';
  else if (theme === 'dracula') return 'night';
}

export default useGlobalStore;

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
export const useTheme = () => useGlobalStore((state) => state.theme);
