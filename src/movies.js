// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function (movies) {
    return movies.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //   if (moviesArray.length === 0) {
  //     return 0;
  //   }
  let spielbergSteve = moviesArray.filter(
    (movies) =>
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );
  return spielbergSteve.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let scoreSum = moviesArray.reduce((sum, movie) => {
    sum + movie.score, 0;
    if ("score" in movie) {
      return sum + movie.score;
    } else return sum;
  }, 0);

  let rawScore = scoreSum / moviesArray.length;
  let roundedScore = Math.round(rawScore * 100) / 100;

  return roundedScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movies) =>
    movies.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  let dramaSum = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  let roundSum = dramaSum / dramaMovies.length;
  return Math.round(roundSum * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newMovieArray = [];
  moviesArray.map(function (movies) {
    newMovieArray.push(movies);
  });
  let ascendingByYear = newMovieArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return ascendingByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
