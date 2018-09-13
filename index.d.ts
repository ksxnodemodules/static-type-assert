declare function assert<Type> (value: Type, ...values: Type[]): typeof assert

declare namespace assert {
  function isTrue<Type extends true> (_?: Type): typeof assert
  function isFalse<Type extends false> (_?: Type): typeof assert
  function extension<A, B> (expect: Extends<A, B>): typeof assert
  function equality<A, B> (expect: Equal<A, B>): typeof assert
  function inequality<A, B> (expect: NotEqual<A, B>): typeof assert
  type Extends<A, B, True = true, False = false> = A extends B ? True : False
  type Equal<A, B, True = true, False = false> = Extends<A, B, Extends<B, A, True, False>, False>
  type NotEqual<A, B, True = true, False = false> = Equal<A, B, False, True>
}

export = assert
