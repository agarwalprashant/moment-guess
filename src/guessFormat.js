// import * as options from './options';
// import * as parser from './parsers/parser';
const options = require('./options');
const parser = require('./parsers/parser');

const weekDayFormatDates = [
  // ['d', /[A-Za-z]{1}/],
  ['dd', /^[A-Za-z]{2}$/g],
  ['ddd', /^[A-Za-z]{3}$/g],
  ['dddd', /^[A-Za-z]{4,}/g],
];

class Chrono {
  constructor(option) {
    option = option || options.casualOption();
    this.parsers = new Object(option.parsers);
  }

  //* The function chrono.parse returns detailed parsing results as objects of class chrono.ParsedResult.
  parse(text) {
    var allResults = [];

    this.parsers.forEach(function (parser) {
      var results = parser.execute(text);

      allResults = allResults.concat(results);
    });

    return allResults;
  }
}

const weekDay = new Chrono(options.casualOption());

module.exports = function guessFormat(text) {
  let format = '';

  let parsedObject = weekDay.parse(text);

  if (parsedObject[0].tags['ENWeekdayParser'] === true) {
    for (let i = 0; i < weekDayFormatDates.length; i++) {
      let item = parsedObject[0].matchObject[0];
      // let item = 'Wednesday';
      // let item = 'thu';
      // let item = 'mo';
      // let item = 'Tu';
      let regexObj = weekDayFormatDates[i][1];
      if (regexObj.test(item)) {
        format += weekDayFormatDates[i][0];
        break;
      }
    }
  }

  return format;
};
