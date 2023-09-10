import { Signet } from '@/types/Signet';
interface Signets_of_Infinity_Mobius_interface {
  Rodent_VNormalNormal_Signet_of_Infinity: Signet;
  Entwined_PNormalNormal_Signet_of_Infinity: Signet;
  Silent_BNormalNormal_Signet_of_Infinity: Signet;
  Lip_Poison_ENormalNormal_Signet_of_Infinity: Signet;
  Lodging_CNormalNormal_Signet_of_Infinity: Signet;
  Dark_Pupil_TNormalNormal_Signet_of_Infinity: Signet;
  Infinite_XCoreNexus_Signet_of_Infinity: Signet;
  Dead_XEnhancedNormal_Signet_of_Infinity: Signet;
  Unknown_XEnhancedNormal_Signet_of_Infinity: Signet;
  Newborn_XEnhancedNormal_Signet_of_Infinity: Signet;
  Infinite_MCoreNexus_Signet_of_Infinity: Signet;
  Sacrificial_MEnhancedNormal_Signet_of_Infinity: Signet;
  Immortal_MEnhancedNormal_Signet_of_Infinity: Signet;
  Collapsed_MEnhancedNormal_Signet_of_Infinity: Signet;
}
export const Signets_of_Infinity_Mobius: Signets_of_Infinity_Mobius_interface = {
  Rodent_VNormalNormal_Signet_of_Infinity: {
    label: 'Rodent [V]NormalNormal Signet of Infinity',
    description:
      'For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).',
  },
  Entwined_PNormalNormal_Signet_of_Infinity: {
    label: 'Entwined [P]NormalNormal Signet of Infinity',
    description:
      'For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max).',
  },
  Silent_BNormalNormal_Signet_of_Infinity: {
    label: 'Silent [B]NormalNormal Signet of Infinity',
    description:
      'For every summoned entity, ELF, or Support Valkyrie present, Valkyrie takes 8% less Total DMG (5 stacks max).',
  },
  Lip_Poison_ENormalNormal_Signet_of_Infinity: {
    label: 'Lip Poison [E]NormalNormal Signet of Infinity',
    description: 'Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%.',
  },
  Lodging_CNormalNormal_Signet_of_Infinity: {
    label: 'Lodging [C]NormalNormal Signet of Infinity',
    description: 'ELF Ultimates and Support Valkyries support skills have 20% reduced CD.',
  },
  Dark_Pupil_TNormalNormal_Signet_of_Infinity: {
    label: 'Dark Pupil [T]NormalNormal Signet of Infinity',
    description: 'ELFs restore SP 75% faster.',
  },
  Infinite_XCoreNexus_Signet_of_Infinity: {
    label: 'Infinite [X]CoreNexus Signet of Infinity',
    description:
      'Summoning summoned entities or using ELF Ultimates triggers Mind Sync state which lasts 8s. In Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 30% bonus Physical and Elemental DMG. Resets on exiting Mind Sync. Entering Mind Sync while Mind Sync is still active does not reset its duration, but extends it by 4.0s. If there are entities summoned by characters on the field, the duration is extended by another 5s.This signet cannot be upgraded.',
  },
  Dead_XEnhancedNormal_Signet_of_Infinity: {
    label: 'Dead [X]EnhancedNormal Signet of Infinity',
    description:
      'For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync.',
  },
  Unknown_XEnhancedNormal_Signet_of_Infinity: {
    label: 'Unknown [X]EnhancedNormal Signet of Infinity',
    description:
      'Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.',
  },
  Newborn_XEnhancedNormal_Signet_of_Infinity: {
    label: 'Newborn [X]EnhancedNormal Signet of Infinity',
    description: 'Valkyries in Mind Sync state gain 30% Physical Breach and 20% Elemental Breach.',
  },
  Infinite_MCoreNexus_Signet_of_Infinity: {
    label: 'Infinite [M]CoreNexus Signet of Infinity',
    description:
      'Adds 20% transfer progress per second. Reaching 100% induces Sentience Sync for 12s, during which attacks from summoned entities and ELFs unleash Assault of Ouroboros on hit, dealing 500% ATK of Adaptive DMG; CD: 0.8s. When deployed Valkyrie and user-summoned entity are both present, deployed Valkyrie gains 40% Physical Breach and 20% Elemental Breach.This signet cannot be upgraded.',
  },
  Sacrificial_MEnhancedNormal_Signet_of_Infinity: {
    label: 'Sacrificial [M]EnhancedNormal Signet of Infinity',
    description:
      'When a self-generated summoned entity remains for more than 1s, it increases the duration of Sentience Sync by 1s every second when its active and increases the transfer progress by 15% per second when its inactive.',
  },
  Immortal_MEnhancedNormal_Signet_of_Infinity: {
    label: 'Immortal [M]EnhancedNormal Signet of Infinity',
    description:
      'User-summoned entities deal 5% more Physical and Elemental DMG per second (caps at 50%). When entering Sentience Sync state, immediately gain 50% of all Physical and Elemental DMG bonuses applied to all active summoned entities, then deal 2.5% more Physical and Elemental DMG per second (caps at 30%).',
  },
  Collapsed_MEnhancedNormal_Signet_of_Infinity: {
    label: 'Collapsed [M]EnhancedNormal Signet of Infinity',
    description:
      'Each time a summoned entity deals DMG, enemies take 1% more Total DMG. In Sentience Sync state, each attack makes enemies take 1% more Total DMG (caps at 30%).',
  },
};
