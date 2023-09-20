import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Reason_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'SoE:W Build',
  tier: 4,

  isNew: true,
  notes: 'Swap LE for BR by F6 Shop. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  bottomNotes: [
    {
      text: 'SEQUENCE: SoE Active > Basics & Charged Farm till Ult > Quick Tap Active (Applies Red Paint & V-V Buffs) > Bike Slam > Evade (Truth + Sakura) > Bike Slam > Evade (Truth w/ 2 UE Charges from Sakuras Fuji) > Bike Slam > Active > Bike Slam > Ult ends > Repeat',
    },
  ],
  signets: [
    [
      withPriority(Herrscher_of_Reason_Ego.Blessing_of_Wisdom, 'Start'),
      withPriority(Herrscher_of_Reason_Ego.Blessing_of_Truth, 'Start'),
      withPriority(Herrscher_of_Reason_Ego.Blessing_of_Inspiration, 'F2 Ego'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
      withPriority(Signets_of_Deliverance_Kevin.Shadow_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Dream_of_the_Deliverer,
      Signets_of_Deliverance_Kevin.Resolve_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Triumph_of_the_Deliverer, 'Optional'),
    ],

    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Fuji,
      withPriority(Signets_of_Setsuna_Sakura.Setsuna_Blade_Sakura_ni_Maku, 'CORE'),
      withPriority(Signets_of_Setsuna_Sakura.Setsuna_Blade_AmeShiko, 'Can try to get'),
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Echo_of_Gold, 'CORE'),
      withPriority(Signets_of_Gold_Eden.Echo_of_Withered_Soil, 'Optional'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      withPriority(Signets_of_Stars_Griseo.Yellow__Warm, 'Optional'),
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
    ],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Burden, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Forget_Me_Not, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Tin_Flask, EmblemsImages.Tsukimi_Himiko],
  ],
};

export default build1;
