import { Valkery } from '@/types/Valkery';
import { create } from 'zustand';

type store = {
  selectedValk?: Valkery;
};
type actions = {
  setSelectedValk: (valk: Valkery | undefined) => void;
};
const useNonPersistentStore = create<store & actions>((set) => ({
  selectedValk: undefined,
  setSelectedValk: (valk: Valkery | undefined) => set({ selectedValk: valk }),
}));
export default useNonPersistentStore;
