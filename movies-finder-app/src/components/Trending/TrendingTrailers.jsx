import { useState, useEffect} from 'react'
import { Modal } from '@mui/material'

function TrendingTrailers(props) {

  
  const [trailer, setTrailer] = useState('')
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

  
  return (

        <div>
           <div className='flex flex-col rounded-2xl flex-nowrap justify-center items-center w-[350px] h-52 mt-12'>
            <div>

              <div className='cursor-pointer'
                    onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className=" relative top-52 left-40 size-14">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                <div className='mt-5'>
                   <div div className='flex flex-col rounded-2xl flex-nowrap justify-center items-center w-[350px] h-56 mt-16'>    
                      <img className='w-[320px] object-cover h-48 rounded-lg shadow-xl'
                           src={`https://image.tmdb.org/t/p/w500${trailer.backdrop_path}`}/>              
                   </div>
                 </div> 
              </div>
              <div className='text-center h-5'>
                <span className='rounded-2x text-white drop-shadow-lg font-poppins font-semibold'>{trailer.title}</span>
              </div>
                {/* Popup modal for trailers */}
              <Modal  open={open} 
                      onClose={handleClose}
                      style={{position:'absolute', top:'780px', left:'23%', 
                             
                      }}>
                  <iframe width="800"
                          height="500"
                          src={`https://www.youtube.com/embed/${trailer.key}`}
                          title={trailer.name}
                          loading='lazy'
                        >
                  </iframe>
              </Modal>
            </div>            
           </div>
        </div>
  )
}

export default TrendingTrailers