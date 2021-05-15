export function getOrDefault<T>(array: T[], index: number, defaultValue: () => T): T;
export function getOrDefault<V>(map: { [string]: V }, key: string, defaultValue: () => V): V;
export function orElse<V>(value: V | undefined, else_: () => V): V;

class Optional<T>{
    constructor();
    constructor(value: T);
    static of(value: T): Optional<T>;
    value: T;

    orElse(v: T): T;
    or(v: T): Optional<T>;
}
