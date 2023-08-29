import { Signet } from '@/types/Signet';


interface SignetOfAponiaSignetOfDiscipline1stCore {
    firstnobetrayal: Signet;
    fourthnoinsolence: Signet;
    fifthnofalsehood: Signet;
    nexussignet2youshallreceivedisciplinesblessing: Signet;
    youshallfollowgood: Signet;
    youshallanswerprayers: Signet;
    youshallpunishevil: Signet;
}

const varfirstnobetrayal: Signet = { label: "First no betrayal", description: "Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation." };
const varfourthnoinsolence: Signet = { label: "Fourth no insolence", description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation." };
const varfifthnofalsehood: Signet = { label: "Fifth no falsehood", description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed." };
const varnexussignet2youshallreceivedisciplinesblessing: Signet = { label: "Nexus signet 2: you shall receive disciplines blessing", description: "" };
const varyoushallfollowgood: Signet = { label: "You shall follow good", description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration." };
const varyoushallanswerprayers: Signet = { label: "You shall answer prayers", description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD 5s. Triggering it again resets the duration." };
const varyoushallpunishevil: Signet = { label: "You shall punish evil", description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins." };


const AponiaSignetOfDiscipline1stCore: SignetOfAponiaSignetOfDiscipline1stCore = {
    firstnobetrayal: varfirstnobetrayal,
    fourthnoinsolence: varfourthnoinsolence,
    fifthnofalsehood: varfifthnofalsehood,
    nexussignet2youshallreceivedisciplinesblessing: varnexussignet2youshallreceivedisciplinesblessing,
    youshallfollowgood: varyoushallfollowgood,
    youshallanswerprayers: varyoushallanswerprayers,
    youshallpunishevil: varyoushallpunishevil,
};

export default AponiaSignetOfDiscipline1stCore;
