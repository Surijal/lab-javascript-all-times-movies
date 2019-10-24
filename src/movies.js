/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (arrayMovies){
    var  arrayMovieLength  = 0;
    const average = arrayMovies.reduce( function (total, currentNum) {
        
        

        if (!(isNaN(currentNum.rate) ) ) {
          //&& (currentNum.genre.includes('Drama'))
            
            let updatedAccumulator = total + currentNum.rate;
            
            
            arrayMovieLength++;
            console.log(currentNum.title);
            return (updatedAccumulator);
           
        }  else {
            return 0;
        }
        
        
        // same as acummulator = accumulator + currentNum
    }, 0);
    if (arrayMovieLength ===0 ) {
        return undefined;
    }
    return parseFloat((average/arrayMovieLength).toFixed(2));
}

function dramaMoviesRate (arrayMovies){
    var  arrayMovieLength  = 0;
    const average = arrayMovies.reduce( function (total, currentNum) {
        
        

        if (!(isNaN(currentNum.rate) )&& (currentNum.genre.includes('Drama')) ) {
            
            let updatedAccumulator = total + currentNum.rate;
            
            
            arrayMovieLength++;
            console.log(currentNum.title);
            return (updatedAccumulator);
           
        }  else {
            return 0;
        }
        
        
        // same as acummulator = accumulator + currentNum
    }, 0);
    if (arrayMovieLength ===0 ) {
        return undefined;
    }
    return parseFloat((average/arrayMovieLength).toFixed(2));
}




//console.log("Final result" + dramaMoviesRate(movies));
// Get the average of Drama Movies


// Order by time duration, in growing order

function orderByDuration ( a, b ) {
    if ( a.movies.duration > b.movies.duration ){
      return -1;
    }
    if ( a.movies.duration < b.movies.duration ){
      return 1;
    }
    return 0;
  }
  
 movies.duration.sort( orderByDuration );



// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesList) {
    let directorMovies = moviesList.filter(function (element) {
        if (element.director === 'Steven Spielberg' && element.genre.includes('Drama')) {
            return true;
        }else {
            return false;
        }
    });
    return directorMovies.length;
 }
 
 

// Order by title and print the first 20 titles

//movies.name.sort();


	// order formula


function orderAlphabetically ( movies) {
    
    
  }
  
 movies.name.sort( orderAlphabetically );

 

 


// Best yearly rate average
