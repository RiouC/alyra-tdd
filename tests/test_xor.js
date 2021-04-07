const assert = require('assert').strict;
const { xor } = require("./xor")

assert(xor(false, false) === false)
assert(xor(true, false) === true)
assert(xor(false, true) === true)
assert(xor(true, true) === false)
