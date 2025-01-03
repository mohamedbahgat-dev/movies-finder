import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moviesGenre from '../../data/moviesGenre.json'
import tvGenre from '../../data/tvGenre.json'
import PagesNavBar from '../PagesNavBar'


function ShowDetails() {

   // managing states and extracting user movies choice to show details
  const movieId = useParams()
  const movies = JSON.parse(localStorage.getItem('search-results'))
  const movie = movies.filter((movie)=> movie.id == movieId.movieId)[0]

  // managing movies genres and extract it from its own files 
  const [genre, setGenre] = useState('')
  const movieGenres = moviesGenre.genres
  const tvGenres = tvGenre.genres

  // call genre extraction func inside useeffect
  useEffect(()=>{
    getGenre()
  },[])

  // function to extract movies and tv genres
  const getGenre = ()=> {
      let extractGenre = []           
      if (movie.media_type === 'movie'){
          for (let genre of movieGenres){
            for (let id of movie.genre_ids){
              if(genre.id === id){
                extractGenre.push(genre.name)
              }}}
              
      }else if (movie.media_type == 'tv') {
          for (let genre of tvGenres){
            for (let id of movie.genre_ids){
              if(genre.id === id){
                extractGenre.push(genre.name)
              }}}
      }
      setGenre(extractGenre)
  }

  return (

   <>
      <PagesNavBar />
        <div>
             {/* background --start-- */}
           <div id='show-background' className='relative'>
              <img className='w-full h-[650px] max-[650px]:h-[880px] justify-center opacity-20' 
                   src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} />
           </div>
  
              {/* data container --starts-- */}
               <div className=' flex items-center absolute top-32 left-10 text-white max-[650px]:flex-col max-[650px]:w-72 max-[650px]:h-64 md:left-2'>
                      {/* poster image */}
                    <div className=' max-[650px]:ml-36 max-[650px]:w-48 max-[650px]:h-64 sm:w-56 sm:mt-8 md:ml-20 md:w-64 md:h-96 md:mt-0 lg:w-80 lg:h-[480px] lg:mt-0 ' >
                        <img className='shadow-xl w-[300px] h-[400px] max-[650px]:h-[250px] max-[650px]:w-[360px] md:w-[450px] md:h-[400px] lg:h-[500px] rounded-t-lg'
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <h3 className='bg-blue-950 h-10 text-center items-center pt-1.5 rounded-b-lg opacity-80'>{movie.release_date || movie.first_air_date}</h3>
                    </div>                 
                         {/* main data block */}
                    <div className='ml-10 relative max-[650px]:ml-44 max-[650px]:mt-12  sm:mt-8 md:mt-16'> 

                           {/* title, type and generes block */}
                        <h2 className='text-3xl font-popins uppercase font-semibold'>{movie.title || movie.name}</h2> 
                        <div className='flex mt-5 items-center'>
                            <span className='inline-block uppercase border p-1'>{movie.media_type}</span>
                            <div className='ml-3 px-2 py-0.5 font-thin'>
                              {genre.length != 0 ? 
                                 <div className='place-items-center'>{`${genre[0]}& ${genre[1]}, ${genre[2]}`}</div>  
                                 :<span></span>}
                            </div>
                        </div>

                           {/* scores and movie evaluation block */}
                        <div className='flex items-center '>
                           <div className='score-container w-14 mt-10 '>
                              <div className='score-progress text-center' style={{ "--i": movie.vote_average,"--clr": '#43f94a' }}>
                                  <h3 className='absolute top-4 w-10 left-1 text-center text-[12px] z-10  font-semibold'>{Math.round(movie.vote_average * 10)}<small>%</small></h3>
                              </div>
                           </div>
                            <h2 className='mt-8 ml-4 text-md'>Users Score</h2>
                            <div className='flex items-center justify-center w-12 h-12 ml-5 mr-5 mt-10 rounded-full border-4 border-[#43f94a] bg-[#4d4c4c]'>
                              <span className='text-xs font-bold'>{Math.round(movie.popularity)}</span>
                            </div>
                             <span className='mt-8 text-md'>Popularity Score</span>
                            
                        </div>

                                                                                        {/* Icons part --start---- */}
                      <div className='flex items-center mt-8'>
                               {/* mylist icon */}
                          <div className='bg-teal-600 p-2 mr-3 rounded-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                  <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                              </svg>
                          </div>
                              
                                {/* Favorites icon */}
                          <div className='bg-teal-600 p-2 mr-3 rounded-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                              </svg>
                          </div>

                              {/* Watch list  */}
                          <div className='bg-teal-600 p-2 mr-3 rounded-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                              </svg>
                          </div>

                             {/* play trailer */}
                          <div className='flex p-3 rounded-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                              </svg>
                              <span className='ml-2'>Play Trailer</span>
                          </div>
                      </div>
                                                                                 {/* Icons part ----end----- */}
                             {/*movie overview part  */}
                      <div className='flex flex-col items-start'>
                         <span className='mt-5 text-xl font-poppins'>Overview</span>
                         <span className='w-[800px] mt-4 max-[650px]:w-[400px] sm:w-96 md:w-[500px] '>{movie.overview}</span>
                      </div>  
               </div>          
           </div> 
                       {/* Data container --ends-- */}
       </div>
    </>
  )
}

export default ShowDetails