import React, { useEffect, useState } from 'react'
import PagesNavBar from '../PagesNavBar'

function MovieDetails() {

  const [tmdbData, setTmdbData] = useState('')
  const [rottenScore, setRottenScore] = useState('')
  const movie = JSON.parse(localStorage.getItem('viewedMovie'))
  
  useEffect(()=> { 
      let rottenValue = movie.Ratings.filter((rate) => rate.Source === 'Rotten Tomatoes')[0]
      if (rottenValue) {
            setRottenScore(rottenValue.Value)
        } else {
            setRottenScore('N/A')
        }       
  })
   

  return (
    <div>
        <PagesNavBar />   
        <div>             
          <div>
              <div id='background' className='flex drop-shadow-xl justify-center relative'>
                 <img className='w-full h-[600px] justify-center opacity-20 blur-sm' src={movie.Poster} />
              </div>

              <div className='flex justify-around text-white absolute top-28 mx-10'>
                  <div className='flex flex-col'>
                      <img className='shadow-xl w-[400px] h-[450px] rounded-t-lg' src={movie.Poster} />
                      <h3 className='bg-blue-950 h-10 text-center items-center pt-1.5 rounded-b-lg opacity-80'>{movie.Released}</h3>
                  </div>


                <div className="flex justify-between">

               
                 <div className='ml-7 mt-3'>
                    <div className='flex mb-1 items-baseline'>
                        <h2 className='text-3xl font-nunito uppercase font-semibold'>{movie.Title}</h2>
                        <h2 className='text-lg mx-2'>{movie.Year}</h2>                     
                    </div>

                  <div className='flex items-baseline mt-3'>
                     <span className='font-thin uppercase border p-1 hover:bg-teal-600'>{movie.Type}</span>
                     <span className='border text-gray-900 py-1 px-2 mr-1 bg-yellow-500 ml-3'>{movie.Rated}</span>
                     <span className='block ml-2 text-sm'>{movie.Genre}</span>
                     
                  </div>
                          
                  <div className='flex items-center mt-8'>

                               {/* rotten score  */}
                    <img className='w-10 ' src='../src/assets/tomato.png'/>
                    <div className='container w-16  mr-5'>
                      <div className='progress' style={{ "--i": Number(rottenScore.replace('%','')),"--clr": '#43f94a' }}>
                        <h3 className='absolute top-[35%] left-[25%] text-xs z-10  font-semibold'>{rottenScore}</h3>
                      </div>
                    </div>   
                             {/* meta score  */}

                     <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-yellow-400" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>    
                    </div>      
                    
                    <div className='container w-16'>
                      <div className='progress' style={{ "--i": 0||movie.Metascore,"--clr": '#43f94a' }}>
                        <h3 className='absolute top-[35%] left-[30%] text-xs z-10  font-semibold'>{movie.Metascore}</h3>
                      </div>
                    </div>   

                           {/* imdb score  */}                                     
                    <img className='w-7 mx-2 ml-8' src='../src/assets/IMDB.png'/>
                    <div>
                      <span>{movie.imdbRating}</span>
                    </div> 
                                                                               
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

                          {/* Icons part ---end---- */}

                  <div className='mt-6'>
                    <h2 className='font-poppins font-semibold text-lg'>Cast</h2>
                    <h3>{movie.Actors}</h3>
                  </div>  

                  <div className='mt-4'>
                    <h2 className='text-xl font-poppins font-semibold'>Director</h2>
                    <h3>{movie.Director}</h3>
                  </div>

                  <div className='mt-4'>
                    <h2 className='text-xl font-poppins font-semibold'>Overview</h2>
                    <h2 className='font-nunito'>{movie.Plot}</h2>
                  </div>  
                </div> 
               </div>  
              </div>
          </div>         
       
        </div>
  
      {/* <img src={`https://image.tmdb.org/t/p/w500/p6ZP3Humvo90UXkDeEv5x9aynNH.jpg`}/> */}
    </div>
  )
}

export default MovieDetails