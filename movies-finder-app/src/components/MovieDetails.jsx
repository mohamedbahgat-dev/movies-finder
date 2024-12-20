import React, { useEffect, useState } from 'react'
import { useMovieStore } from '../store/moviesStore'
import { useMessageStore } from '../store/useMessageStore'
import { useParams } from 'react-router-dom'
import { fetchTmdbByimdbId } from '../services/tmdbServices'


function MovieDetails() {

  const [tmdbData, setTmdbData] = useState('')
  const [rottenScore, setRottenScore] = useState('')

  const movies = useMovieStore(state => state.movies)
  const movieId = useParams()

  
  // const getMovieData = async () => {
  //   try {
  //     await fetchTmdbByimdbId(movieId.movieId)
  //           .then(response => {
  //             if (!response.ok) {
  //               useMessageStore.getState().setMessage('Movie not found', 'Error')
  //             }
  //             return response.json()

  //           }).then(data => { setTmdbData(data['movie_results']) })       
  //   }catch (error){
  //     useMessageStore.getState().setMessage('Error fetching data', 'Error')
  //   }
  // } 
  
  // useEffect(()=> {
  //    getMovieData()
  // },[])

  useEffect(()=> {
      Array.from(movies).map((movie)=> {
      let rottenValue = movie.Ratings.filter((rate) => rate.Source === 'Rotten Tomatoes')[0]
      if (rottenValue) {
            setRottenScore(rottenValue.Value)
        } else {
            setRottenScore('N/A')
        }
    })
        
  })
   
  console.log(typeof Number(rottenScore.replace('%','')))

  return (

    <div>
      {Array.from(movies).map((movie)=> (
        <div key={movie.imdbID}>
          {movie.imdbID === movieId.movieId && 

          <div>
              <div id='background' className='flex drop-shadow-xl justify-center relative'>
                 <img className='w-full h-[600px] justify-center opacity-40 blur-[6px]' src={movie.Poster} />
              </div>
              <div className='flex justify-around text-white absolute top-36 mx-10'>
                <div className='flex flex-col'>
                   <img className='shadow-xl rounded-t-lg' src={movie.Poster} />
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
                    <img className='w-7 mx-2 ml-8' src='../src/assets/IMDb.png'/>
                    <div>
                      <span>{movie.imdbRating}</span>
                    </div>                                                            
                  </div> 

                  <div className='flex items-center mt-10'>
                    <span className='border p-1 mr-4 bg-gray-500'>{movie.Rated}</span>
                    <span className='border p-1 mr-4'>{movie.Language}</span>
                    <span className='border p-1'>{movie.Country}</span>
                  </div>

                  <div className='mt-8'>
                    <h2 className='font-poppins font-semibold text-lg'><i>Cast</i></h2>
                    <h3>{movie.Actors}</h3>
                  </div>  

                  <div className='mt-5'>
                    <h2 className='font-poppins font-semibold text-lg'><i>Director</i></h2>
                    <h3>{movie.Director}</h3>
                  </div>
                </div> 
              </div> 

              <div className='bg-teal-600 opacity-65 rounded-xl w-96 h-48 ml-12 mt-32 p-5'>
                <h1 className='mb-2 text-xl font-poppins font-semibold'>Overview</h1>
                <h2 className='font-nunito'>{movie.Plot}</h2>
              </div>             
              </div>
          </div>         
          }
        </div>
      ))}
      {/* <img src={`https://image.tmdb.org/t/p/w500${tmdbData[0]}`}/> */}
    </div>
  )
}

export default MovieDetails