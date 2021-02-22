const data = require('./data.js');

// Returns an array of titles that are not in English
// field: language
function getAllNonEnglishTitles() {
  let newArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].language !== 'English') {
      newArray.push(data[i]);
    }
  }
}

console.log(getAllNonEnglishTitles());
console.log(data[0].language);

// Returns an array with title names of titles
// that lasts more than 2 hours and a half.
// field: duration
function titlesWithMoreThan2HoursAndAHalf() {

}

// Returns an array of all Countries that have produced titles.
// field: country
function allCountries() {

}

// Returns an array of titles name with the top ten titles
// field: imdb_score
function topTenTitles() {

}

// Returns the number of titles that were launched in 2015.
// field: title_year
function titlesFrom2015() {
  
}