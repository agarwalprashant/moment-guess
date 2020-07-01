exports.Parser = function (config) {
  config = config || {};
  var strictMode = config.strict;

  this.isStrictMode = function () {
    return strictMode == true;
  };

  this.pattern = function () {
    return /./i;
  };

  this.extract = function (text, match) {
    return null;
  };

  this.execute = function (text) {
    text; //?

    var results = [];
    var regex = this.pattern();

    var remainingText = text;
    var match = regex.exec(remainingText);

    if (match) {
      var results = this.extract(text, match);
    }

    return results;
  };
};

exports.ENWeekdayParser = require('./en/ENWeekdayParser').Parser;
