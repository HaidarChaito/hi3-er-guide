import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Argent_Knight_Artemis_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Infinity_Mobius } from '@/data/signets/tsx/Signets_of_Infinity_Mobius';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 3,
  isNew: true,
  notes: 'BoY is preferred start, but if you cannot clear F4 Double with it, use Dreamful Gold or Boundless Logos instead and go shop F5 to put BoY and get your 2 Egos by F11. Swap your 2nd support with BK by F9/F10 to deal with Heimdall.',
  signets: [
    [
      withPriority(Argent_Knight_Artemis_Ego.Blessing_of_Frost_Scythe, 'Start'),
      withPriority(Argent_Knight_Artemis_Ego.Blessing_of_Stellar_Trails, 'Start'),
      withPriority(Argent_Knight_Artemis_Ego.Blessing_of_Winter_Harvest, '1st'),
      withPriority(Argent_Knight_Artemis_Ego.Blessing_of_Cold_Moon, '2nd'),
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
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Rodent_V,
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
      Signets_of_Infinity_Mobius.Dead_X,
      withPriority(Signets_of_Infinity_Mobius.Unknown_X, 'Optional'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anatman,
      Signets_of_Bodhi_Su.Maxim_of_Santam,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
    ],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Haxxor_Bunny_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Burden,
      EmblemsImages.Because_of_You,
      EmblemsImages.Boundless_Logos
    ],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build1;
