import { Signet } from '@/types/Signet';

interface TwilightPaladin_Interface {
  Blessing_of_Tailor: Signet;
  Blessing_of_Dreamstitch: Signet;
  Blessing_of_Stellar_Breach: Signet;
  Blessing_of_Resplendence: Signet;
  Blessing_of_Inner_Blaze: Signet;
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
  Blessing_of_Tailor: Signet;
  Blessing_of_Dreamstitch: Signet;
  Blessing_of_Stellar_Breach: Signet;
  Blessing_of_Resplendence: Signet;
  Blessing_of_Inner_Blaze: Signet;
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
