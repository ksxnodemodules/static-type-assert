import {SetComplement} from 'utility-types'

declare namespace all {
  function assert<Type> (...values: Type[]): typeof assert
  function complement<Include, Exclude extends Include> (...values: SetComplement<Include, Exclude>[]): typeof complement
}

export = all
