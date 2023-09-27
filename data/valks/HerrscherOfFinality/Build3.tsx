import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';
import { Herrscher_of_Finality_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { withPriority } from '@/helpers/functions';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';

const build3: Build = {
  label: 'Hybrid Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Domain of Genesis | Kiana TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Domain of Genesis | Little Joys TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Domain of Genesis | Leuweenhoek TB Kiana/Broboli/Thales M',
      isBudgetVisible: true,
    },
  ],
  notes:
    'Less known build for the Herrscherr of Finality, gains massive spikes at higher ranks, combines the strength of the combo build and the explosive power of the ultimate build through lower frames attacks in between combos, the gain doesnt justify the efforts and the general player will not do better with this build compared to the other two, this build is designed for people who enjoy challenges, have some ranks and have mastered HoFi mechanics.',
  isNew: true,
  bottomNotes: [
    {
      text: 'SEQUENCE: ATF > QTE 1 x2 SEQ (SEQ3/4 connect) > QTE 2 x2 (SEQ3/4 connect) > ATF end > SEQ1 > WA > SEQ 1 > Combo > Repeat from SEQ 1 till ATF is back up, ult when 9~12 stacks',
    },
  ],
  signets: [
    [
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Condescension, 'Start'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_High_Flames, 'Start'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Final_Moon, 'F2 Ego'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Rift, '1st'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Clarity, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
    ],

    [
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Sixth_No_Decadence,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      withPriority(
        Signets_of_Discipline_Aponia.You_Shall_Be_Subject_to_Numerous_Disciplines,
        'CORE'
      ),
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Be_Witnessed_by_Thy_Heart, 'Optional'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter, 'CORE'),
    ],
    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
      Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
    ],
  ],

  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Because_of_You],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build3;
