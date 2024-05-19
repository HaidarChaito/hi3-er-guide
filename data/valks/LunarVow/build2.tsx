import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Lunar_Vow_Crimson_Love_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Daybreak_Kosma } from '@/data/signets/tsx/Signets_of_Daybreak_Kosma';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Infinity_Mobius } from '@/data/signets/tsx/Signets_of_Infinity_Mobius';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { buildType } from '@/types/Build';

const build2: buildType = {
  label: 'Basic ATK Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Bloodied Casket PRI | Sweet Dreams TMB',
      is_budget_visible: false,
    },
    {
      gearInfo:
        'Bloodied Casket PRI or Any High ATK Statstick Cross | Linnaeus TM/Zeno TM Handel/Zhenyi/Aladdin B',
      is_budget_visible: true,
    },
    {
      gearInfo: 'Bloodied Casket PRI or Any High ATK Statstick Cross | Zhenyi TB Linn M ',
      is_budget_visible: true,
    },
  ],

  notes:
    ' This build is slightly ahead in strength and it upholds the advantage of being a 1 Ego Start build that uses Because of You to get 2 more Egos and make it whole. It is strong enough to work with just 1 Ego, but still recommended to go with BoY and turn it into a 3 Ego build regardless. The SEQ for this build is a bit tricky to get around, but easy to understand once you do it. You can swap BR for BK by F9/F10 Shop to deal with Heimdall if you need to.',
  extra_notes: [
    {
      text: 'SEQUENCE: Gather mobs (with AE), tap Flashing Wep Active to enter Frenzy > Hold Wep Active to perform Combo OR save it for a new wave (with Lasting Embrace Ego the Combo actually deals insane amounts of damage, so it becomes your other half of damage)> Spam Evade connect into 4th Basic Hold, do this a 2nd time until Bar is refilled again and repeat whole sequence and weaving Ultimate in-between; once you get Divine Pact Ego signet, Ultimate is used to skip the refilling as it will immediately fill it and can perform the Frenzy into Hold for Combo and repeat.',
    },
  ],
  signets: [
    [
      withPriority(Lunar_Vow_Crimson_Love_Ego.Blessing_of_Vessel, 'Start'),
      withPriority(
        Lunar_Vow_Crimson_Love_Ego.Blessing_of_Lasting_Embrace,
        'Mandatory F2 Ego OR BoY'
      ),
      withPriority(Lunar_Vow_Crimson_Love_Ego.Blessing_of_Divine_Pact, 'Optional'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
      withPriority(Signets_of_Decimation_Kalpas.Inhuman_Unevil_and_Ungodly, 'Filler'),
    ],

    [
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      Signets_of_Infinity_Mobius.Rodent_V,
      withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
      Signets_of_Infinity_Mobius.Dead_X,
      withPriority(Signets_of_Infinity_Mobius.Newborn_X, 'Interchangeable w/ Su Breach)'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anitya,
      Signets_of_Bodhi_Su.Maxim_of_Santam,
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Anatman, 'Optional'),
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
      Signets_of_Daybreak_Kosma.Talons_that_Desecrate_the_Santuary_sic,
      Signets_of_Daybreak_Kosma.Horns_that_Rip_the_Bleak_Sky,
      Signets_of_Daybreak_Kosma.Wings_that_Mask_the_Sanguine_Moon,
      Signets_of_Daybreak_Kosma.Eyes_that_Overlook_the_Vicious_Abyss,
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
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Because_of_You, EmblemsImages.An_Old_Pals_Legacy],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build2;
