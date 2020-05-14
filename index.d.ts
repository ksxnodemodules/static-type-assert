import {
  Extends,
  Compare,
  Equal,
  NotEqual
} from 'typescript-compare'

export declare function assert<Type> (value: Type, ...values: Type[]): void
export declare function isTrue<Type extends true> (_?: Type): void
export declare function isFalse<Type extends false> (_?: Type): void
export declare function extension<A, B> (expect: Extends<A, B>): void
export declare function compare<A, B> (expect: Compare<A, B>): void
export declare function strictCompare<A, B> (expect: Compare.Strict<A, B>): void
export declare function equality<A, B> (expect: Equal<A, B>): void
export declare function inequality<A, B> (expect: NotEqual<A, B>): void
export default assert
