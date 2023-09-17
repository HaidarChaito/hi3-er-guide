import { bottomNotes } from './BottomNotes';
import { Signet } from './Signet';

export type Build = {
  label: string;
  tier?: number;
  isNew: boolean;
  signets: Signet[][];
  supports?: string[][];
  emblems?: string[][];
  notes?: string;
  bottomNotes?: bottomNotes[];
};
