import { fetchPlayingMovies, fetchOnAirTv, fetchAiringToday} from '../../services/tmdbServices'
import { useState, useEffect, useRef } from 'react'
import StreamingCard from './StreamingCard'

function StreamingCards() {

   //states 
    const [playingMovies, setPlayingMovies] = useState([])
    const [onAirTv, setOnAirTV] = useState([])
    const [AiringToday, setAiringToday] = useState([])

    //activity states
    const [playingActive, setPlayingActive] = useState(true) 
    const [onAirActive, setOnAirActive] = useState(false) 
    const [AiringActive, setAiringActive] = useState(false) 

    const playingRef = useRef()
    const onAirRef = useRef()
    const AiringRef = useRef()


    useEffect(()=> {
        getPlayingMovies()
        getOnAirTv()
        getAiringToday()
    },[])


    // calling data From API
    const getPlayingMovies = async () => {
        try {
          await fetchPlayingMovies()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { 
                let movieData = []
                Array.from(data['results']).forEach((movie)=> {
                  movieData.push({...movie, media_type:'movie'})
                  setPlayingMovies(movieData)
                })
               })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }


    const getOnAirTv = async () => {
        try {
          await fetchOnAirTv()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { 
                let onair = []
                Array.from(data['results']).forEach((show)=> {
                  onair.push({...show, media_type:'tv'})
                  setOnAirTV(onair)
                })
               })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }

      const getAiringToday = async () => {
        try {
          await fetchAiringToday()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { 
                let air = []
                Array.from(data['results']).forEach((airing)=> {
                  air.push({...airing, media_type:'tv'})
                  setAiringToday(air)
                })
               })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }

    // events to show different data when user click different buttons  
    const showPlayingMovies = ()=>{
      playingRef.current.className = 'flex gap-5 mx-5 mt-3  h-[310px] items-center flex-nowrap animate-fadeIn'
      onAirRef.current.className = 'hidden'
      AiringRef.current.className = 'hidden'
      setPlayingActive(true)
      setOnAirActive(false)
      setAiringActive(false)
    }


    const showOnAirTv = ()=> { 
      playingRef.current.className = 'hidden'
      onAirRef.current.className = 'flex gap-5 mx-5 mt-3  h-[310px] items-center flex-nowrap animate-fadeIn'
      AiringRef.current.className = 'hidden'
      setPlayingActive(false)
      setOnAirActive(true)
      setAiringActive(false)
    }

    const showAiring = ()=> { 
      playingRef.current.className = 'hidden'
      onAirRef.current.className = 'hidden'
      AiringRef.current.className = 'flex gap-5 mx-5 mt-3  h-[310px] items-center flex-nowrap animate-fadeIn'
      setPlayingActive(false)
      setOnAirActive(false)
      setAiringActive(true)

    }


  return (
    <div>
        <div>
              {/* section header */}
            <div className='flex mt-5'>
                 <span className='ml-[120px] font-poppins text-xl'>Streaming</span>
                 <div className=' flex items-center justify-between ml-8 w-96 text-base border-2 font-semibold rounded-3xl border-cyan-200'>
                    <button className= {`px-[18px] rounded-2xl ${playingActive ? ' text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showPlayingMovies}
                            >Playing Movies
                     
                    </button>
                    <button className={`px-[16px] rounded-2xl ${onAirActive?   'text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showOnAirTv}
                            >OnTv
                    </button>
                    <button className={`px-[16px] rounded-2xl ${AiringActive?   'text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showAiring}
                            >Airing Today
                    </button>
                </div>    
            </div>

            {/* cards area start */}
            <div className='w-full h-[380px] items-center overflow-x-scroll border-x-[50px] border-x-transparent'>
                <div className='flex gap-5 mx-5 items-center h-[310px] flex-nowrap' ref={playingRef}>
                    {playingMovies.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <StreamingCard movie={movie} />
                            </div>                           
                        </div>
                    ))}
                </div>
                <div className='hidden gap-5 mx-5 items-center h-[310px] flex-nowrap' ref={onAirRef}>
                    {onAirTv.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <StreamingCard movie={movie} />
                            </div>               
                        </div>
                    ))}
                </div>
                <div className='hidden gap-5 mx-5 items-center h-[310px] flex-nowrap' ref={AiringRef}>
                    {AiringToday.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <StreamingCard movie={movie} />
                            </div>               
                        </div>
                    ))}
                </div>
            </div>
        </div>


    </div>
  )
}

export default StreamingCards