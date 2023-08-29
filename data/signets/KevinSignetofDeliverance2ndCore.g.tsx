import { Signet } from '@/types/Signet';


interface SignetOfKevinSignetOfDeliverance2ndCore {
    gobletofthegiver: Signet;
    brandoftheundead: Signet;
    artifactoftheinhibitor: Signet;
    rochetofthepilgrim: Signet;
    nexussignet2shadowofthedeliverer: Signet;
    dreamofthedeliverer: Signet;
    resolveofthedeliverer: Signet;
    triumphofthedeliverer: Signet;
}

const vargobletofthegiver: Signet = { label: "Goblet of the giver", description: "Ultimate boosts Total DMG by 35% for 7s." };
const varbrandoftheundead: Signet = { label: "Brand of the undead", description: "Ultimate boosts Elemental DMG by 30% for 7s." };
const varartifactoftheinhibitor: Signet = { label: "Artifact of the inhibitor", description: "Ultimate boosts Elemental Breach by 30% for 7s." };
const varrochetofthepilgrim: Signet = { label: "Rochet of the pilgrim", description: "Ultimate restores 3 SP per second for 7s." };
const varnexussignet2shadowofthedeliverer: Signet = { label: "Nexus signet 2: shadow of the deliverer", description: "" };
const vardreamofthedeliverer: Signet = { label: "Dream of the deliverer", description: "In War of Deliverance, all buffs provided by Normal Signets of Deliverance are enhanced by 60%." };
const varresolveofthedeliverer: Signet = { label: "Resolve of the deliverer", description: "Every hit of Ultimate or Burst Mode ATKs boosts Total DMG by 0.5% (caps at 50%)." };
const vartriumphofthedeliverer: Signet = { label: "Triumph of the deliverer", description: "War of Deliverance state enhances the Valkyrie's attacks. After landing the first attack, attacks ignore enemy DEF and Elemental Resists for 6s. After this enhancement ends, all enemies take 20% more Total DMG." };


const KevinSignetOfDeliverance2ndCore: SignetOfKevinSignetOfDeliverance2ndCore = {
    gobletofthegiver: vargobletofthegiver,
    brandoftheundead: varbrandoftheundead,
    artifactoftheinhibitor: varartifactoftheinhibitor,
    rochetofthepilgrim: varrochetofthepilgrim,
    nexussignet2shadowofthedeliverer: varnexussignet2shadowofthedeliverer,
    dreamofthedeliverer: vardreamofthedeliverer,
    resolveofthedeliverer: varresolveofthedeliverer,
    triumphofthedeliverer: vartriumphofthedeliverer,
};

export default KevinSignetOfDeliverance2ndCore;
