import  { useState ,useEffect, useRef} from 'react'
import trendingDay from '../../data/trendingDay.json'
import TrendingCard from './TrendingCard'
import { useMovieStore } from '../../store/moviesStore'
import { fetchMovieTrailer, fetchTvTrailer } from '../../services/tmdbServices'
import TrendingTrailers from './TrendingTrailers'

function TrendingPosters() {


    const trendings = useMovieStore(state => state.trendings)
    const setTrendings = useMovieStore(state => state.setTrendings)
    const trailers = useMovieStore(state => state.trailers)
    const AddToTrailers = useMovieStore(state => state.addToTrailers)


    const postersRef = useRef()
    const trailersRef = useRef()

      
    useEffect(()=>{
        setTrendings((trendingDay.results).slice(0,10))
        
    },[])

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
                             AddToTrailers((result))
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
                             AddToTrailers((result))
                          }
                        })
            } catch(error) {console.log(error)}
        }
      fetchtv()
     }      
    })
  }
       

    const showPosters = ()=>{
      postersRef.current.className = 'flex flex-nowrap gap-5'
      trailersRef.current.className = 'hidden'
      setPosterActive(true)
      setTrailerActive(false)
    }

    const showTrailers = ()=> { 
      fetchTrailersData()
      setTimeout(()=> {
        postersRef.current.className = 'hidden'
        trailersRef.current.className = 'flex flex-nowrap'
      },1000)  
    }
    
  return (
    <div>
         <div className='flex items-center gap-5 relative top-14'>
           <h1 className='ml-32 font-poppins text-xl text-white font-semibold '>Trending Now</h1>
           <div className='border rounded-3xl border-green-500 font-nunito'>
             <button className= 'text-white p-1 px-3 rounded-2xl'
                      onClick={showPosters}
                      >Posters
                     
             </button>
             <button className='text-white p-1 px-3 rounded-2xl'
                      onClick={showTrailers}
                      >See Trailers
             </button>
           </div>
        </div>

        <div className='trending-background w-full pt-8 px-8 items-center overflow-x-scroll border-x-[80px] border-x-transparent' 
              >  
            <div className='flex flex-nowrap gap-5' ref={postersRef}>
              {trendings.map((trend)=> (  
                <div key={trend.id}>                     
                     <TrendingCard trend={trend} />              
                </div>                            
                 ))} 
            </div>   
            
            <div className='flex flex-nowrap' ref={trailersRef}>
              {trailers.map((trailer)=> (
                <div key={trailer.id}>
                    <TrendingTrailers trailer={trailer} /> 
                </div>                
              ))}
            </div>
            
                       
        </div> 
    </div>
  )
}

export default TrendingPosters