import { useState, useEffect} from 'react'
import { useMovieStore } from '../../store/moviesStore'

function TrendingTrailers(props) {

  
  const [trailer, setTrailer] = useState('')
  const trendings = useMovieStore(state => state.trendings)


  useEffect(()=>{
      setTrailer(props.trailer)
  })
  
  return (

        <div>
           <div className='flex flex-col rounded-2xl flex-nowrap justify-center items-center w-[350px] h-64 mt-10 mb-3'>
                <iframe width="300"
                        height="175"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={trailer.name}
                        allow='picture-in-picture'
                        loading='lazy'
                        >
                </iframe>
                
           </div>
           

        </div>
  )
}

export default TrendingTrailers