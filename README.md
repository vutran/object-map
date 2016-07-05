# object-map

> map function for JavaScript objects.

[![Build status](https://ci.appveyor.com/api/projects/status/uu303wn7eqodcdgn/branch/master?svg=true)](https://ci.appveyor.com/project/vutran/object-map/branch/master)

## Install

````bash
$ npm install --save-dev @vutran/object-map
````

## Usage

````js
import objectMap from '@vutran/object-map';

const myObject = {
  firstName: 'Vu',
  lastName: 'Tran',
};

const newObject = objectMap(myObject, function(value, prop, arr) {
  return value + '!';
});

console.log(newObject);
// => { firstName: 'Vu!', lastName: 'Tran!' };
````

## API

### objectMap(object, callback)

Returns a new object and applies the `callback` for each property in the given `object`.

#### objectMap

Type: `object`

The reference object

#### callback

Type: `function`

Function that produces a value for a given property. Takes 3 arguments: `value`, `prop`, `object`.

value: The value of the current property
prop: The name of the property
object: The original object

## License

MIT © [Vu Tran](https://github.com/vutran/)
