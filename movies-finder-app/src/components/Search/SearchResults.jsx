import NavBar from '../Header/NavBar'
import React, { useEffect, useState } from 'react'



function SearchResults() {


    const movies =   JSON.parse(localStorage.getItem('search-results'))
   
   
  return (
    <div>

      {movies ?

        <div className='grid grid-cols-2'>

            <div>
               <div>Sidebar </div>
           </div>

            <div>
            {movies.map((movie) => (
            <div className='flex flex-c m-5 mb-8 border bg-gray-100 drop-shadow-md rounded-2xl overflow-hidden' key={movie.id}>
                <div>
                  <div className='flex'>    
                    <img className='w-32 h-40 rounded-s-lg border-r-2' src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.profile_path || movie.backdrop_path}`}
                                                            onError={(e)=> {
                                                                e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500'
                                                            }}/>
                    <div className='m-3 flex flex-col' >
                        <span className='block text-start font-poppins font-semibold relative'>{movie.title || movie.original_name}<span className='text-xs border-2 p-1 ml-2 uppercase font-nunito text-gray-500'>{movie.media_type}</span></span> 
                        <span className='text-sm mt-2 text-gray-400' >{movie.release_date || movie.first_air_date}</span>
                        <span className='mt-4'>{movie.overview ? movie.overview.substr(0,150) : 'No much data'}</span>
                    </div> 
                    
                           
                  </div>  
                </div>
              </div>
            ))}

          </div>
          
           
        </div> 
        

     : <div>Data not Found</div> }
    </div>
  )
}

export default SearchResults