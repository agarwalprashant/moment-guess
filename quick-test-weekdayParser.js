const guessFormat = require('./dist/bundle');

// original
// moment().format('dddd'); // Wednesday

// usage
// moment().format(guessFormat('Wednesday'));
// moment().format(guessFormat(guessFormat('wed')));

// console.log(guessFormat('Wednesday')); // 'dddd'
// console.log(guessFormat('wed')); // 'dd'
console.log(guessFormat('abc')); // 'dd'

// console.log(guessFormat('we')); //it will break
// console.log(guessFormat('w')); //it will break
// console.log(guessFormat('wedn')); //it will break
// console.log(guessFormat('wedne')); //it will break
// console.log(guessFormat('wednes')); //it will break
