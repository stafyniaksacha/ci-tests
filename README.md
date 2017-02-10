# is-primitive

test if a value is primitive

> it's useless so it's awesome

## tl;dr

```javascript
const isPrimitive = require('is-primitive')

isPrimitive(true) // true
isPrimitive(false) // true
isPrimitive(Boolean(false)) // true
isPrimitive('foo') // true
isPrimitive(String('foo')) // true
isPrimitive(42) // true
isPrimitive(4.2) // true
isPrimitive(Number(42)) // true
isPrimitive(null) // true
isPrimitive(undefined) // true
isPrimitive(new Date()) // false
isPrimitive(new isPrimitive()) // false
```