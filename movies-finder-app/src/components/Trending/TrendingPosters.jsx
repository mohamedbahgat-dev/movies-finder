import  { useState ,useEffect, useRef} from 'react'
import trendingDay from '../../data/trendingDay.json'
import TrendingCard from './TrendingCard'
import { useMovieStore } from '../../store/moviesStore'
import { fetchTrendingDay, fetchMovieTrailer, fetchTvTrailer } from '../../services/tmdbServices'
import TrendingTrailers from './TrendingTrailers'
import { useMessageStore } from '../../store/useMessageStore'

function TrendingPosters() {

    const [trendings, setTrendings] = useState([])
  
    const [posterActive, setPosterActive] = useState(true) 
    const [trailerActive, setTrailerActive] = useState(false) 
    
    const postersRef = useRef()
    const trailersRef = useRef()
    
    const AddToTrailers = useMovieStore(state => state.addToTrailers)
    const trailers = useMovieStore(state => state.trailers)
    const setStoreTrendings = useMovieStore(state => state.setTrendings)
    

      
    useEffect(()=>{
        getDayTrends()
    },[])


    const getDayTrends = async () => {
            try {
              await fetchTrendingDay()
                   .then(response => {
                          if (!response.ok) {
                          useMessageStore.getState().setMessage('Movie not found', 'Error')
                       }
                          return response.json()
                  }).then(data => { setTrendings(data['results']) })       
        
            } catch (error) {
              useMessageStore.getState().setMessage('Movie not found', 'Error')
            }
          }

    const fetchTrailersData = () => {

     trendings.map((trend)=> {
      if(trend.media_type === 'movie'){
         const fetchMovie = async ()=> {
            try {
                await fetchMovieTrailer(trend.id)
                      .then(response => {
                        if(!response.ok) {console.log('No data fetched')}
                        return response.json()
                    }).then(data => {
                          let result = Array.from(data.results).filter((item)=> item.type === 'Trailer')[0]
                          if(trailers.length < trendings.length){
                             AddToTrailers(({...result, backdrop_path:trend.backdrop_path, title: trend.title || trend.name}))
                          }
                          })
                         
             } catch(error) {console.log(error)}
        }
      fetchMovie()

    } else if (trend.media_type === 'tv'){
      const fetchtv = async()=> {
            try {
                  await  fetchTvTrailer(trend.id)
                    .then(response => {
                        if(!response.ok) {console.log('No data fetched')}
                        return response.json()
                  }).then(data => {
                          let result = Array.from(data.results).filter((item)=> item.type === 'Trailer')[0]                             
                          if(trailers.length < trendings.length){
                             AddToTrailers(({...result, backdrop_path:trend.backdrop_path, title: trend.title || trend.name}))
                          }
                        })
            } catch(error) {console.log(error)}
        }
      fetchtv()
     }      
    })
  }
   
    const showPosters = ()=>{
      postersRef.current.className = 'flex flex-nowrap gap-5 animate-fadeIn'
      trailersRef.current.className = 'hidden'
      setPosterActive(true)
      setTrailerActive(false)
    }


    const showTrailers = ()=> { 
      fetchTrailersData()
      setStoreTrendings(trendings)
      postersRef.current.className = 'hidden'
      trailersRef.current.className = 'flex flex-nowrap animate-fadeIn'
      setPosterActive(false)
      setTrailerActive(true)
    }


  return (
    <div>
         <div className='flex items-center gap-5 relative top-14'>
           <h1 className='ml-32 font-poppins text-xl text-white'>Trending Now</h1>
           <div className='border rounded-3xl border-green-500 font-poppins font-normal text-white '>
             <button className= {`px-3 rounded-2xl ${posterActive ? 'text-blue-950 bg-gradient-to-r from-green-100 to-green-300 border border-green-400': ''}` }
                      onClick={showPosters}
                      >Posters
                     
             </button>
             <button className={`px-3 rounded-2xl ${trailerActive ? 'text-blue-950 bg-gradient-to-r from-green-100 to-green-300 border border-green-400': ''}` }
                      onClick={showTrailers}
                      >See Trailers
             </button>
           </div>
        </div>

        <div className='trending-background w-full h-[380px] items-center justify-center overflow-x-scroll border-x-[80px] border-x-transparent' 
              >  
            <div className='flex flex-nowrap gap-5' ref={postersRef}>
              {trendings.map((trend)=> (  
                <div key={trend.id}>                     
                     <TrendingCard trend={trend} />              
                </div>                            
                 ))} 
            </div>   
            
            <div className='hidden flex-nowrap gap-5' ref={trailersRef}>
              {trailers.map((trailer)=> (
                <div key={trailer.key}>
                  {trailer &&  
                     <div > 
                         <TrendingTrailers trailer={trailer}/>                                   
                     </div>
                     }
                </div>                                                  
              ))}
            </div>                   
        </div> 
    </div>
  )
}

export default TrendingPosters