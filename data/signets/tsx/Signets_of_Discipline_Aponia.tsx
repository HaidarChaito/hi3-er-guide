import { Signet } from "@/types/Signet";
interface Signets_of_Discipline_Aponia_interface {
First_No_Betrayal: Signet,
Second_No_Deception: Signet,
Third_No_Brutality: Signet,
Fourth_No_Insolence: Signet,
Fifth_No_Falsehood: Signet,
Sixth_No_Decadence: Signet,
You_Shall_Be_Subject_to_Numerous_DisciplinesCore: Signet,
You_Shall_Be_Bound_by_Thy_Body: Signet,
You_Shall_Be_Committed_to_Thy_Life: Signet,
You_Shall_Be_Witnessed_by_Thy_Heart: Signet,
You_Shall_Receive_Disciplines_BlessingCore: Signet,
You_Shall_Punish_Evil: Signet,
You_Shall_Follow_Good: Signet,
You_Shall_Answer_Prayers: Signet,
}
export const Signets_of_Discipline_Aponia:Signets_of_Discipline_Aponia_interface = {
First_No_Betrayal : { label:'First, No Betrayal',description: "Exhortation increases by 5 per second and caps at 200. Basic ATKs Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation." },
Second_No_Deception : { label:'Second, No Deception',description: "Exhortation increases by 5 per second and caps at 200. Character has Total DMG Reduction equal to 0.3% of Exhortation. Summoning entities reduces 50% Exhortation." },
Third_No_Brutality : { label:'Third, No Brutality',description: "Exhortation increases by 5 per second and caps at 200. Character has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo hits reduces 50% Exhortation." },
Fourth_No_Insolence : { label:'Fourth, No Insolence',description: "Exhortation increases by 5 per second and caps at 200. Ultimate and Burst mode attacks Physical DMG and Elemental DMG increase by 0.3% of Exhortation. Using weapon skills reduces 50% Exhortation." },
Fifth_No_Falsehood : { label:'Fifth, No Falsehood',description: "Valkyries start with 40 bonus Exhortation. Whenever Exhortation is reduced, enemies take 20% bonus Total DMG for 5s. Can be refreshed." },
Sixth_No_Decadence : { label:'Sixth, No Decadence',description: "Boosts Valkyrie Total DMG by 40% and keeps Exhortation from decreasing for 40s upon QTE hitting an enemy. Triggering it again resets the duration." },
You_Shall_Be_Subject_to_Numerous_DisciplinesCore : { label:'You Shall Be Subject to Numerous DisciplinesCore',description: "Reaching 120 Exhortation induces Mortification where Valkyrie Total DMG increases by 25% of Exhortation. Also, for every Signet of Discipline unlocked, Valkyries deal 5% bonus Physical DMG and Elemental DMG. Gain 40% Physical Breach and 20% Elemental Breach for 40s upon landing QTE. Triggering it again resets the duration.This signet cannot be upgraded." },
You_Shall_Be_Bound_by_Thy_Body : { label:'You Shall Be Bound by Thy Body',description: "In Mortification, Basic ATK has 30% Physical Breach and Elemental Breach but the character will take 15% more Total DMG." },
You_Shall_Be_Committed_to_Thy_Life : { label:'You Shall Be Committed to Thy Life',description: "Exhortation starts at 80 and wont drop below 80." },
You_Shall_Be_Witnessed_by_Thy_Heart : { label:'You Shall Be Witnessed by Thy Heart',description: "In Mortification, Ultimate deals 40% bonus Total DMG but the character takes 15% more Total DMG." },
You_Shall_Receive_Disciplines_BlessingCore : { label:'You Shall Receive Disciplines BlessingCore',description: "Normal Signet of Discipline grants Exhortation 100% increase per second. When Exhortation exceeds 150, You Shall Know Your Sins will trigger every 5s around the Valkyrie, dealing 1400% ATK of Adaptive DMG. The Valkyrie deals 10% more Total DMG for each enemy hit, for a total of 70%, for 10s. Triggering it again resets the duration.This signet cannot be upgraded." },
You_Shall_Punish_Evil : { label:'You Shall Punish Evil',description: "Enemies struck by You Shall Know Your Sins two or more times take 26% more Total DMG. 3.5 SP is restored when these enemies are hit by You Shall Know Your Sins. If there are no other Discipline enhanced signets, this Signets effect will be boosted by 50%." },
You_Shall_Follow_Good : { label:'You Shall Follow Good',description: "You Shall Know Your Sins Total DMG dealt increases 30% and increases Physical and Elemental Breach by 0.13% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration. If there are no other Discipline enhanced signets, this Signets effect will be boosted by 50%." },
You_Shall_Answer_Prayers : { label:'You Shall Answer Prayers',description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 20% less Total DMG and deals 26% more Physical and Elemental DMG to enemies. Valkyrie deals 520% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. If there are no other Discipline enhanced signets, this Signets effect will be boosted by 50%." },
}
