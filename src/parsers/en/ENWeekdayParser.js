// const dayjs = require('dayjs');

var Parser = require('../parser').Parser;

var DAYS_OFFSET = {
  sunday: 0,
  sun: 0,
  monday: 1,
  mon: 1,
  tuesday: 2,
  tues: 2,
  tue: 2,
  wednesday: 3,
  wed: 3,
  thursday: 4,
  thurs: 4,
  thur: 4,
  thu: 4,
  friday: 5,
  fri: 5,
  saturday: 6,
  sat: 6,
};

var PATTERN = new RegExp(
  '(\\W|^)' +
    '(?:(?:\\,|\\(|\\（)\\s*)?' +
    '(?:on\\s*?)?' +
    '(?:(this|last|past|next)\\s*)?' +
    '(' +
    Object.keys(DAYS_OFFSET).join('|') +
    ')' +
    '(?:\\s*(?:\\,|\\)|\\）))?' +
    '(?:\\s*(this|last|past|next)\\s*week)?' +
    '(?=\\W|$)',
  'i'
);

exports.Parser = function ENWeekdayParser() {
  Parser.apply(this, arguments);

  this.pattern = function () {
    return PATTERN;
  };

  this.extract = function (text, match) {
    var result = { tags: {} };
    result.text = text;
    result.matchObject = match;
    result.tags['ENWeekdayParser'] = true;

    return result;
  };
};
