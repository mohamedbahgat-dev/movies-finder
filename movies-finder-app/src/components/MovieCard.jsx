import React, { useEffect } from 'react'
import { useState, use} from 'react'
import movieData from '../movies.json'




function MovieCard() {
    
    const [movie, setMovie] = useState('')
    const [ratings, setRatings] = useState('')
    const [rotten, setRotten] = useState('')
    

    useEffect(()=>{
        setMovie(movieData)
        setRatings(movieData.Ratings) 
        setRotten(movieData.Ratings.filter((rate)=> rate.Source==='Rotten Tomatoes')[0].Value)
    },[])
    
  
  return (
    <div>
        <div>
            <div className='m-10 p-2 text-center w-64 h-[370px] bg-teal-100 rounded-2xl drop-shadow-lg'>
                <img className='w-60 h-80 object-full rounded-2xl shadow-xl' src={movie.Poster} alt='movie poster' />
                <span className='text-lg inline-block mt-2'>{movie.Title}</span>
                <div className='hidden'>
                    <div className=' flex text-start items-center mt-1'>
                       <span className='text-lg my-1 mr-2 font-semibold font-poppins text-gray-800'>{movie.Title}</span>
                       <span className='text-xs font-poppins'>{movie.Type}</span>
                    </div>
                    <span className='block text-[12px] text-start'>{movie.Plot}</span>
                    
                    <div className='flex mt-3'>
                        <div className='flex items-center mr-7'>
                            <img className='w-6 mr-1' src='../src/assets/tomato.png'/>
                            <span className='text-xs font-poppins font-semibold'>{rotten}</span>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-6 mr-1' src='../src/assets/IMDB.png'/>
                            <span className='text-xs font-poppins font-semibold'>{movie.imdbRating}</span> 
                        </div>
                        <div className='m-auto'>
                            <span className='p-2 text-xs text-gray-500'>Year</span>
                            <span className=' text-sm font-poppins'>{movie.Year}</span>
                        </div>
                        
                    </div>
                    <div>
                        <button className='bg-teal-950 text-white w-20 mt-4 p-1 rounded-lg shadow-lg hover:shadow-xl'>Open</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard