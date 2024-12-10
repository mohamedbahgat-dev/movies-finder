
import { useState, useEffect, useRef} from 'react'
import movieData from '../movies.json'



function MovieCard() {
    
    const [movie, setMovie] = useState('')
    const [rotten, setRotten] = useState('')
    const [isActive, setIsActive] = useState(true)

    const dataRef = useRef(null)
    const imageRef = useRef(null)
    

    useEffect(()=>{
        setMovie(movieData)
        setRotten(movieData.Ratings.filter((rate)=> rate.Source==='Rotten Tomatoes')[0].Value)
    },[])

    const displayData = ()=> {
        dataRef.current.className = 'block'
        dataRef.current.className = 'animate-fadeIn'
        dataRef.current.className = 'm-3'
        
        const img = document.getElementById('movie-image')
        const title = document.getElementById('card-title')
        const card = document.getElementById('card-container')


        img.classList.remove('h-80')
        img.classList.add('h-40')
        
        title.classList.add('hidden')
        card.classList.remove('h-[370px]')
        card.classList.add('h-[420px]')
    }

    const hideData = ()=> {
        dataRef.current.className = 'hidden'
        
        
        const img = document.getElementById('movie-image')
        const title = document.getElementById('card-title')
        const movieData = document.getElementById('movie-data')
        
        // const classesToAdd = []

        img.classList.remove('h-40')
        img.classList.add('h-80')
        title.classList.remove('hidden')
        movieData.classList.add('p-3')
        
       
    }

  return (
    <div>
        <div>
            <div id='card-container'
                 className='m-10 p-2 text-center w-64 h-auto bg-teal-100 rounded-2xl drop-shadow-lg'>
                       {/* visible part of movie card */}
                <div id='card-container'>
                    <img id='movie-image' 
                         className='w-60 h-80 object-cover rounded-2xl shadow-xl cursor-pointer' 
                         src={movie.Poster} alt='movie poster' 
                         ref={imageRef}
                        
                         onClick={displayData} />
                    <span id='card-title' 
                          className='text-lg inline-block mt-2'
                          >{movie.Title}</span>
                </div>

                    {/* invisible part start */}
                <div id='movie-data' className='hidden' ref={dataRef}>
                    <div className=' flex text-start items-center mt-1'>
                       <span className='text-lg my-1 mr-2 font-semibold font-poppins text-gray-800'>{movie.Title}</span>
                       <span className='text-xs mr-3 font-poppins'>{movie.Type}</span>
                       
                    </div>
                    <span className='block text-[12px] text-start'>{movie.Plot}</span>
                    
                    <div className='flex mt-3'>
                        <div className='flex items-center mr-7'>
                            <img className='w-6 mr-1' src='../src/assets/tomato.png'/>
                            <span className='text-xs font-poppins font-semibold'>{rotten}</span>
                        </div>
                        <div className='flex items-center ml-4'>
                            <img className='w-6 mr-1' src='../src/assets/IMDB.png'/>
                            <span className='text-xs font-poppins font-semibold'>{movie.imdbRating}</span> 
                        </div>
                        <div className='ml-7'>
                            <span className='mr-1 text-xs text-gray-500'>Year</span>
                            <span className=' text-sm font-poppins'>{movie.Year}</span>
                        </div>
                    </div>
                    <div>
                        <button className='bg-teal-950 text-white w-20 mt-4 p-1 rounded-lg shadow-lg hover:shadow-xl'>Open</button>
                    </div>
                    <span  onClick={hideData} className=' block text-xs text-end mr-2 text-gray-500 hover:text-gray-600 cursor-pointer'>hide</span>
                </div>
                       {/* invisible part end */}
            </div>
        </div>
    </div>
  )
}

export default MovieCard