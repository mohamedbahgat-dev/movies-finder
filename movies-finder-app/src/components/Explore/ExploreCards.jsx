import { fetchUpcomingMovies, fetchTopRatedMovies, fetchTopRatedTv} from '../../services/tmdbServices'
import { useState, useEffect, useRef } from 'react'
import ExploreCard from './ExploreCard'

function ExploreCards() {
     
    //managing states 
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [topRatedTv, setTopRatedTv] = useState([])


    // managing activity states to navigate through diffrent sections
    const [upcomingActive, setUpcomingActive] = useState(true) 
    const [topRatedMovieActive, setTopRatedMovieActive] = useState(false) 
    const [topRatedTvActive, setTopRatedTvActive] = useState(false) 
  
    // refs to manage events 
    const upcomingRef = useRef()
    const ratedMovieRef = useRef()
    const ratedTvRef = useRef()

    // calling fetch data funcs inside useeffect
    useEffect(()=> {
        getUpcomingMovies()
        getTopRatedMovies()
        getTopRatedTv()
    },[])



    // fetch data from API 
    const getUpcomingMovies = async () => {
        try {
          await fetchUpcomingMovies()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { 
                let upcomming = []
                Array.from(data['results']).forEach((movie)=> {
                  upcomming.push({...movie, media_type:'movie'})
                  setUpcomingMovies(upcomming)
                })
               })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }


    const getTopRatedMovies = async () => {
        try {
          await fetchTopRatedMovies()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { 
                let top = []
                Array.from(data['results']).forEach((movie)=> {
                  top.push({...movie, media_type:'movie'})
                  setTopRatedMovies(top)
                })
               })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }

      const getTopRatedTv = async () => {
        try {
          await fetchTopRatedTv()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { 
                let ratedTv = []
                Array.from(data['results']).forEach((tv)=> {
                  ratedTv.push({...tv, media_type:'tv'})
                  setTopRatedTv(ratedTv)
                })
               })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }

      
    // event functions to manage navigation throught different sections and show different data
    const showUpcomingMovies = ()=>{
      upcomingRef.current.className = 'flex gap-5 mx-5 mt-3  h-[310px] items-center flex-nowrap animate-fadeIn'
      ratedMovieRef.current.className = 'hidden'
      ratedTvRef.current.className = 'hidden'
      setUpcomingActive(true)
      setTopRatedMovieActive(false)
      setTopRatedTvActive(false)
    }

  
    const showTopRatedMovies = ()=>{
      upcomingRef.current.className = 'hidden'
      ratedMovieRef.current.className = 'flex gap-5 mx-5 mt-3  h-[310px] items-center flex-nowrap animate-fadeIn'
      ratedTvRef.current.className = 'hidden'
      setUpcomingActive(false)
      setTopRatedMovieActive(true)
      setTopRatedTvActive(false)
    }

    const showTopRatedTv = ()=>{
      upcomingRef.current.className = 'hidden'
      ratedMovieRef.current.className = 'hidden'
      ratedTvRef.current.className = 'flex gap-5 mx-5 mt-3  h-[310px] items-center flex-nowrap animate-fadeIn'
      setUpcomingActive(false)
      setTopRatedMovieActive(false)
      setTopRatedTvActive(true)
    }


  return (
    <div> 
        <div>
              {/* section header */}
            <div className='flex mt-5'>
                 <span className='ml-[120px] font-poppins text-xl'>Explore Now</span>
                 <div className=' flex items-center justify-between ml-8 w-[450px] text-base border-2 font-semibold rounded-3xl border-cyan-200'>
                    <button className= {`px-[18px] rounded-2xl ${upcomingActive ? ' text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showUpcomingMovies}
                            >Upcoming
                     
                    </button>
                    <button className={`px-[16px] rounded-2xl ${topRatedMovieActive ?  ' text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showTopRatedMovies}
                            >Top Rated Movies
                    </button>
                    <button className={`px-[16px] rounded-2xl ${topRatedTvActive ?  'text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showTopRatedTv}
                            >Top Rated TV
                    </button>
                </div>    
            </div>

            {/* cards area start */}
            <div className='w-full h-[380px] items-center overflow-x-scroll border-x-[50px] border-x-transparent'>
                <div className='flex gap-5 mx-5 items-center h-[310px] flex-nowrap' ref={upcomingRef}>
                    {upcomingMovies.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <ExploreCard movie={movie} />
                            </div>                           
                        </div>
                    ))}
                </div>
                <div className='hidden gap-5 mx-5 items-center h-[310px] flex-nowrap' ref={ratedMovieRef}>
                    {topRatedMovies.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <ExploreCard movie={movie} />
                            </div>               
                        </div>
                    ))}
                </div>
                <div className='hidden gap-5 mx-5 items-center h-[310px] flex-nowrap' ref={ratedTvRef}>
                    {topRatedTv.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <ExploreCard movie={movie} />
                            </div>               
                        </div>
                    ))}
                </div>
            </div>
        </div>


    </div>
  )
}

export default ExploreCards