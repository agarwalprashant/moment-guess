const parser = require('./parsers/parser');

exports.mergeOptions = function mergeOptions(options) {
  var addedTypes = {};
  var mergedOption = {
    parsers: [],
  };

  options.forEach(function (option) {
    if (option.call) {
      option = option.call();
    }

    if (option.parsers) {
      option.parsers.forEach(function (p) {
        if (!addedTypes[p.constructor]) {
          mergedOption.parsers.push(p);
          addedTypes[p.constructor] = true;
        }
      });
    }

    // if (option.refiners) {
    //   option.refiners.forEach(function (r) {
    //     if (!addedTypes[r.constructor]) {
    //       mergedOption.refiners.push(r);
    //       addedTypes[r.constructor] = true;
    //     }
    //   });
    // }
  });

  return mergedOption;
};

exports.casualOption = function casualOption() {
  return exports.mergeOptions([exports.en.casual]);
};

exports.en = function en(config) {
  return {
    parsers: [],
  };
};

exports.en.casual = function (config) {
  config = config || {};
  config.strict = false;
  var option = exports.en(config);

  // en
  option.parsers.unshift(new parser.ENWeekdayParser());
  return option;
};
