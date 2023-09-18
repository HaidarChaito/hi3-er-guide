import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Luna_Kindred_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Daybreak_Kosma } from '@/data/signets/tsx/Signets_of_Daybreak_Kosma';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 1,
  bottomNotes: [
    {
      text: 'SEQUENCE: Deploy Cross > Spam Charged > Use ult on rare ocassion where you have SP for it > Repeat.',
    },
  ],
  isNew: true,
  signets: [
    [
      withPriority(Luna_Kindred_Ego.Blessing_of_Penumbra, 'Start'),
      withPriority(Luna_Kindred_Ego.Blessing_of_Imprint, 'Start'),
      withPriority(Luna_Kindred_Ego.Blessing_of_Blood_Feast, 'F2 Ego'),
    ],

    [
      Signets_of_Daybreak_Kosma.Talons_that_Desecrate_the_Santuary_sic,
      Signets_of_Daybreak_Kosma.Wings_that_Mask_the_Sanguine_Moon,
      Signets_of_Daybreak_Kosma.Horns_that_Rip_the_Bleak_Sky,
      Signets_of_Daybreak_Kosma.Eyes_that_Overlook_the_Vicious_Abyss,
      withPriority(Signets_of_Daybreak_Kosma.Heart_that_Committed_Seven_Crimes, 'Optional'),
      withPriority(Signets_of_Daybreak_Kosma.Daybreak_an_Undying_Light, 'CORE'),
      Signets_of_Daybreak_Kosma.Unbending_Hero,
      Signets_of_Daybreak_Kosma.Undetermined_Judgement_sic,
      Signets_of_Daybreak_Kosma.Unwavering_Promise,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      withPriority(Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity, 'Optional'),
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
      Signets_of_Stars_Griseo.Grey__Empty,
      Signets_of_Stars_Griseo.Black__Dark,
      withPriority(Signets_of_Stars_Griseo.Blue__Cold, 'Optional'),
      Signets_of_Stars_Griseo.Faded_Stars,
    ],
  ],
  supports: [
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy, EmblemsImages.Out_of_Reach],
    [EmblemsImages.Fragile_Friend, EmblemsImages.Out_of_Reach],
    [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
  ],
};

export default build1;
