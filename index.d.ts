declare function assert<Type> (value: Type, ...values: Type[]): typeof assert

declare namespace assert {
  function isTrue<Type extends true> (_?: Type): typeof assert
  function isFalse<Type extends false> (_?: Type): typeof assert
  function extension<A, B> (expect: Extends<A, B>): typeof assert
  function compare<A, B> (expect: Compare<A, B>): typeof assert
  function equality<A, B> (expect: Equal<A, B>): typeof assert
  function inequality<A, B> (expect: NotEqual<A, B>): typeof assert

  type If<Boolean extends boolean, WhenTrue, WhenFalse> =
    Boolean extends true ? WhenTrue : WhenFalse

  type Extends<A, B> = Or<
    Any<B>,
    If<Any<A>,
      Any<B>,
      _Extends<A, B>
    >
  >

  type _Extends<A, B> = [A] extends [B] ? true : false

  type Compare<A, B, Options extends Compare.Options = Compare.Options.Default> =
    If<Extends<A, B>,
      If<Extends<B, A>,
        Options['equal'],
        Options['broaderRight']
      >,
      If<Extends<B, A>,
        Options['broaderLeft'],
        Options['mismatch']
      >
    >

  namespace Compare {
    interface Options {
      broaderLeft: any
      broaderRight: any
      equal: any,
      mismatch: any
    }

    namespace Options {
      interface Default extends Compare.Options {
        broaderLeft: 'broaderLeft'
        broaderRight: 'broaderRight'
        equal: 'equal',
        mismatch: 'mismatch'
      }
    }
  }

  type Equal<A, B> = Or<
    And<Any<A>, Any<B>>,
    And<
      And<NotAny<A>, NotAny<B>>,
      And<Extends<A, B>, Extends<B, A>>
    >
  >

  type NotEqual<A, B> = Not<Equal<A, B>>

  type Any<Type> = And<
    _Extends<Type, 0>,
    _Extends<Type, 1>
  >

  type NotAny<Type, True = true, False = true> = Not<Any<Type>>

  type Not<X extends boolean> =
    X extends true ? false : true

  type And<A extends boolean, B extends boolean> =
    LogicalTable<A, B, true, false, false, false>

  type Or<A extends boolean, B extends boolean> =
    LogicalTable<A, B, true, true, true, false>

  type Xor<A extends boolean, B extends boolean> =
    LogicalTable<A, B, false, true, true, false>

  type LogicalTable<A extends boolean, B extends boolean, AB, AnB, nAB, nAnB> =
    A extends true
      ? B extends true ? AB : AnB
      : B extends true ? nAB : nAnB
}

export = assert
