import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';
import { ANY } from '@/types/common.type';

export const cn = (...inputs: Array<ClassValue>) => twMerge(clsx(inputs));

export const get = (obj: ANY, path: string, defaultValue = undefined) => {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

export const isEmpty = (obj: object | Array<unknown> | unknown | null) =>
  [Object, Array].includes((obj || {}).constructor as ObjectConstructor) && !Object.entries(obj || {}).length;
