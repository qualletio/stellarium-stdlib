# stellarium-stdlib

Official standard library Resources for Stellarium.

## Resources

All resources are found under the `sh.stellarium.stdlib` path.

### Strings

#### length

Returns the length of a given string in `int32`.

```kotlin
request LengthOfString {
    const strings: sh.stellarium.stdlib.Strings

    const msg = "Hello World!"

    const length = strings.length(of: msg)

    if (length.error == null) {
        return length
    } else {
        return -1
    }
}
```
