import HomeNavBar from '../Header/NavBar'
import { useState, useEffect, useRef } from 'react'
import { fetchTrendingMoviesWeek,fetchTrendingTvWeek,
   fetchTrendingDay, fetchTrendingWeek } from '../../services/tmdbServices'


function Trendings() {

  // states 
  const [trendingMoviesWeek, setTrendingMoviesWeek] = useState([])
  const [trendingTvWeek, setTrendingTvWeek] = useState([])
  const [trendingDay, setTrendingDay] = useState([])
  const [trendingweek, setTrendingWeek] = useState([])

  const [movieTrendActive, setMovieTrendActive] = useState(true)
  const [tvTrendActive, setTvTrendActive] = useState(false)
  const [dayTrendActive, setDayTrendActive] = useState(false)
  const [weekTrendActive, setWeekTrendActive] = useState(false)
  
  //managing ref states
  const movieWeekRef = useRef(null)
  const tvWeekRef = useRef(null)
  const dayRef = useRef(null)
  const weekRef = useRef(null)
  

  // side effects to call fetch functions data 
  useEffect(()=> {
    getMoviesTrendWeek()
    getTvTrendWeek()
    getAllTrendsDay()
    getAllTrendsWeek()
  },[])

  
  // functions to fetch data
  const getMoviesTrendWeek = async () => {
        try {
          await fetchTrendingMoviesWeek()
                .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
              }).then(data => { setTrendingMoviesWeek(data['results']) })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
      }
   }


  const getTvTrendWeek = async () => {
        try {
          await fetchTrendingTvWeek()
                .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
              }).then(data => { setTrendingTvWeek(data['results']) })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
      }
   }

  const getAllTrendsDay = async () => {
        try {
          await fetchTrendingDay()
                .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
              }).then(data => { setTrendingDay(data['results']) })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
      }
   }

  const getAllTrendsWeek = async () => {
        try {
          await fetchTrendingWeek()
                .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
              }).then(data => { setTrendingWeek(data['results']) })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
      }
   }

   // function to handle which data block show using navbar

   const showMovieTrends = ()=> {
    movieWeekRef.current.className = 'flex flex-wrap gap-5 animate-fadeIn'
    tvWeekRef.current.className = 'hidden'
    dayRef.current.className = 'hidden'
    weekRef.current.className = 'hidden'
    setMovieTrendActive(true)
    setTvTrendActive(false)
    setDayTrendActive(false)
    setWeekTrendActive(false)
   }

   const showTvTrends = ()=> {
    movieWeekRef.current.className = 'hidden'
    tvWeekRef.current.className = 'flex flex-wrap gap-5 animate-fadeIn'
    dayRef.current.className = 'hidden'
    weekRef.current.className = 'hidden'
    setMovieTrendActive(false)
    setTvTrendActive(true)
    setDayTrendActive(false)
    setWeekTrendActive(false)
   }

   const showDayTrend = ()=> {
    movieWeekRef.current.className = 'hidden'
    tvWeekRef.current.className = 'hidden'
    dayRef.current.className = 'flex flex-wrap gap-5 animate-fadeIn'
    weekRef.current.className = 'hidden'
    setMovieTrendActive(false)
    setTvTrendActive(false)
    setDayTrendActive(true)
    setWeekTrendActive(false)
   }

   const showWeekTrend = ()=> {
    movieWeekRef.current.className = 'hidden'
    tvWeekRef.current.className = 'hidden'
    dayRef.current.className = 'hidden'
    weekRef.current.className = 'flex flex-wrap gap-5 animate-fadeIn'
    setMovieTrendActive(false)
    setTvTrendActive(false)
    setDayTrendActive(false)
    setWeekTrendActive(true)
   }


  
    
  return (
    <div>
      <HomeNavBar />
      <div>
        <div className='grid gap-5 m-10 grid-cols-5 max-[850px]:flex max-[850px]:flex-col'>

            {/* sideBar */}
          <div className='col-span-1 border drop-shadow-sm shadow-lg rounded-xl overflow-hidden h-72' >
            <div className=''>
              <h2 className='bg-blue-500 text-white text-xl font-poppins px-4 py-2'>Trendings </h2>
              <h3 className='bg-gray-300 p-2 text-base'>Show Type</h3>
              <ul className='text-sm'>
                 <li className={`px-4 py-2 hover:bg-green-300 cursor-pointer ${movieTrendActive ? 'bg-blue-950 text-red-400 transition-all duration-500' : ''}`} onClick={showMovieTrends}>Movies</li>
                 <li className={`px-4 py-2 hover:bg-green-300 cursor-pointer ${tvTrendActive ? 'bg-blue-950 text-red-400 transition-all duration-500' : ''}`} onClick={showTvTrends}>TV shows</li>
              </ul>
              <h3 className='bg-gray-300 p-2 text-base'>Time</h3>
              <ul className='text-sm'>
                 <li className={`px-4 py-2 hover:bg-green-300 cursor-pointer ${dayTrendActive ? 'bg-blue-950 text-red-400 transition-all duration-500' : ''}`} onClick={showDayTrend}>Trending Today</li>
                 <li className={`px-4 py-2 hover:bg-green-300 cursor-pointer ${weekTrendActive ? 'bg-blue-950 text-red-400 transition-all duration-500' : ''}`} onClick={showWeekTrend}>Trending This Week</li>
              </ul>  
            </div>
          </div>

            {/* body */}
          <div className='col-span-4'>
            <div>
                {/* Trending Movies block */}
               <div className='hidden flex-wrap gap-5 ' ref={movieWeekRef}>
                {trendingMoviesWeek.map((movie)=> (        
                   <div key={movie.id}>
                     <div className='flex border w-[540px] rounded-xl overflow-hidden drop-shadow-md shadow-md'>
                       <div className=''>
                          <img className='w-36'
                               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/> 
                       </div>
                        <div className='flex flex-col m-2'>
                          <div className=''>
                             <h2 className=' float-left text-base w-60 font-sans font-semibold'>{movie.title || movie.name}</h2>
                             <h2 className=' float-right mr-3 font-chivo bg-blue-900 text-white px-2 mt-1 rounded-xl'>{movie.release_date || movie.first_air_date}</h2>
                          </div>                        
                          <div className='flex items-center'>
                             <div className=' bg-blue-300 text-center p-1.5 mt-1 mr-1 rounded-full text-sm '>{(movie.vote_average).toFixed(2)}</div>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f4db39" className="size-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                             </svg>
                          </div>
                          <span className='text-sm mt-3'>{movie.overview.substr(0,90)}...</span>
                        </div>
                      </div>
                    </div>           
                 ))}
               </div>

               {/* Trending Tv block */}
               <div className='hidden flex-wrap gap-5' ref={tvWeekRef}>
                {trendingTvWeek.map((series)=> (              
                  <div key={series.id}>
                    <div className='flex border w-[540px] rounded-xl overflow-hidden drop-shadow-md shadow-md'>
                       <div className=''>
                          <img className='w-36'
                               src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}/> 
                       </div>
                       <div className='flex flex-col m-2'>
                         <div className=''>
                           <h2 className=' float-left text-base w-60 font-sans font-semibold'>{series.title || series.name}</h2>
                           <h2 className=' float-right mr-3 font-chivo bg-blue-900 text-white px-2 mt-1 rounded-xl'>{series.release_date || series.first_air_date}</h2>
                         </div>                        
                         <div className='flex items-center'>
                            <div className=' bg-blue-300 text-center p-1.5 mt-1 mr-1 rounded-full text-sm '>{(series.vote_average).toFixed(2)}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f4db39" className="size-6">
                               <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                         </div>
                         <span className='text-sm mt-3'>{series.overview.substr(0,90)}...</span>
                       </div>
                    </div>
                  </div>
              
                 ))}
               </div>

               {/* trending All Day */}
               <div className='hidden flex-wrap gap-5' ref={dayRef}>              
                {trendingDay.map((movie)=> (                
                   <div key={movie.id}>
                     <div className='flex border w-[540px] rounded-xl overflow-hidden drop-shadow-md shadow-md'>
                       <div className=''>
                          <img className='w-36'
                               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/> 
                       </div>
                       <div className='flex flex-col m-2'>
                         <div className=''>
                           <h2 className=' float-left text-base w-60 font-sans font-semibold'>{movie.title || movie.name}<span className='ml-3 border-2 border-green-200 uppercase text-sm p-1'>{movie.media_type}</span></h2>
                           <h2 className=' float-right mr-3 font-chivo bg-blue-900 text-white px-2 mt-1 rounded-xl'>{movie.release_date || movie.first_air_date}</h2>
                         </div>                        
                         <div className='flex items-center'>
                            <div className=' bg-blue-300 text-center p-1.5 mt-1 mr-1 rounded-full text-sm '>{(movie.vote_average).toFixed(2)}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f4db39" className="size-6">
                               <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                         </div>
                         <span className='text-sm mt-3'>{movie.overview.substr(0,90)}...</span>
                       </div>
                    </div>
                  </div>
             
                 ))}
               </div>

               {/* trending All week */}
               <div className='flex flex-wrap gap-5' ref={weekRef}>
                {trendingweek.map((movie)=> (            
                   <div key={movie.id}>
                     <div className='flex border w-[540px] rounded-xl overflow-hidden drop-shadow-md shadow-md'>
                       <div className=''>
                          <img className='w-36'
                               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/> 
                       </div>
                       <div className='flex flex-col m-2'>
                         <div className=''>
                           <h2 className=' float-left text-base w-60 font-sans font-semibold'>{movie.title || movie.name}<span className='ml-3 border-2 border-green-200 uppercase text-sm p-1'>{movie.media_type}</span></h2>
                           <h2 className=' float-right mr-3 font-chivo bg-blue-900 text-white px-2 mt-1 rounded-xl'>{movie.release_date || movie.first_air_date}</h2>
                         </div>                        
                         <div className='flex items-center'>
                            <div className=' bg-blue-300 text-center p-1.5 mt-1 mr-1 rounded-full text-sm '>{(movie.vote_average).toFixed(2)}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f4db39" className="size-6">
                               <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                         </div>
                         <span className='text-sm mt-3'>{movie.overview.substr(0,90)}...</span>
                       </div>
                     </div>
                   </div>      
                 ))}
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Trendings