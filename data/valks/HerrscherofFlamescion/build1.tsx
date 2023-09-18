import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Flamescion_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 3.2,
  bottomNotes: [
    {
      text: 'SEQUENCE: Tap Ult (Airborne Cleave) > Enter Herrscher Mode > Basics until Heat is gone > Evade into Wep Active (cancel Evade anim) > Blackhole > Spam Basics until Heat is gone again > Blackhole > Basics till Ult right before Herrscher Mode ends. Once Reburn is gotten, you add another Blackhole after the first one and save an UE Charge once you go into Overheat. With Tempered Warrior, 2 Blackholes used; a total of 4 can be done, always saving one UE Charge to clear Overheat and eliminate downtime.',
    },
  ],
  isNew: true,
  signets: [
    [
      withPriority(Herrscher_of_Flamescion_Ego.Blessing_of_Heatflow, 'Start'),
      withPriority(Herrscher_of_Flamescion_Ego.Blessing_of_Starfire, 'F2 Ego'),
      withPriority(Herrscher_of_Flamescion_Ego.Blessing_of_Reburn, '1st'),
      withPriority(Herrscher_of_Flamescion_Ego.Blessing_of_Tempered_Warrior, '2nd'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
      Signets_of_Decimation_Kalpas.Inhuman_Unevil_and_Ungodly,
    ],

    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Fuji,
      withPriority(Signets_of_Setsuna_Sakura.Setsuna_Blade_Sakura_ni_Maku, 'CORE'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Dictum_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Dictum_of_Santam,
      Signets_of_Bodhi_Su.Dictum_of_Anatman,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore, 'CORE'),
    ],

    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Stars_Griseo.Blue__Cold,
      withPriority(Signets_of_Stars_Griseo.Faded_StarsCore, 'CORE'),
    ],
  ],
  notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Mad_Kings_Mask,
      EmblemsImages.Because_of_You,
      EmblemsImages.An_Old_Pals_Legacy
    ],
    [EmblemsImages.Forget_Me_Not, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Tin_Flask, EmblemsImages.Tsukimi_Himiko],
  ],
};

export default build1;
