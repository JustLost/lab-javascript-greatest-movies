// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((movie) => movie.director);
  //return allDirectors
  let uniqueDirectors = [...new Set(movies.director)];
  return uniqueDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaMovies = movies.filter((drama) => {
    return (
      drama.genre.includes('Drama') && drama.director === 'Steven Spielberg'
    );
  });
  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scores) {
  if (scores.length === 0) {return 0;}
  let newScores = scores.map((score) => {if (score === undefined) {return 0} else {return score}} );
  let averageScore = newScores.reduce((acc, value) => acc + value, 0);
    //return averageScore.toFixed(2)
  return Math.round((averageScore / scores.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((drama) => (drama.genre.includes('Drama')));
  let dramaScores = dramaMovies.map((movie) => movie.score)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let orderAlpha = movies.sort((a, b) => {return a.title.localeCompare(b.title)})
  let order = orderAlpha.sort((a, b) => a.year - b.year);
  return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let orderAlpha = movies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return orderAlpha
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
