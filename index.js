const data = require('./data.js');

// Returns an array of titles that are not in English
// field: language
function getAllNonEnglishTitles() {
return data.filter(movie => movie.language !== 'English');
}

// Returns an array with title names of titles
// that lasts more than 2 hours and a half.
// field: duration
function titlesWithMoreThan2HoursAndAHalf() {
  return data.filter(movie => movie.duration >= 160);
}

// Returns an array of all Countries that have produced titles.
// field: country
function allCountries() {
  arrCountries = [];
  data.map((movie)=>{
     // if(!arrCounties.includes())
  })

}

// Returns an array of titles name with the top ten titles
// field: imdb_score
function topTenTitles() {
const newData = [...data];
newData.sort((a, b) => b.imdb_score - a.imdb_score);
  return newData.splice(0,9);
}

// Returns the number of titles that were launched in 2015.
// field: title_year
function titlesFrom2015() {
  let movies15 = [];
  data.map((movie)=>{
    if (movie.title_year === 2015){
      movies15++
    }
    return null;
  });
  return movies15;
  
}