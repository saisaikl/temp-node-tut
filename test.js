// const names = require('./4-names')
// console.log(names.john)

// let sayHi = require('./2-global')
// sayHi('susan')

const _ = require('lodash')

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)