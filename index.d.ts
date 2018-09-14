import {
  Extends,
  Compare,
  Equal,
  NotEqual
} from 'typescript-compare'

declare function assert<Type> (value: Type, ...values: Type[]): typeof assert

declare namespace assert {
  function isTrue<Type extends true> (_?: Type): typeof assert
  function isFalse<Type extends false> (_?: Type): typeof assert
  function extension<A, B> (expect: Extends<A, B>): typeof assert
  function compare<A, B> (expect: Compare<A, B>): typeof assert
  function strictCompare<A, B> (expect: Compare.Strict<A, B>): typeof assert
  function equality<A, B> (expect: Equal<A, B>): typeof assert
  function inequality<A, B> (expect: NotEqual<A, B>): typeof assert
}

export = assert
