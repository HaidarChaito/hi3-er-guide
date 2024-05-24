import { signetType } from '@/types/Signet';

interface Lantern_Interface {
  Blessing_of_illuminated_night: signetType;
  Blessing_of_scorching_flames: signetType;
  Blessing_of_raging_fire: signetType;
  Blessing_of_luminance: signetType;
  Blessing_of_lazing_torch: signetType;
}
export const Lantern_Ego: Lantern_Interface = {
  Blessing_of_illuminated_night: {
    label: 'Blessing of Illuminated Night',
  },
  Blessing_of_scorching_flames: {
    label: 'Blessing of Scorching Flames',
  },
  Blessing_of_raging_fire: {
    label: 'Blessing of Raging Fire',
  },
  Blessing_of_luminance: {
    label: 'Blessing of Luminance',
  },
  Blessing_of_lazing_torch: {
    label: 'Blessing of Blazing Torch',
  },
};

interface FenghuangofVicissitude_Interface {
  Blessing_of_Attainment: signetType;
  Blessing_of_Vermillion_Fire: signetType;
  Blessing_of_Arcane_Traces: signetType;
  Blessing_of_Observation: signetType;
  Blessing_of_Unbroken_Rampart: signetType;
}
export const FenghuangofVicissitude_Ego: FenghuangofVicissitude_Interface = {
  Blessing_of_Attainment: {
    label: 'Blessing of Attainment',
    description:
      'Basic ATK, Fiery Cloud Impact, and Rampant Blades in two Stances are integrated into a single move set of Basic ATK. Their DMG multipliers stay the same and their DMG source is Basic ATK. Basic ATK deals 50% bonus Total DMG, during which the Valkyrie has improved Ignore Interrupt and takes 60% less Total DMG.',
  },
  Blessing_of_Arcane_Traces: {
    label: 'Blessing of Arcane Traces',
    description:
      'Basic ATK comes with a shadow which moves much faster and deals 85% x 2 ATK of bonus Fire DMG on hit (DMG source: Basic ATK).',
  },
  Blessing_of_Vermillion_Fire: {
    label: 'Blessing of Vermillion Fire',
    description:
      "Casting skills doesn't restore Heart Flame anymore. When HP is at 16% or above, Heart Flame will be fully stacked. Casting enhanced Joint ATK drops HP to 5%. After casting Joint ATK and when the character is flashing, tap [ATK] to trigger either Fiery Cloud Impact or Rampant Blades based on current Stance and boost the character's Fire DMG by 40% for 10s. Retriggering refreshes duration. The character's HP is restored to 18% if below. This effect can be triggered once per 0.5s in 2s.",
  },
  Blessing_of_Observation: {
    label: 'Blessing of Observation',
    description:
      "After casting Ultimate, Basic and Combo ATKs deal 20% bonus DMG (in the form of HP loss) for 17s. Retriggering refreshes duration. On each floor, the first Ultimate cast deals bonus DMG equal to 10% of the target's max HP (in the form of HP loss).",
  },
  Blessing_of_Unbroken_Rampart: {
    label: 'Blessing of Unbroken Rampart',
    description:
      'Switching Stance fully restores both Qi. After casting enhanced Joint ATK and when the character is flashing, tap [ATK] to trigger either Fiery Cloud Impact or Rampant Blades based on current Stance, fully restore Qi, and make the next two Joint ATKs and enhanced Joint ATKs deal 120% bonus Total DMG.',
  },
};

interface CosmicEmpression_Interface {
  Blessing_of_Starlight: signetType;
  Blessing_of_Dazzle: signetType;
  Blessing_of_Anchor: signetType;
  Blessing_of_Shining_Blade: signetType;
  Blessing_of_Meteorite: signetType;
}
export const CosmicEmpression_Ego: CosmicEmpression_Interface = {
  Blessing_of_Starlight: {
    label: 'Blessing of Starlight',
    description:
      'In Parry stance, if in the AoE of the meteor released by Traveler looking into the distance of the mteor shower released by Blessing of meteorite, deflect meteor shards. Deflecting the meteor shower deals 30% ATK of Physical DMG per hit and reduces Ultimate CD by 0.6; Deflecting the meteor deals 150% ATK of physical DMG and reduces ultimate CD by 7s. They both count as weapon active and Bleed DMG. Deflecting a meteor shard restores 4 SP.',
  },
  Blessing_of_Dazzle: {
    label: 'Blessing of Dazzle',
    description:
      'Basic ATK and Combo ATK deal 25% more Total DMG. Combo ATK has a greater radius, deals an additional 500% + 500% ATK of Physical DMG, and reduces Ultimate CD by 2s on use. Non-Ultimate Evasion can also trigger Ultimate Evasion Skill.',
  },
  Blessing_of_Anchor: {
    label: 'Blessing of Anchor',
    description:
      'When using Combo ATK, if a beacon is present and her Internal Energy is full, consumes all Internal Energy to release 3 meteors and deploy the cross (disregards cross CD and does not consume SP) simultaneously. Each meteor deals 380% ATK of Physical DMG, which counts as Combo ATK, weapon active, and Bleed DMG. Releasing meteors counts as using weapon active. Can use Ultimate during meteor fall.',
  },
  Blessing_of_Shining_Blade: {
    label: 'Blessing of Shining Blade',
    description:
      'After unleashing Ultimate, all laser sabers deal 15% more Physical DMG for 20s; retriggering refreshes duration. All enemies take 20% more Total DMG from the meteor (independent).',
  },
  Blessing_of_Meteorite: {
    label: 'Blessing of Meteorite',
    description:
      'When using special weapon skill Traveler Looking into the Distance, the meteor is preceded by a meteor shower. During this, continue losing Internal Energy to deal 21 x 40% ATK of Physical DMG (counts as weapon active and Bleed DMG) and deploy the cross (disregards cross CD and does not consume SP). Cannot gain Internal Energy during the special weapon skill. The use of special weapon skill triggers Ultimate-related effects and the crash of meteorite triggers Ultimate evasion skill. Using Combo ATK restores an additional 300 Internal Energy. Bleeding inflicted by the host deals 50% more Total DMG',
  },
};

interface TwilightPaladin_Interface {
  Blessing_of_Tailor: signetType;
  Blessing_of_Dreamstitch: signetType;
  Blessing_of_Stellar_Breach: signetType;
  Blessing_of_Resplendence: signetType;
  Blessing_of_Inner_Blaze: signetType;
}
export const Twilight_Paladin_Ego: TwilightPaladin_Interface = {
  Blessing_of_Tailor: {
    label: 'Blessing of Divine Penalty',
    description:
      'In burst mode, Bombard costs 200% Herrscher Charge and every hit deals 400% ATK of bonus Lightning DMG.Blessing of Divine Penalty +:In burst mode, Bombard costs 300% Herrscher Charge and every hit deals 800% ATK of bonus Lightning DMG.',
  },
  Blessing_of_Dreamstitch: {
    label: 'Blessing of Tsukuyomi',
    description:
      'Tap [ATK] after evasion to connect into Basic ATK Sequence 4. Basic ATK Sequence 4 boosts Total DMG by 40% for 5s.Blessing of Tsukuyomi +:Tap [ATK] after evasion to connect into Basic ATK Sequence 4. Basic ATK Sequence 4 boosts Total DMG by 40% for 5s. Basic ATK Sequence 5 restores 10 bonus SP.',
  },
  Blessing_of_Stellar_Breach: {
    label: 'Blessing of Hazy Moon',
    description:
      'Basic ATK Sequence 5 unleashes 3 bolts of thundering sanction each dealing 900% ATK of Lightning DMG on hit.Blessing of Hazy Moon +:Basic ATK Sequence 5 unleashes 3 bolts of thundering sanction each dealing 1200% ATK of Lightning DMG on hit.',
  },
  Blessing_of_Resplendence: {
    label: 'Blessing of Mitama',
    description:
      'Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK Sequence 5 restores 100 bonus Herrscher Charge.Blessing of Mitama +:Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK Sequence 5 restores 300 bonus Herrscher Charge.',
  },
  Blessing_of_Inner_Blaze: {
    label: 'Blessing of Narukami',
    description:
      'Finisher unleashes 8 bolts of thundering sanction each dealing 900% ATK of Lightning DMG on hit.Blessing of Narukami +:Finisher unleashes 8 bolts of thundering sanction each dealing 900% ATK of Lightning DMG on hit. Every 20 combo hits grant an additional bolt. 12 bolts max.',
  },
};

interface MiracleMagicGirl_Interface {
  Blessing_of_Tailor: signetType;
  Blessing_of_Dreamstitch: signetType;
  Blessing_of_Stellar_Breach: signetType;
  Blessing_of_Resplendence: signetType;
  Blessing_of_Inner_Blaze: signetType;
}
export const MiracleMagicGirl: MiracleMagicGirl_Interface = {
  Blessing_of_Tailor: {
    label: 'Blessing of Tailor',
    description:
      'Basic ATK SEQ 5 can also inflict Magic Sigil and trigger Cut. After performing Cut, tap [ATK] to consume 300 Starry Faith and directly perform Basic ATK SEQ 5. Basic ATK SEQ 5 and Cut deal 100% more Fire DMG.',
  },

  Blessing_of_Dreamstitch: {
    label: 'Blessing of Dreamstitch',
    description:
      'Basic ATK SEQ 5s each hit deals an additional 100% ATK of Fire DMG as Ignite DMG. When Basic ATK SEQ 1 to 4 hits, reduces Ultimate Evasion Skill CD by 1s (CD: 0.5s). After triggering Ultimate Evasion Skill, Total DMG increases by 20% for 8s (retriggering refreshes duration). ',
  },

  Blessing_of_Stellar_Breach: {
    label: 'Blessing of Stellar Breach',
    description:
      'Increases Total DMG by 20%. Releasing Ultimate resets weapon active CD, restores 2 Ultimate Evasion Skill charges and 600 Starry Faith, and gives 3 stacks of Glitter.',
  },

  Blessing_of_Resplendence: {
    label: 'Blessing of Resplendence',
    description:
      ' Each stack of Glitter increases the characters max Ignite stacks and max HP by 1 and 30 respectively. When her HP is under 30%, her HP recovery  increases by 75%; otherwise, it decreases by 75% and she loses 300 HP per second. While charging, the Ignite stacks on enemies continue increasing until hitting the cap. Join deals an additional Ignite stack count x 100% ATK of Fire DMG as Ignite DMG. ',
  },

  Blessing_of_Inner_Blaze: {
    label: 'Blessing of Inner Blaze',
    description:
      ' Performing Join instantly triggers Ultimate Evasion Skill to restore 600 Starry Faith. On hit, Charged ATK deals an additional 70% ATK of Fire DMG as Ignite DMG, and the enemies will take 10% more Total DMG for 8s (retriggering refreshes duration). When Join hits, it reduces Ultimate CD by 0.4s and restores 1 SP for each stack of Glitter on the character.',
  },
};
