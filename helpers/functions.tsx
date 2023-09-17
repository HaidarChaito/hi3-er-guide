import { Signet } from '@/types/Signet';
import { Valkery } from '@/types/Valkery';

export function switchColor(element?: number) {
  switch (element) {
    case 1:
      return 'ephys';
    case 2:
      return 'eice';
    case 3:
      return 'elight';
    case 4:
      return 'efire';
    default:
      return 'primary';
  }
}

export function withPriority(signet: Signet, priority?: string) {
  const cln = structuredClone(signet);
  cln.priority = priority ?? 'Optional';
  return cln;
}
export const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export const shimmerElement = (
  w: number,
  h: number,
  primaryClass: string,
  neutralClass: string
) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop class="${neutralClass}" offset="20%" />
        <stop class="${primaryClass}" offset="50%" />
        <stop class="${neutralClass}" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" class="${neutralClass}" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;

export const compareValkeriesTier = (b: Valkery, a: Valkery): number => {
  const minRankA = a.tier || 1; // If minRank is not present, consider it as 1
  const minRankB = b.tier || 1; // If minRank is not present, consider it as 1

  if (minRankA < minRankB) {
    return -1;
  } else if (minRankA > minRankB) {
    return 1;
  } else {
    // If tiers are equal, sort by label in alphabetical order
    return b.label.localeCompare(a.label);
  }
};
