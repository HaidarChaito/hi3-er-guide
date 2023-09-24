import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const themes = ['night', 'dimare', 'winter', 'aftereight', 'dracula'];

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
      gamerMode: true,
      isFaqOpen: false,
      theme: themes[0],
      toggleTheme: () => set((state) => ({ theme: swapThemes(state.theme) })),
      toggleFaq: () => set((state) => ({ isFaqOpen: !state.isFaqOpen })),
      toggleMode: () => set((state) => ({ gamerMode: !state.gamerMode })),
    }),
    {
      name: 'globals',
    }
  )
);
function swapThemes(theme: string) {
  const currentIndex = themes.indexOf(theme);
  if (themes.length <= currentIndex + 1) return themes[0];
  return themes[currentIndex + 1];
}

export default useGlobalStore;

export const useTheme = () => useGlobalStore((state) => state.theme);
