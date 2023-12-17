import { buildType } from '@/types/Build';
import { valkeryType } from '@/types/Valkery';
import { create } from 'zustand';

type store = {
  selectedValk?: valkeryType;
  selectedBuild?: buildType;
};
type actions = {
  setSelectedValk: (valk: valkeryType | undefined) => void;
  setSelectedBuild: (valk: buildType | undefined) => void;
};
const useNonPersistentStore = create<store & actions>((set) => ({
  selectedValk: undefined,
  selectedBuild: undefined,
  setSelectedValk: (valk: valkeryType | undefined) => set({ selectedValk: valk }),
  setSelectedBuild: (build: buildType | undefined) => set({ selectedBuild: build }),
}));
export default useNonPersistentStore;
