import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import moviesGenre from '../../data/moviesGenre.json'
import tvGenre from '../../data/tvGenre.json'
import HomeNavBar from '../Header/NavBar'
import Footer from '../Footer/Footer'
import { fetchMovieDetails, fetchTvDetails,
   fetchMovieCredits, fetchTvCredits,
   fetchMovieImages, fetchTvImages,
   fetchMovieVideos, fetchTvVideos,
   fetchMovieReviews, fetchTvReviews,
   fetchMovieRecommendations, fetchTvRecommendations } from '../../services/tmdbServices'
import {useMessageStore} from '../../store/useMessageStore'
import { Modal } from '@mui/material'



function ShowDetails() {

  const [details, setDetails] = useState('')
  const [credits, setCredits] = useState('')
  const [images, setImages] = useState('')
  const [videos, setVideos] = useState([])
  const [reviews, setReviews] = useState('')
  const [recommendations, setRecommendations] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [posterActive, setPosterActive] = useState(false)
  const [backdropActive, setBackdropActive] = useState(true)
  const [openTrailer, setOpenTrailer] = useState(false)
  const [trailer, setTrailer] = useState('')

  // refs
  const posterRef = useRef(null)
  const backdropRef = useRef(null)
  const watchListRef = useRef(null)
  const favoritesRef = useRef(null)
  const mylistRef = useRef(null)
  

   // managing states and extracting user movies choice to show details
  const movieId = useParams()
  const movies = JSON.parse(localStorage.getItem('search-results'))
  const movie = movies.filter((movie)=> movie.id == movieId.movieId)[0]
  

  // managing movies genres and extract it from its own files 
  const [genre, setGenre] = useState('')
  const movieGenres = moviesGenre.genres
  const tvGenres = tvGenre.genres

  // call data extraction func inside useeffect
  useEffect(()=>{
    getGenre()
    getShowDetails()
    getShowCredits()
    getShowImages()
    getShowVideos()
    getShowReviews()
    getShowRecommendations()
    
  },[])

  // function to extract movies and tv genres
  const getGenre = ()=> {
      let extractGenre = []           
      if (movie.media_type === 'movie'){
          for (let genre of movieGenres){
            for (let id of movie.genre_ids){
              if(genre.id === id){
                extractGenre.push(genre.name)
              }}}
              
      }else if (movie.media_type == 'tv') {
          for (let genre of tvGenres){
            for (let id of movie.genre_ids){
              if(genre.id === id){
                extractGenre.push(genre.name)
              }}}
      }
      setGenre(extractGenre)
  }

  //get movie/tv details
  const getShowDetails = async ()=> {

      if(movie.media_type === 'movie'){
        try {
          await fetchMovieDetails(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
                }).then(data => { setDetails(data) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }else if (movie.media_type === 'tv'){
        try {
            await fetchTvDetails(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                    return response.json()
                }).then(data => { setDetails(data) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }
    }


    // get movie credits
    const getShowCredits = async ()=> {
      setIsLoading(true)
      if(movie.media_type === 'movie'){
        try {
          await fetchMovieCredits(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
                }).then(data => { setCredits(data) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }else if (movie.media_type === 'tv'){
        try {
            await fetchTvCredits(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                    return response.json()
                }).then(data => { setCredits(data) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }
      setIsLoading(false)
    }

    // get movie/tv images
    const getShowImages = async ()=> {

      if(movie.media_type === 'movie'){
        try {
          await fetchMovieImages(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
                }).then(data => { setImages(data) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }else if (movie.media_type === 'tv'){
        try {
            await fetchTvImages(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                    return response.json()
                }).then(data => { setImages(data) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }
    }

    // get movie/tv videos
    const getShowVideos = async ()=> {

      if(movie.media_type === 'movie'){
        try {
          await fetchMovieVideos(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
                }).then(data => { setVideos(data['results']) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }else if (movie.media_type === 'tv'){
        try {
            await fetchTvVideos(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                    return response.json()
                }).then(data => { setVideos(data['results']) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }
    }

    // get movie/tv reviwes
    const getShowReviews = async ()=> {

      if(movie.media_type === 'movie'){
        try {
          await fetchMovieReviews(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
                }).then(data => { setReviews(data['results']) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }else if (movie.media_type === 'tv'){
        try {
            await fetchTvReviews(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                    return response.json()
                }).then(data => { setReviews(data['results']) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }
    }

    // get movie/tv recommendations
    const getShowRecommendations = async ()=> {

      if(movie.media_type === 'movie'){
        try {
          await fetchMovieRecommendations(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                      return response.json()
                }).then(data => { setRecommendations(data['results']) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }else if (movie.media_type === 'tv'){
        try {
            await fetchTvRecommendations(movie.id)
                  .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                    }
                    return response.json()
                }).then(data => { setRecommendations(data['results']) })       
    
          } catch (error) {
                 useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }
    }

    // manage my-list movie local storage
    const handleMovieList = ()=> {

        if(localStorage.getItem('mylist') === null){
            localStorage.setItem('mylist',JSON.stringify([movie]))
        }else { 
            let storedMyList = JSON.parse(localStorage.getItem('mylist'))
            if(storedMyList.length > 0) {
                if(!storedMyList.some((item)=> item.id === movie.id )){
                    storedMyList.push(movie)
                   localStorage.setItem('mylist', JSON.stringify(storedMyList))
                }
          } else if (storedMyList.length === 0){
                localStorage.setItem('mylist', JSON.stringify([movie]))
        }
      }  
    }

    // manage favorited movie list local storage
    const handleFavorites = ()=> {

        if(localStorage.getItem('favorites') === null){
            localStorage.setItem('favorites',JSON.stringify([movie]))
        }else {
            let storedFavorites = JSON.parse(localStorage.getItem('favorites'))
            if(storedFavorites.length > 0) {
                if(!storedFavorites.some((item)=> item.id === movie.id )){
                    storedFavorites.push(movie)
                   localStorage.setItem('favorites', JSON.stringify(storedFavorites))
                }
          } else if (storedFavorites.length === 0){
                localStorage.setItem('favorites', JSON.stringify([movie]))
        }
      }  
    }

    // manage favorited movie list local storage
    const handleWatchList = ()=> {

        if(localStorage.getItem('watchlist') === null){
            localStorage.setItem('watchlist',JSON.stringify([movie]))
        }else {
            let storedwatchlist = JSON.parse(localStorage.getItem('watchlist'))
            if(storedwatchlist.length > 0) {
                if(!storedwatchlist.some((item)=> item.id === movie.id )){
                    storedwatchlist.push(movie)
                   localStorage.setItem('watchlist', JSON.stringify(storedwatchlist))
                }
          } else if (storedwatchlist.length === 0){
                localStorage.setItem('watchlist', JSON.stringify([movie]))
        }
      }  
    }

    // show tooltips
    const showMylist = ()=> {
      mylistRef.current.className = 'absolute text-xs mb-20 left-[-17px] bg-gray-800 py-1 px-2 rounded-xl'
    }

    const showFavorites = ()=> {
      favoritesRef.current.className = 'absolute text-xs mb-20 left-[15px] bg-gray-800 py-1 px-2 rounded-xl'
    }

    const showWatchlist = ()=> {
      watchListRef.current.className = 'absolute text-xs mb-20 left-[84px] bg-gray-800 py-1 px-2 rounded-xl'
    }

    //hide tooltips
    const hideMylist = ()=> {
      mylistRef.current.className = 'hidden'
    }

    const hideFavorites = ()=> {
    favoritesRef.current.className = 'hidden'
    }

    const hideWatchlist = ()=> {
      watchListRef.current.className = 'hidden'
    }

    // func to show posters images
    const showPoster = ()=> {
      setPosterActive(true)
      setBackdropActive(false)
      posterRef.current.className = 'flex h-[350px] overflow-x-scroll border-x-[20px] mx-5 border-x-transparent animate-fadeIn'
      backdropRef.current.className = 'hidden'
    }
    
     // func to show dropback images
    const showBackdrops = ()=> {
      setPosterActive(false)
      setBackdropActive(true)
      posterRef.current.className = 'hidden'
      backdropRef.current.className = 'flex h-64 overflow-x-scroll border-x-[20px] mx-5 border-x-transparent animate-fadeIn'
    }

    // handle open trailer funcs
    const handleOpen = (e)=>{
      e.preventDefaults()
      setOpenTrailer(true)
  }
    
    //handle closing trailer window
    const handleClose = ()=> {
      setOpenTrailer(false)
  }

  // filter trailer
    const filterTriler = ()=> {
      const filteredTrailer = Array.from(videos).filter((trailer)=> trailer.type === 'Trailer')[0]
      setTrailer(filteredTrailer)
    }


  return (

   <>
      <HomeNavBar />
        <div>
             {/* background --start-- */}
           <div id='show-background' className='relative'>
              <img className='w-full h-[650px] max-[650px]:h-[880px] justify-center opacity-20' 
                   src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} />
           </div>
  
              {/* data container --starts-- */}
               <div className=' flex items-center absolute top-28 left-10 text-white max-[650px]:flex-col max-[650px]:w-72 max-[650px]:h-64 md:left-2'>
                      {/* poster image */}
                    <div className=' max-[650px]:ml-36 max-[650px]:w-48 max-[650px]:h-64 sm:w-56 sm:mt-8 md:ml-20 md:w-64 md:h-96 md:mt-0 lg:w-80 lg:h-[480px] lg:mt-0 ' >
                        <img className='shadow-xl w-[300px] h-[400px] max-[650px]:h-[250px] max-[650px]:w-[360px] md:w-[450px] md:h-[400px] lg:h-[500px] rounded-t-lg'
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <h3 className='bg-blue-950 h-10 text-center items-center pt-1.5 rounded-b-lg opacity-80'>{movie.release_date || movie.first_air_date}</h3>
                    </div>                 
                         {/* main data block */}
                    <div className='ml-10 relative max-[650px]:ml-44 max-[650px]:mt-12  sm:mt-8 md:mt-16'> 

                           {/* title, type and generes block */}
                        <h2 className='text-3xl font-popins uppercase font-semibold'>{movie.title || movie.name}</h2> 
                        <div className='flex mt-5 items-center'>
                            <span className='inline-block uppercase border p-1'>{movie.media_type}</span>
                            <div className='ml-3 px-2 py-0.5 font-thin'>
                              {genre.length != 0 ? 
                                 <div className='place-items-center'>{`${genre[0]}& ${genre[1]}, ${genre[2]}`}</div>  
                                 :<span></span>}
                            </div>
                        </div>

                           {/* scores and movie evaluation block */}
                        <div className='flex items-center '>
                           <div className='score-container w-14 mt-10 '>
                              <div className='score-progress text-center' style={{ "--i": movie.vote_average,"--clr": '#43f94a' }}>
                                  <h3 className='absolute top-[14px] w-10 left-1 text-center text-[12px] z-10  font-semibold'>{Math.round(movie.vote_average * 10)}<small>%</small></h3>
                              </div>
                           </div>
                            <h2 className='mt-8 ml-4 text-md'>Users Score</h2>
                            <div className='flex items-center justify-center w-12 h-12 ml-5 mr-5 mt-10 rounded-full border-4 border-[#43f94a] bg-[#4d4c4c]'>
                              <span className='text-xs font-bold'>{Math.round(movie.popularity)}</span>
                            </div>
                             <span className='mt-8 text-md'>Popularity Score</span>
                            
                        </div>

                                                                                        {/* Icons part --start---- */}
                      <div className='flex items-center mt-8'>
                               {/* mylist icon */}
                          <h2 className='hidden absolute text-xs mb-20 left-[-17px]' ref={mylistRef}>Add to Mylist</h2>
                          <div className='bg-teal-600 p-2 mr-3 rounded-full cursor-pointer hover:scale-105' onClick={handleMovieList} onMouseOver={showMylist} onMouseLeave={hideMylist}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                  <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                              </svg>
                          </div>
                          
                              
                                {/* Favorites icon */}
                          <h2 className='hidden text-xs mb-20 left-[15px]' ref={favoritesRef}>Add to Favorites</h2>      
                          <div className='bg-teal-600 p-2 mr-3 rounded-full cursor-pointer hover:scale-105' onClick={handleFavorites} onMouseOver={showFavorites} onMouseLeave={hideFavorites}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                              </svg>
                          </div>

                              {/* Watchlist  */}
                          <h2 className='hidden absolute text-xs mb-20 left-[84px]' ref={watchListRef}>Watchlist</h2> 
                          <div className='bg-teal-600 p-2 mr-3 rounded-full cursor-pointer hover:scale-105' onClick={handleWatchList} onMouseOver={showWatchlist} onMouseLeave={hideWatchlist}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                              </svg>
                          </div>

                             {/* play trailer */}
                          <div className='flex p-3 rounded-full hover:cursor-pointer' onClick={handleOpen} onMouseOver={filterTriler}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                              </svg>
                              <span className='ml-2' >Play Trailer</span>
                          </div>
                          {trailer ? 
                          <div>
                              <Modal  open={openTrailer} 
                                      onClose={handleClose}
                                      style={{position:'absolute', top:'100px', left:'23%', 
                                      
                   
                                    }}>
                                <iframe width="800"
                                        height="500"
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        title={trailer.name}
                                        loading='lazy'
                                      >
                                </iframe>
                              </Modal>
                          </div>: <div></div>}                     
                      </div>
                     {/* Icons part ----end----- */}
                             {/*movie overview part  */}
                      <div className='flex flex-col items-start'>
                         <span className='mt-5 text-xl font-poppins'>Overview</span>
                         <span className='w-[800px] mt-4 max-[650px]:w-[400px] sm:w-96 md:w-[500px] '>{movie.overview}</span>
                         <q className='mt-2'><i>{details.tagline}</i></q>
                      </div>  
               </div>          
           </div> 
                       {/* Data container --ends-- */}      
                  {/* show Details */}        
           <div>
               {/* casting block */}
              <div>
                <h2 className='my-8 mx-8 pl-2 text-xl font-semibold border-l-4 border-l-blue-950 border- font-poppins'>Cast</h2>
                <div>
                  {credits ? 
                  <div className='flex overflow-x-scroll border-x-[20px] border-x-transparent '>
                      {credits.cast.slice(0,10).map((cast)=> (
                      <div key={cast.id}
                         className='flex flex-col rounded-t-xl border mx-3 drop-shadow-md shadow-lg mb-10'>         
                        <div className='flex gap-3 w-44'>
                           <img className='w-44 h-56 rounded-t-xl'
                                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}/>
                        </div>
                        <div className=' flex flex-col p-2'>
                          <span className='text-gray-900 text-sm font-semibold'>{cast.name}</span>
                          <span className='text-xs text-gray-500'>{cast.character}</span>
                          <span className='text-xs text-gray-500 mt-1 '>{cast.known_for_department}</span>
                        </div> 
                      </div>
                  ))}    
                  </div> :<div>Loading ...</div>}
                
                </div>
              </div>
               {/* images block */}
                 <div>
                   <h2 className='my-8 mx-8 pl-2 text-xl font-semibold border-l-4 border-l-blue-950 font-poppins'>images</h2>
                   <div>
                      {images ? 
                        <div>
                           <div className='flex gap-4 ml-12 mb-8'>
                              <button className={`p-3 ${backdropActive ? 'border-b-4 border-b-blue-950 transition-all duration-500':''}`}
                                      onClick={showBackdrops}>
                                      Backdrops
                                  <span className='bg-gray-200 py-1 px-3 m-1 rounded-full'>{images.backdrops.length}</span></button>
                              
                              <button className={`p-3 ${posterActive ? 'border-b-4 border-b-blue-950 transition-all duration-500':''}`}
                                      onClick={showPoster}>
                                      Posters
                                  <span className = 'bg-gray-200 py-1 px-3 m-1 rounded-full'>{images.posters.length}</span></button>
                           </div>
                               {/* backdrops blocks */}
                           <div className='flex h-64 overflow-x-scroll border-x-[20px] mx-5 border-x-transparent' ref={backdropRef}>                      
                             {images.backdrops.slice(0,20).map((image)=>(
                              <div className=''>
                                <div className='flex gap-2 w-96'>
                                  <img  className='w-[370px] rounded-lg'
                                        src={`https://image.tmdb.org/t/p/w500${image.file_path}`} />
                                </div>           
                              </div>
                            ))}
                           </div>
                             {/* posters block */}
                           <div className='hidden h-[350px] overflow-x-scroll border-x-[20px] mx-5 border-x-transparent' ref={posterRef}>                      
                             {images.posters.slice(0,20).map((image)=>(
                              <div className=''>
                                <div className='flex gap-2 w-60 h-80'>
                                  <img  className='w-[220px] rounded-lg'
                                        src={`https://image.tmdb.org/t/p/w500${image.file_path}`} />
                                </div>           
                              </div>
                            ))}
                           </div>                      
                        </div>       
                    : <div>Loading...</div>}                     
                   </div>                   
                 </div>
                   
                    {/* videos block */}
                 <div>
                    <h2 className=' my-8 mx-8 pl-2 text-xl font-semibold border-l-4 border-l-blue-950 font-poppins'>videos<span className='ml-3 px-3 py-2 border rounded-full bg-gray-200'>{videos.length}</span></h2>
                    <div>
                      {videos ? 
                         <div>
                            <div className='flex overflow-x-scroll border-transparent border-x-[20px]'>
                              {videos.map((video)=> (
                                 <div key={video.id}
                                     className='mx-5 h-72' >                                     
                                       <iframe width="380"
                                               height="250"
                                               style={{borderRadius:'20px'}}
                                               src={`https://www.youtube.com/embed/${video.key}`}
                                               title={video.name}
                                               loading='lazy'
                                                 >
                                       </iframe>                                  
                                 </div>
                               ))}
                            </div>
                          </div> 
                        :<div>Loading...</div>}
                    </div>
                 </div>
                 {/* review blocks */}
                 <div>
                     <h2 className=' my-8 mx-8 pl-2 text-xl font-semibold border-l-4 border-l-blue-950 font-poppins'>Reviews<span className='ml-3 px-4 py-2 border rounded-full bg-gray-200'>{reviews.length}</span></h2>
                     <div>
                      {reviews ? 
                        <div>
                          <div className='flex overflow-x-scroll border-transparent h-80 border-x-[20px]'>
                            {reviews.map((review)=> (
                              <div>
                                <div className='w-[800px] h-60 flex flex-col border rounded-xl drop-shadow-lg shadow-lg mx-5'>                                                                                                   
                                  <div className='flex'>
                                    <h1 className=' m-2 px-5 py-3 font-bold bg-blue-500 uppercase text-lg rounded-full'>{review.author[0]}</h1>  
                                    <div className='flex flex-col justify-center'>
                                      <h1 className='text-xl font-bold'>{review.author}</h1>
                                      <h1 className='text-xs'>{review.created_at}</h1>
                                    </div>                                 
                                  </div>                                  
                                  <h3 className='px-5 text-sm'>{review.content.substr(0,500)}...</h3>
                                  <h3 className='p-5'>Edited at <span className='text-xs' >{review.updated_at}</span></h3>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      : <div>Loading...</div>}
                     </div>
                 </div>
                    {/* recommendation block */}
                 <div>
                  <h2 className=' my-8 mx-8 pl-2 text-xl font-semibold border-l-4 border-l-blue-950 font-poppins'>More Like This</h2>
                  <div>
                    {recommendations ? 
                      <div>
                        <div className='flex gap-5 overflow-x-scroll border-transparent h-[400px]  border-x-[20px]'>
                          {recommendations.map((show)=> (
                            <div key={show.id}
                                  className='flex flex-col justify-center drop-shadow-lg'>
                              <div className='flex w-48'>
                                <img className='w-48 rounded-lg' 
                                     src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} />
                              </div>
                              <div>
                                <h2 className= 'h-14 p-2 text-center'>{show.name || show.title}</h2>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div> 
                      : <div>Loading...</div>}
                  </div>
                 </div>
           </div>
       </div>
       <Footer />

    </>
  )
}

export default ShowDetails