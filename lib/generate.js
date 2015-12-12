'use strict';

var _ = require('lodash');
var dictionary = require('./dictionary');

function generate() {
  var food = _.capitalize(_.sample(dictionary.foods));
  var ingredient = _.capitalize(_.sample(dictionary.ingredients));
  var description = _.capitalize(_.sample(dictionary.descriptions));
  var truckType = _.capitalize(_.sample(dictionary.truckTypes));

  var output = '';
  var randomNumber = _.random(1, 100);

  if (randomNumber > 90) {
    output = 'The ' + food + ' ' + truckType;
  } else if (randomNumber > 75) {
    output = description + ' ' + food + ' On Wheels';
  } else if (randomNumber > 55) {
    var secondDescription = _.capitalize(_.sample(dictionary.descriptions));
    output = 'The ' + description + ' ' + secondDescription + ' ' + food;
  } else {
    output = 'The ' + description + ' ' + food + ' ' + truckType;
  }

  return output;
}

module.exports = generate;
