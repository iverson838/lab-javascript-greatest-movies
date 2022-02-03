// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(value) {

  const allDir = movies.map( value => value.director ); 

}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(value) {

  const numberOfMovies = movies.filter((value) =>{
    if( value.genre.includes('Drama') && value.director.includes('Steven Spielberg')){
      return true;
    } else {
      return false;
    }
   
   
   }).length;

  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  
  

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {

  let orderYear = [];

  orderYear = movie.sort((x,y) =>{
    return x.year- y.year;
  })

  return orderYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {

  
  
  const orderTitle = movies.sort((a,b) => {
    if (a.title > b.title){
      return 1
    }else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });


  const final20 = orderTitle.filter ((title) => {
    return orderTitle.length < 20
  })

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
    bestYearAvg,
  };
}
