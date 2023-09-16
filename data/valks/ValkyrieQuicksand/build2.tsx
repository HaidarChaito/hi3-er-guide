import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Valkyrie_Quicksand_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Daybreak_Kosma } from '@/data/signets/tsx/Signets_of_Daybreak_Kosma';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Ultimate Build',
    tier: 4.5,
    isNew: true,
    notes: 'The Starter depends on whether Helix is +2 or not. If yes = start with Vill-V. If no = start with Kosma. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [
        [
            withPriority(Valkyrie_Quicksand_Ego.Blessing_of_Whimsy, 'Start'),
            withPriority(Valkyrie_Quicksand_Ego.Blessing_of_Tambourine, 'F2 Ego'),
            withPriority(Valkyrie_Quicksand_Ego.Blessing_of_Rarities, 'Optional'),
        ],

        [
            Signets_of_Daybreak_Kosma.Wings_that_Mask_the_Sanguine_Moon,
            Signets_of_Daybreak_Kosma.Talons_that_Desecrate_the_Santuary_sic,
            Signets_of_Daybreak_Kosma.Horns_that_Rip_the_Bleak_Sky,
            Signets_of_Daybreak_Kosma.Eyes_that_Overlook_the_Vicious_Abyss,
            withPriority(Signets_of_Daybreak_Kosma.Heart_that_Committed_Seven_Crimes, 'Optional'),
            withPriority(Signets_of_Daybreak_Kosma.Daybreak_an_Undying_LightCore, 'CORE'),
            Signets_of_Daybreak_Kosma.Undetermined_Judgement_sic,
            Signets_of_Daybreak_Kosma.Unwavering_Promise,
        ],

        [
            Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
            Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
            Signets_of_Deliverance_Kevin.Mask_of_the_Predator,
            withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
            Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
            withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
        ],

        [
            Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
            Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
            Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
            Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
            withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
            Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
            Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
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
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
        ],
    ],
    supports: [
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Fragile_Friend, EmblemsImages.Out_of_Reach],
        [EmblemsImages.Burden, EmblemsImages.Out_of_Reach],
        [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
    ]
};

export default build2;