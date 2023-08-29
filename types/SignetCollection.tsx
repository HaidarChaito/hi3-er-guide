import { Signet } from "./Signet"

export type SignetCollection = {
    label: string,
    signets: Signet[],
    core: Signet
}