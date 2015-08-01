# node-vehicle-restriction
[![NPM version](https://img.shields.io/npm/v/vehicle-restriction.svg?style=flat)](https://www.npmjs.org/package/vehicle-restriction)

calc vehicle restriction rule

------

## Installation

```bash
$ npm install vehicle-restriction
```
## Feature

* [x] noremalize plate string
* [x] test if the vehicle' plate is restricted
* [ ] show which plate number is restricted
* [ ] support more city

## Example

```js
const vr = require('vehicle-restriction');

console.log(vr.hz.isRestricted('浙A·F8965', 5));
// ==> true

```

## Usage

> Currently, it's only support hangzhou

#### Namespace

All methods is associated with city by a namespace, and the namespace is the city's name in Pinyin, or shorted letters.
eg: if the module was required as `vr`, Hangzhou will be `vr.hz` or `vr.hangzhou`.

#### APIs

##### .isRestricted(plate, day)

__Params:__
* `plate`<String>: String of the vehicle's plate, supported format: `浙A·F8965`, `浙A-F8965`, `浙A F8965` or `浙AF8965`.
* `day`<Number | String>: Day number in a week, 0 for Sunday, 1 for Monday, etc.

__Return:__
<Boolean>: `true`: is restricted; `false`: is not restricted.

## License

MIT © [Leigh Zhu](#)
