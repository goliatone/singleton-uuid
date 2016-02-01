# singleton-uuid

Create a [naive] singleton UUID per machine and per session.

`singleton-uuid` will generate a valid V4 `uuid` the first time the module is called on a machine. When is called for the first time a cache file will be generated and subsequent calls will return the same UUID.

## Documentation

The function takes one argument. 

If this argument is a string, and the string is a valid UUID then the cache will be overwritten and subsequent call will use this UUID.

If the argument is a boolean- or any other type for that matter- then the cache will be refreshed returning a new UUID.

## Examples

```
var uuid = require('singleton-uuid')();
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2016 goliatone  
Licensed under the MIT license.
