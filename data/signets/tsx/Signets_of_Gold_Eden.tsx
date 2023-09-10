import { Signet } from '@/types/Signet';
interface Signets_of_Gold_Eden_interface {
  Recitatif_of_EdenNormalNormal_Signet_of_Gold: Signet;
  Recitatif_of_CreeksNormalNormal_Signet_of_Gold: Signet;
  Recitatif_of_BirdsNormalNormal_Signet_of_Gold: Signet;
  Recitatif_of_Fruit_TreesNormalNormal_Signet_of_Gold: Signet;
  Recitatif_of_Good_WineNormalNormal_Signet_of_Gold: Signet;
  Recitatif_of_Fine_JadeNormalNormal_Signet_of_Gold: Signet;
  Aria_of_GoldCoreNexus_Signet_of_Gold: Signet;
  Aria_of_SoilEnhancedNormal_Signet_of_Gold: Signet;
  Aria_of_LifeEnhancedNormal_Signet_of_Gold: Signet;
  Aria_of_DawnEnhancedNormal_Signet_of_Gold: Signet;
  Echo_of_GoldCoreNexus_Signet_of_Gold: Signet;
  Echo_of_Withered_SoilEnhancedNormal_Signet_of_Gold: Signet;
  Echo_of_Shrill_WindEnhancedNormal_Signet_of_Gold: Signet;
  Echo_of_Silent_NightEnhancedNormal_Signet_of_Gold: Signet;
}
export const Signets_of_Gold_Eden: Signets_of_Gold_Eden_interface = {
  Recitatif_of_EdenNormalNormal_Signet_of_Gold: {
    label: 'Recitatif of EdenNormalNormal Signet of Gold',
    description:
      'The higher your SP, the higher the Total DMG you will deal. Every 10 remaining SP increases Total DMG by 3.0% (max: 150%).',
  },
  Recitatif_of_CreeksNormalNormal_Signet_of_Gold: {
    label: 'Recitatif of CreeksNormalNormal Signet of Gold',
    description:
      'The higher your SP, the higher the Physical and Elemental DMG you will deal. Every 10 remaining SP increases Physical & Elemental DMG by 2.5% (max: 125%).',
  },
  Recitatif_of_BirdsNormalNormal_Signet_of_Gold: {
    label: 'Recitatif of BirdsNormalNormal Signet of Gold',
    description: 'Every 10 SP left reduces Total DMG taken by 2.5% (max: 80%).',
  },
  Recitatif_of_Fruit_TreesNormalNormal_Signet_of_Gold: {
    label: 'Recitatif of Fruit TreesNormalNormal Signet of Gold',
    description:
      'The lower the SP, the more SP can be restored from attack (SP regen boost maxed at 100%).',
  },
  Recitatif_of_Good_WineNormalNormal_Signet_of_Gold: {
    label: 'Recitatif of Good WineNormalNormal Signet of Gold',
    description: 'Restore 2 SP per second.',
  },
  Recitatif_of_Fine_JadeNormalNormal_Signet_of_Gold: {
    label: 'Recitatif of Fine JadeNormalNormal Signet of Gold',
    description: 'Initial SP and max SP increase by 50.',
  },
  Aria_of_GoldCoreNexus_Signet_of_Gold: {
    label: 'Aria of GoldCoreNexus Signet of Gold',
    description:
      'For every 100 SP restored, cast 3 Lightning of Aria bolts after landing a hit on an enemy. Each bolt deals 450% ATK of Adaptive DMG and inflicts 6s of Intoxicate on a random enemy. Enemies that are Intoxicated take 15% more Total DMG. If the character can Paralyze, she will gain 20% Elemental Breach for 10s after casting Lightning of Aria. Triggering it again resets the duration.This signet cannot be upgraded.',
  },
  Aria_of_SoilEnhancedNormal_Signet_of_Gold: {
    label: 'Aria of SoilEnhancedNormal Signet of Gold',
    description: 'Intoxicated enemies take 15% more Total DMG. Can stack up to 3 times.',
  },
  Aria_of_LifeEnhancedNormal_Signet_of_Gold: {
    label: 'Aria of LifeEnhancedNormal Signet of Gold',
    description: 'Every hit on an Intoxicated enemy restores 1.0 SP for the Valkyrie.',
  },
  Aria_of_DawnEnhancedNormal_Signet_of_Gold: {
    label: 'Aria of DawnEnhancedNormal Signet of Gold',
    description:
      'If 3 Lightning of Aria bolts hit the same enemy, it will trigger Thunder Symphony, which deals 1200% ATK of Adaptive DMG and inflicts Paralyze with 3 Paralyze Trauma in a large AoE.',
  },
  Echo_of_GoldCoreNexus_Signet_of_Gold: {
    label: 'Echo of GoldCoreNexus Signet of Gold',
    description:
      'Consuming SP restores the same amount of Charge and triggers Final Echo status, during which Total DMG is increased by 0.4% (caps at 160%) for every 10 SP limit, costing Charge equal to the remaining effective seconds of the status. Insufficient Charge resets the effect and ends Final Echo.This signet cannot be upgraded.',
  },
  Echo_of_Withered_SoilEnhancedNormal_Signet_of_Gold: {
    label: 'Echo of Withered SoilEnhancedNormal Signet of Gold',
    description:
      'After lasting over 3s, Final Echo boosts max SP by 50% and restores 1% SP per second until it ends.',
  },
  Echo_of_Shrill_WindEnhancedNormal_Signet_of_Gold: {
    label: 'Echo of Shrill WindEnhancedNormal Signet of Gold',
    description:
      'After Final Echo state lasts over 3s, deal 300% ATK of Adaptive DMG to nearby enemies per second until it ends.',
  },
  Echo_of_Silent_NightEnhancedNormal_Signet_of_Gold: {
    label: 'Echo of Silent NightEnhancedNormal Signet of Gold',
    description:
      'After lasting over 3s, Final Echo reduces the ATK, DEF, and Elemental Resists of enemies nearby by 2% per second (max at 40%) until it ends.',
  },
};
