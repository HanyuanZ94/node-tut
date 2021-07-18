const _ = require('lodash');
const items = [1, [2, [3]]];
const flattenItems = _.flattenDeep(items)
console.log(flattenItems);