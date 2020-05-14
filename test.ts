import assert from './index'

assert<123>(123)
assert<123>(123, 123)
assert<123>(123, 123, 123)

// @ts-expect-error
assert<123>()
// @ts-expect-error
assert<123>(456)
// @ts-expect-error
assert<123>(123, 123, 123, 456, 123)
