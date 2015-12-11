var _ = require('lodash');
var dictionary = require('./dictionary');

function generate() {
  var food = _.sample(dictionary.foods);
  var ingredient = _.sample(dictionary.ingredients);
  var description = _.sample(dictionary.descriptions);
  var truckType = _.sample(dictionary.truckTypes);
  return description + ' ' + ingredient + ' ' + food + ' ' + truckType;
}

console.log(generate());

module.exports = generate();
