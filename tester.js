const MovieParser = require('./index');
const testData = require('./testData');

const parser = new MovieParser;

// console.log('#1: ', parser.getAllNonEnglishTitles(testData));
// console.log('#2: ', parser.titlesWithMoreThan2HoursAndAHalf(testData));
// console.log('#3: ', parser.allCountries(testData));
console.log('#4: ', parser.topTenTitles(testData));
// console.log('#5: ', parser.titlesFrom2015(testData));

