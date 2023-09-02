import { Signet } from '@/types/Signet';


interface SignetOfMobiusSignetOfInfinity {
    lippoisone: Signet;
    entwinedp: Signet;
    rodentv: Signet;
    nexussignet1infinitex: Signet;
    deadx: Signet;
    newbornx: Signet;
    unknownx: Signet;
    nexussignet2infinitem: Signet;
    sacrificialm: Signet;
    collapsedm: Signet;
    immortalm: Signet;
}

const varlippoisone: Signet = { label: "Lip poison [e]:", description: "Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs", priority: "1st" };
const varentwinedp: Signet = { label: "Entwined [p]:", description: "For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)", priority: "2nd" };
const varrodentv: Signet = { label: "Rodent [v]:", description: "For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).", priority: "3rd" };
const varnexussignet1infinitex: Signet = { label: "Nexus signet 1: infinite [x]", description: "", priority: "" };
const vardeadx: Signet = { label: "Dead [x]", description: "For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync", priority: "1st" };
const varnewbornx: Signet = { label: "Newborn [x]", description: "Valkyrie gains 40% Physical Breach and 20% Elemental Breach", priority: "2nd" };
const varunknownx: Signet = { label: "Unknown [x]:", description: "Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.", priority: "Optional2nd" };
const varnexussignet2infinitem: Signet = { label: "Nexus signet 2: infinite [m]", description: "", priority: "" };
const varsacrificialm: Signet = { label: "Sacrificial [m]", description: "When a self-generated summoned entity remains for more than 1s, it increases the duration of Sentience Sync by 1s every second when ifs active, and increases the transfer progress by 20% per second when ifs inactive.", priority: "1st" };
const varcollapsedm: Signet = { label: "Collapsed [m]", description: "Each time a summoned entity deals DMG to enemies, the total DMG taken by the enemies increases by 1%, and if Sentience Sync is activated, each ATK dealt by Valkyrie increases the total DMG taken by the enemies by 1%.", priority: "2nd" };
const varimmortalm: Signet = { label: "Immortal [m]", description: "When a self-generated summoned entity remains for more than 8s, the physical and elemental DMG it deals increase by 5% per second, up to a maximum of 50% While Sentience Sync is active, Valkyrie will accumulate 50% of the summoned entitys physical and elemental DMG increase, with a cap of 30%.", priority: "Optional3rd" };


const MobiusSignetOfInfinity: SignetOfMobiusSignetOfInfinity = {
    lippoisone: varlippoisone,
    entwinedp: varentwinedp,
    rodentv: varrodentv,
    nexussignet1infinitex: varnexussignet1infinitex,
    deadx: vardeadx,
    newbornx: varnewbornx,
    unknownx: varunknownx,
    nexussignet2infinitem: varnexussignet2infinitem,
    sacrificialm: varsacrificialm,
    collapsedm: varcollapsedm,
    immortalm: varimmortalm,
};

export default MobiusSignetOfInfinity;
