const _ = require('lodash');

const numbers = [22, 32, 34, 53, 44, 3];

_.each(numbers, function (number, i) {
    console.log(i, number);
});