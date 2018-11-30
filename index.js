const data = require('./data.js');

// Returns an array of titles that are not in English
// field: language
function getAllNonEnglishTitles() {

  return data.filter(el => el.language !== 'English').map(e => e.movie_title + e.language);
}
getAllNonEnglishTitles()



// Returns an array with title names of titles
// that lasts more than 2 hours and a half.
// field: duration
function titlesWithMoreThan2HoursAndAHalf() {

  return data.filter(el => el.duration > 150).map(e => e.movie_title + e.duration);

}
titlesWithMoreThan2HoursAndAHalf();

// Returns an array of all Countries that have produced titles.
// field: country
//  !!!!!!!!!!!!!!!!!!!!!!!!! did not understand the query.
// function allCountries() {
//   return data.filter(el => el.movie_title);
// }
console.log(allCountries())
// Returns an array of titles name with the top ten titles
// field: imdb_score
function topTenTitles() {
  return data.filter(el => el.imdb_score > 8).sort((a, b) => (a.imdb_score < b.imdb_score ? 1 : -1)).map(e => e.movie_title + e.imdb_score).slice(0, 10);
}
topTenTitles();
// Returns the number of titles that were launched in 2015.
// field: title_year
function titlesFrom2015() {
  return data.filter(el => el.title_year === 2015).length
}
titlesFrom2015()