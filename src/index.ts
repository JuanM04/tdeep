import type { Path, PathValue } from "./types";

export type { Path, PathValue };

export function tdeep<T, P extends Path<T> = Path<T>>(
  path: P,
  value: PathValue<T, P> | ((prev: PathValue<T, P>) => PathValue<T, P>)
): (state: T) => T {
  return (source: T) => {
    const keys = path.split(".");

    const final = copy(source) as any;
    let current = final;

    for (let i = 0; i < keys.length; i++) {
      current = current[keys[i]] =
        i !== keys.length - 1
          ? copy(current[keys[i]])
          : typeof value === "function"
          ? (value as any)(current[keys[i]])
          : value;
    }

    return final;
  };
}

function copy(obj: any): any {
  return Array.isArray(obj) ? [...obj] : { ...obj };
}
