const data = require('./data.js');

// Returns an array of titles that are not in English
// field: language
function getAllNonEnglishTitles() {
  return data.map((eachData) => {
    if (eachData.language !== 'English') return eachData;
  });
}

// Returns an array with title names of titles
// that lasts more than 2 hours and a half.
// field: duration
function titlesWithMoreThan2HoursAndAHalf() {
  return data.map((eachData) => {
    if(eachData.duration > 150)
      return eachData.movie_title;
  });
}

// Returns an array of all Countries that have produced titles.
// field: country
function allCountries() {
  let countries = [];
  data.forEach((eachData) => {
    // find country
    countries.push(eachData.country);
  });
  return countries;
}

// Returns an array of titles name with the top ten titles
// field: imdb_score
function topTenTitles() {
  return data.sort((a, b) => {
    return a > b ? 1 : -1;
  }).slice(0, 9);

}

// Returns the number of titles that were launched in 2015.
// field: title_year
function titlesFrom2015() {
  return data.map((eachData) => {
    if(eachData.title_year === 2015)
      return eachData;
  });
}

console.log(allCountries())