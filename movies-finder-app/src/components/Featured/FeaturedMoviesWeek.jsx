import React, { useEffect, useState } from 'react'
import moviesData from '../../data/movies2.json'
import MovieCard from './MovieCard';


function FeaturedMoviesWeek() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(moviesData)
    
  },[])

  return (

    <div id='slider'>
      <div id='movie-gallary' className='flex items-center overflow-x-scroll mt-8 snap-x snap-mandatory backdrop-blur-lg '>
        
        {movies.map(movie =>
          <div id='movie-item'
               className='snap-center' 
               key={movie.imdbID} >  
            <MovieCard movie={movie}/>     
          </div>
        )}
      </div>
    </div>

  )
}

export default FeaturedMoviesWeek