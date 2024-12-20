import React, { useEffect, useState, useRef } from 'react'
import moviesData from '../../movies.json'
import MovieCard from '../MovieCard';
import { useMovieStore } from '../../store/moviesStore';


function FeaturedMoviesCard() {

  const [movies, setMovies] = useState([])
  


  useEffect(() => {
    setMovies(moviesData)
    useMovieStore.getState().setLibraryMovies(movies)
  },[movies])

  return (

    <div>
      <span className='inline-block ml-10 border-b-4 pb-2 bottom-5 border-b-teal-500'>Featured Movies</span>
      <div id='movie-gallary' className='flex items-center overflow-x-scroll snap-x snap-mandatory backdrop-blur-lg '>
        
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

export default FeaturedMoviesCard;