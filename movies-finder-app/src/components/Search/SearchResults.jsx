import { useEffect, useState, useRef } from 'react'
import { fetchTmdbQuery } from '../../services/tmdbServices'
import { Link } from 'react-router-dom'
import HomeNavBar from '../Header/NavBar'


function SearchResults() {

  // managing states for show search results and user input term 
  const [movies, setMovies ] = useState([])
  const [term, setTerm] = useState('')
  
  // managing side effect for saving last search results made by user
  useEffect(()=> {
    setMovies(JSON.parse(localStorage.getItem('search-results')))
  },[])

  // fetching queried data from API
  const getMovieData = async () => {
    try {
      await fetchTmdbQuery(term)
            .then(response => {
                  if (!response.ok) {
                  useMessageStore.getState().setMessage('Movie not found', 'Error')
                }
                  return response.json()
          }).then(data => { 
                  setMovies(data['results']) 
                  localStorage.setItem('search-results', JSON.stringify(data['results']))
                })                       
    } catch (error) {
      useMessageStore.getState().setMessage('Movie not found', 'Error')
    }
  }

  // function to handle user input submission that call the fetching function
  const handleSubmit = (e)=> {
    e.preventDefault()
    getMovieData()     
  }

  
  return (
    <div>
       <HomeNavBar />
        <div>
               {/* Search bar --start-- */}
          <div className='border-b justify-between w-screen bg-white h-10'>      
              <form  onSubmit={ handleSubmit} className='flex w-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-2 ml-4">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>

                  <input onKeyDown={(e)=> { setTerm( ()=> e.target.value)}}
                         className=' w-[97%] h-8  placeholder:italic focus:outline-none pl-3' 
                         placeholder='search for movies, tv shows and persons'/>     
             </form>
          </div>
               {/* searchBar --end-- */}
               
               {/* results area --starts-- */}
          <div className='xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-col-2'>
            {movies.map((movie) => (
             <div className='flex m-5 mb-8 border drop-shadow-md rounded-2xl overflow-hidden hover:shadow-lg' key={movie.id}>
                <div>
                    <Link to={`/show/${movie.id}`}>
                      <div className='flex'>    
                        <img className='w-32 h-40 rounded-s-lg border-r-2' src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.profile_path || movie.backdrop_path}`}
                              onError={(e)=> {e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500' }}/>
                        <div className='m-3 flex flex-col' >
                            <span className='block text-start font-poppins font-semibold relative'>{movie.title || movie.original_name}<span className='text-xs border-2 p-1 ml-2 uppercase font-nunito text-gray-500'>{movie.media_type}</span></span> 
                            <span className='text-sm mt-2 text-gray-400' >{movie.release_date || movie.first_air_date}</span>
                            <span className='mt-4 font-chivo text-sm'>{movie.overview ? `${movie.overview.substr(0,150)}...` : 'No much data'}</span>
                        </div>                           
                      </div>  
                    </Link>
                </div>
              </div>
             ))}
           </div> 
              {/* results area --ends--  */}
        </div> 
    </div>
  )
}

export default SearchResults