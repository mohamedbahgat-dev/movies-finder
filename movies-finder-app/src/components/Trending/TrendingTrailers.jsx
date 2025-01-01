import { useState, useEffect} from 'react'
import { useMovieStore } from '../../store/moviesStore'
import { Modal } from '@material-ui/core'

function TrendingTrailers(props) {

  
  const [trailer, setTrailer] = useState('')
  const trendings = useMovieStore(state => state.trendings)

  const [open, setOpen] = useState(false)


  

  useEffect(()=>{
      setTrailer(props.trailer)
  })

  const handleOpen = ()=>{
    setOpen(true)
  }

  const handleClose = ()=> {
    setOpen(false)
  }

  console.log(trendings)
  
  return (

        <div>
           <div className='flex flex-col rounded-2xl flex-nowrap justify-center items-center w-[350px] h-64 mt-16'>
            {trendings.map((trend)=> {
               <div className='mt-5'>
                  <div div className='flex flex-col rounded-2xl flex-nowrap justify-center items-center w-[350px] h-56 mt-16 hover:scale-105'>    
                    <img className='w-[350px] object-cover h-48 rounded-lg shadow-xl cursor-pointer'
                          src={`https://image.tmdb.org/t/p/w500${trend.backdrop_path}`}/>              
                  </div>
                  <span className='text-center rounded-2x text-white drop-shadow-lg font-nunito font-semibold'>{trend.name || trend.title}</span>
             </div>
            })}
             
   
              {/* <iframe width="300"
                      height="175"
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                      title={trailer.name}
                      allow='picture-in-picture'
                      loading='lazy'
                      >
              </iframe> */}
               
           </div>
           

        </div>
  )
}

export default TrendingTrailers