const data = require('./data.js');

class MoviesParser {
  // Returns an array of titles that are not in English
// field: language
getAllNonEnglishTitles(data) {
  return data.filter(movie => {
    return movie.language.toLowerCase() !== 'english'
  })
}

// Returns an array with title names of titles
// that lasts more than 2 hours and a half.
// field: duration
titlesWithMoreThan2HoursAndAHalf(data) {
  return data.filter(movie => {
    return movie.duration > 150
  }).map(movie => {
    return movie.movie_title
  })
}

// Returns an array of all Countries that have produced titles.
// field: country
allCountries(data) {
  return data.map(movie => {
    return movie.country
  }).filter((country, i, arr) => {
    return arr.indexOf(country) === i
  })
}

// Returns an array of titles name with the top ten titles
// field: imdb_score
topTenTitles(data) {
  return data.sort().slice(data.length-10,10)
}

// Returns the number of titles that were launched in 2015.
// field: title_year
titlesFrom2015(data) {
  return data.filter(movie => {
    return movie.title_year === 2015
  })
}
}

module.exports = MoviesParser;