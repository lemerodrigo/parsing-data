const data = require('./data.js');

// Returns an array of titles that are not in English
// field: language
function getAllNonEnglishTitles() {
  const nonEnglish = data.filter(movie => movie.language !== 'English');
  return nonEnglish;
}

// Returns an array with title names of titles
// that lasts more than 2 hours and a half.
// field: duration
function titlesWithMoreThan2HoursAndAHalf() {
  const moreThan = data.filter(movie => movie.duration > 150);
  return moreThan;
}

// Returns an array of all Countries that have produced titles.
// field: country
function allCountries() {
  const countries = [];
  data.map((movie) => {
    if (!countries.includes(movie.country)) countries.push(movie.country);
    return null;
  });
  return countries;
}

// Returns an array of titles name with the top ten titles
// field: imdb_score
function topTenTitles() {
  const newData = [...data];
  newData.sort((a, b) => b.imdb_score - a.imdb_score);
  return newData.splice(0, 9);
}

// Returns the number of titles that were launched in 2015.
// field: title_year
function titlesFrom2015() {
  let movies2015 = 0;
  data.map((movie) => {
    if (movie.title_year === 2015) movies2015 += 1;
    return null;
  });
  return movies2015;
}

