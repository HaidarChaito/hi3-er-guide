import { bottomNotesType } from './BottomNotes';
import { gearType } from './Gear';
import { signetType } from './Signet';

export type buildType = {
  label: string;
  tier?: number;
  isNew: boolean;
  signets: signetType[][];
  supports?: string[][];
  emblems?: string[][];
  notBudget?: boolean;
  notes?: string;
  bottomNotes?: bottomNotesType[];
  gear?: gearType[];
};
