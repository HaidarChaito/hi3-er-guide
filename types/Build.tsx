import { notesType } from './Notes';
import { gearType } from './Gear';
import { signetType } from './Signet';

export type buildType = {
  label: string;
  tier?: number;
  signets: signetType[][];
  supports?: string[][];
  emblems?: string[][];
  not_budget?: boolean;
  notes?: string;
  extra_notes?: notesType[];
  gear?: gearType[];
};
