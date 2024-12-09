import React, { useEffect } from 'react'
import { useState, use} from 'react'
import movieData from '../movies.json'




function MovieCard() {
    
    const [movie, setMovie] = useState('')

    useEffect(()=>{
        setMovie(movieData)

    },[])
    
    

  return (
    <div>
        <div>
            <div className='m-10 p-2 text-center w-60 h-96 bg-teal-100 rounded-2xl drop-shadow-lg'>
                <img className='w-60 h-48 object-full rounded-2xl shadow-xl' src={movie.Poster} alt='movie poster' />
                <span className='text-lg inline-block mt-2'>{movie.Title}</span>
                <div className=''>
                    <div className='text-xl font-poppins font-semibold text-gray-800'>{movie.Title}</div>
                    <span className='block'>{movie.Awards}</span>
                    <div className='flex justify-around flex-nowrap'>
                        <span className='text-xs'><span className='text-sm'>RotenTomatto </span></span>
                        <span className='text-xs'><span className='text-sm'>IMDB </span>{movie.imdbRating}</span>
                        <div>
                            <span className='text-xs'><span className='text-sm'>BoxOffice </span>{movie.BoxOffice}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard