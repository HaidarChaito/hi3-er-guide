import { signetType } from '@/types/Signet';
import { useState, useEffect } from 'react';

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

export function withPriority(signet: signetType, priority?: string) {
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



export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
