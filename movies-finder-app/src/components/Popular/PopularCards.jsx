import React from 'react'
import { fetchPopularMovies, fetchPopularTV } from '../../services/tmdbServices'
import { useState, useEffect, useRef } from 'react'
import PopularCard from './PopularCard'

function PopularCards() {

    const [popularMovies, setPopularMovies] = useState([])
    const [popularTv, setPopularTv] = useState([])

    const [moviesActive, setMoviesActive] = useState(true) 
    const [tvActive, setTvActive] = useState(false) 

    const moviesRef = useRef()
    const tvRef = useRef()


    useEffect(()=> {
        getPopularMovies()
        getPopularTv()
    },[])


    const getPopularMovies = async () => {
        try {
          await fetchPopularMovies()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { 
                let movieData = []
                Array.from(data['results']).forEach((movie)=> {
                  movieData.push({...movie, media_type:'movie'})
                  setPopularMovies(movieData)
                })
               })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }


    const getPopularTv = async () => {
        try {
          await fetchPopularTV()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { 
                  let tvData = []
                  Array.from(data['results']).forEach((tv)=> {
                     tvData.push({...tv, media_type:'tv'})
                     setPopularTv(tvData)
                })

             })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }

    const showMovies = ()=>{
      moviesRef.current.className = 'flex gap-5 mx-5 mt-3 items-center flex-nowrap animate-fadeIn'
      tvRef.current.className = 'hidden'
      setMoviesActive(true)
      setTvActive(false)
    }


    const showTv = ()=> { 
      moviesRef.current.className = 'hidden'
      tvRef.current.className = 'flex gap-5 mx-5 mt-3 items-center flex-nowrap animate-fadeIn'
      setMoviesActive(false)
      setTvActive(true)
    }


  return (
    <div>
        <div>
              {/* section header */}
            <div className='flex mt-6'>
                 <span className='ml-[120px] font-poppins text-xl'>Popular Now</span>
                 <div className=' flex items-center justify-around ml-8 w-36 text-base border-2 font-semibold rounded-3xl border-cyan-200'>
                    <button className= {`px-[18px] rounded-2xl ${moviesActive ?  'text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showMovies}
                            >Movies
                     
                    </button>
                    <button className={`px-[16px] rounded-2xl ${tvActive? 'text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showTv}
                            >Tv
                    </button>
                </div>    
            </div>

            {/* cards area start */}
            <div className='w-full h-[380px] items-center overflow-x-scroll border-x-[50px] border-x-transparent'>
                <div className='flex gap-5 mx-5 items-center flex-nowrap' ref={moviesRef}>
                    {popularMovies.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <PopularCard movie={movie} />
                            </div>
                           
                        </div>
                    ))}
                </div>
                <div className='hidden gap-5 mx-5 mt-3 items-center flex-nowrap' ref={tvRef}>
                    {popularTv.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <PopularCard movie={movie} />
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>


    </div>
  )
}

export default PopularCards