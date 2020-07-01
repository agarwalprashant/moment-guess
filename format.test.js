// const guessFormat = require('./index');
const guessFormat = require('./src/guessFormat');
// import guessFormat from './src/guessFormat';
describe('guess the english format', function () {
  test('guess the ISO 8601 format', () => {
    // var t = guessFormat('2020-06-23T00:20:49+05:30');
    // expect(t).toBe('YYYY-MM-DDTHH:mm:ssZ');
    // var t = guessFormat('2020-10-10');
    // expect(t).toBe('YYYY-MM-DD');
  });

  test('guess the RFC 2822 format', () => {
    // var t = guessFormat('6 Mar 17 21:22 UT');
    // expect(t).toBe('D MMM YY HH:mm ZZ');
    // var t = guessFormat('Mon, 06 Mar 2017 21:22:23 +0000');
    // expect(t).toBe('ddd, DD MMM YYYY HH:mm:ss ZZ');
  });

  test('guess the weekday format', () => {
    // var momentGuessOutputTobeFedInFormat = guessFormat('wed');
    // var momentGuessOutputTobeFedInFormat = guessFormat('Mond'); //yahan fatega becoz Mond is not a valid wekkday
    // var momentGuessOutputTobeFedInFormat = guessFormat('we'); //! TODO yahan fatega .... moment gives output 'dd' for 2 letters name but our code does not
    var momentGuessOutputTobeFedInFormat = guessFormat('monday');
    console.log(momentGuessOutputTobeFedInFormat);
  });
});
