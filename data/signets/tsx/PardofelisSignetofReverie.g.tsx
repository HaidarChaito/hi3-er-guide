import { Signet } from '@/types/Signet';


interface SignetOfPardofelisSignetOfReverie {
    mottoofmeow: Signet;
    backcurledtail: Signet;
    flexiblepc: Signet;
    nexussignet1emptydreamsselfsetandjoy: Signet;
}

const varmottoofmeow: Signet = { label: "Motto of meow", description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.", priority: "1st" };
const varbackcurledtail: Signet = { label: "Back-curled tail", description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.", priority: "2nd" };
const varflexiblepc: Signet = { label: "Flexible p&c", description: "Every 100 Shiny Silvers obtained this round restore 1 HP and 0.1 SP. Taking DMG disables this effect for 5s.", priority: "3rd" };
const varnexussignet1emptydreamsselfsetandjoy: Signet = { label: "Nexus signet 1: empty dreams self set and joy", description: "", priority: "" };


const PardofelisSignetOfReverie: SignetOfPardofelisSignetOfReverie = {
    mottoofmeow: varmottoofmeow,
    backcurledtail: varbackcurledtail,
    flexiblepc: varflexiblepc,
    nexussignet1emptydreamsselfsetandjoy: varnexussignet1emptydreamsselfsetandjoy,
};

export default PardofelisSignetOfReverie;
