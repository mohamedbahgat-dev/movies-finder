import React, { useEffect, useState, useRef } from 'react'
import moviesData from '../movies.json'
import MovieCard from './MovieCard';


function MoviesCard() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(moviesData)
  })


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