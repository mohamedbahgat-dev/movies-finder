import React, { useEffect, useState } from 'react'
import moviesData from '../../data/movies.json'
import MovieCard from './MovieCard';
import { useMovieStore } from '../../store/moviesStore';


function FeaturedMoviesCard() {

  const [movies, setMovies] = useState([])
  


  useEffect(() => {
    setMovies(moviesData)
    useMovieStore.getState().setLibraryMovies(movies)
  },[movies])

  return (

    <div id='slider'>
      <div  className='flex items-center mt-3 overflow-x-scroll snap-x snap-mandatory  backdrop-blur-lg relative'>
        
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