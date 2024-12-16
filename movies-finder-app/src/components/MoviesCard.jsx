import React, { useEffect, useState, useRef } from 'react'
import moviesData from '../movies.json'
import MovieCard from './MovieCard';


function MoviesCard() {

  const [movies, setMovies] = useState([])


  // shuffle functions to randomized select movies from the list
  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


  useEffect(() => {
    shuffle(moviesData)
    setMovies(moviesData.slice(1, 6))


  }, [])


  return (

    <div>
      <div id='movie-gallary' className='flex items-center overflow-x-scroll snap-x snap-mandatory backdrop-blur-lg '>
        {movies.map(movie =>
          <div id='movie-item' className='snap-center' key={movie.imdbID}>
            <MovieCard movie={movie} />
          </div>

        )}
      </div>
    </div>

  )
}

export default MoviesCard;