import {SetComplement} from 'utility-types'

declare namespace all {
  type LeastOne<Element> = [Element, ...Element[]]
  function assert<Type> (...values: LeastOne<Type>): typeof assert
  function complement<Include, Exclude extends Include> (...values: LeastOne<SetComplement<Include, Exclude>>): typeof complement
}

export = all
