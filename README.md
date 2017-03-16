 # is-really-primitive

test if a value is primitive

> it's useless so it's awesome

## tl;dr

```javascript
const isPrimitive = require('is-fully-primitive')

// booleans are primitive
isPrimitive(true) // true
isPrimitive(false) // true
isPrimitive(Boolean(false)) // true

// strings are primitive
isPrimitive('foo') // true
isPrimitive(String('bar')) // true

// numbers are primitive
isPrimitive(42) // true
isPrimitive(4.2) // true
isPrimitive(Number(42)) // true

// symbols are primitive
isPrimitive(Symbol('baz')) // true

// null is primitive
isPrimitive(null) // true

// undefined is primitive
isPrimitive(undefined) // true

// others are not primitive
isPrimitive(new Date()) // false
isPrimitive(new isPrimitive()) // false
```
