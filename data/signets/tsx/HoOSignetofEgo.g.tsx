import { Signet } from '@/types/Signet';


interface SignetOfHooSignetOfEgo {
    blessingofultra: Signet;
    blessingofinscription: Signet;
    blessingoflethalsmite: Signet;
    blessingofnature: Signet;
    blessingofexpungement: Signet;
}

const varblessingofultra: Signet = { label: "Blessing of ultra", description: "Ultimate can slash up to 8 more times and deal an extra 500% ATK of Lightning DMG.", priority: "**Start**" };
const varblessingofinscription: Signet = { label: "Blessing of inscription", description: "Ultimate's CD reduces by 30% and it deals 100% bonus Total DMG. If it kills an enemy, Valkyrie recovers 5 SP per second for 7s. Triggering it again refreshes its duration.", priority: "1st" };
const varblessingoflethalsmite: Signet = { label: "Blessing of lethal smite", description: "Stacking Twisted Origin grants 1 charge. At 2 charges, Malice Expunged consumes all charges to deal 1000% ATK of bonus Lightning DMG, gather enemies in a large area, and make enemies hit take 30% bonus Lightning DMG for 10s. Triggering it again resets the duration.", priority: "Optional" };
const varblessingofnature: Signet = { label: "Blessing of nature", description: "Stacking Twisted Origin boosts Total DMG from Basic ATK and Combo ATK by 25% for 8s (5 stacks max), reduces weapon active CD by 3s, and grants 3s of Iron Body plus 80% DMG reduction.", priority: "No" };
const varblessingofexpungement: Signet = { label: "Blessing of expungement", description: "Malice Expunged deals 15 x 200% ATK of bonus Lightning DMG. When triggered, it reduces weapon active CD by 2s and increases Valkyrie's Total DMG by 40% for 10s. Triggering it again resets the duration.", priority: "No" };


const HooSignetOfEgo: SignetOfHooSignetOfEgo = {
    blessingofultra: varblessingofultra,
    blessingofinscription: varblessingofinscription,
    blessingoflethalsmite: varblessingoflethalsmite,
    blessingofnature: varblessingofnature,
    blessingofexpungement: varblessingofexpungement,
};

export default HooSignetOfEgo;
