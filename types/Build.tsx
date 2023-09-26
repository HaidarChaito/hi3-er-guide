import { bottomNotes } from './BottomNotes';
import { Gear } from './Gear';
import { Signet } from './Signet';

export type Build = {
  label: string;
  tier?: number;
  isNew: boolean;
  signets: Signet[][];
  supports?: string[][];
  emblems?: string[][];
  notBudget?: boolean;
  notes?: string;
  bottomNotes?: bottomNotes[];
  gear?: Gear[];
};
