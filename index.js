const data = require('./data.js');

// Returns an array of titles that are not in English
// field: language
function getAllNonEnglishTitles() {
    let titles = [];
    data.forEach(obj => {
        if (obj.language !== "English") {
            titles.push(obj.movie_title)
        }
    });
    return titles;
}

// Returns an array with title names of titles
// that lasts more than 2 hours and a half.
// field: duration
function titlesWithMoreThan2HoursAndAHalf() {
    let titles = []
    data.forEach(obj => {
        if (obj.duration > 150) {
            titles.push(obj.movie_title)
        }
    });
    return titles;
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
    let count = 0;
    data.forEach(obj => {
        if(obj.title_year === 2015) {
            count += 1
        }
    })
    return count;
}