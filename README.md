# Static Type Assert

Asserting type with help of TypeScript compiler

## Requirements

* Node.js ≥ 8.9.0
* TypeScript ≥ 3.0.0

## Usage

### 1. Create TypeScript files

Example: `pass.ts`

```typescript
import assert from 'static-type-assert'

// Comma-separated parameters
assert<string>('hello', 'world')
assert<number>(123, 456, 789)

// Curry function calls
assert<'abc' | 'def' | 123 | 456>('abc')(123)('def')(456)

// Combine
assert<string | number>('a', 0)('c', 'd')(1, 2)
```

Example: `fail.ts`

```typescript
import assert from 'static-type-assert'
assert<number>('abc') // Expected Error: Argument of type '"abc"' is not assignable to type 'number'
```

### 2. Use TypeScript compiler to check types

```sh
tsc --noEmit
```

Example: `pass.ts`

```sh
tsc --noEmit pass.ts # Expects to pass (no errors)
```

Example: `fail.ts`

```sh
tsc --noEmit fail.ts # Expects errors
```

## License

[MIT](https://git.io/fA2Ff) © [Hoàng Văn Khải](https://ksxgithub.github.io)
