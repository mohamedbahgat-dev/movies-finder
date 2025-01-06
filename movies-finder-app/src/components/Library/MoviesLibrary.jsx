import { useEffect, useRef, useState } from "react";
import HomeNavBar from "../Header/NavBar";


function MoviesLibrary() {

  const [myList, setMylist] = useState([])
  const [favorites, setFavorites] = useState([])
  const [watchlist, setWatchlist] = useState([])

  const mylistRef = useRef(null)
  const favoritesRef = useRef(null)
  const watchlistRef = useRef(null)

  const [mylistActive, setMylistActive] = useState(true)
  const [favoritesActive, setFavoritesActive] = useState(false)
  const [watchlistActive, setWatchlistActive] = useState(false)

  useEffect(()=> {
    setMylist(JSON.parse(localStorage.getItem('mylist')))
    setFavorites(JSON.parse(localStorage.getItem('favorites')))
    setWatchlist(JSON.parse(localStorage.getItem('watchlist')))
  },[])

  const showMylist = ()=> {
    mylistRef.current.className = 'block animate-fadeIn'
    favoritesRef.current.className = 'hidden'
    watchlistRef.current.className = 'hidden'
    setMylistActive(true)
    setFavoritesActive(false)
    setWatchlistActive(false)

  }

  const showFavorites = ()=> {
    mylistRef.current.className = 'hidden'
    favoritesRef.current.className = 'block animate-fadeIn'
    watchlistRef.current.className = 'hidden'
    setMylistActive(false)
    setFavoritesActive(true)
    setWatchlistActive(false)

  }

  const showWatchlist = ()=> {
    mylistRef.current.className = 'hidden'
    favoritesRef.current.className = 'hidden'
    watchlistRef.current.className = 'block animate-fadeIn'
    setMylistActive(false)
    setFavoritesActive(false)
    setWatchlistActive(true)

  }

  return (

      <div>
        <HomeNavBar />
        <div className="flex items-center justify-center bg-blue-900 mr-[-5px] h-10">
          <ul className="flex justify-center text-white font-poppins">
            <li  className={`mx-5 cursor-pointer  ${mylistActive ? 'transition-all duration-500 px-3 text-red-600 bg-blue-300 rounded-xl' : ''}`}
                 onClick={showMylist}
                 >My List</li>

            <li className={`mx-5 cursor-pointer ${favoritesActive ? 'transition-all duration-500 px-3 text-red-600 bg-blue-300 rounded-xl' : ''}`}
                onClick={showFavorites}
                >Favorites</li>
            <li className={`mx-5 cursor-pointer ${watchlistActive ? 'transition-all duration-500 px-3 text-red-600 bg-blue-300 rounded-xl' : ''}`}
                onClick={showWatchlist}
                >My watchlist</li>
          </ul>
        </div>
         {/* choosen data block  */}
         <div>
           {/* mylist data */}
           <div className="block" ref={mylistRef}>
             {myList.map((movie)=> (
              <div className="flex m-5 border rounded-xl overflow-hidden shadow-lg"
                   key={movie.id}>
                 <div className="mr-3">
                   <img className="w-32" 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                 </div>
                 <div className="w-[600px] mt-3">
                   <h2 className="font-poppins ml-1 mb-2 font-semibold">{movie.title || movie.name}<span className="ml-4 uppercase text-sm border border-green-400 px-2">{movie.media_type}</span></h2>
                   <div className='flex items-center'>
                             <div className=' bg-blue-300 text-center p-1.5 mt-1 mr-1 rounded-full text-sm '>{(movie.vote_average).toFixed(2)}</div>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f4db39" className="size-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                             </svg>
                   </div>
                   <h2 className="text-sm mt-4">{movie.overview}</h2> 
                 </div>               
              </div>
             ))}  
           </div>

           {/* favorites data */}

           <div className="hidden" ref={favoritesRef}>
             {favorites.map((movie)=> (
              <div className="flex m-5 border rounded-xl overflow-hidden shadow-lg"
                   key={movie.id}>
                 <div className="mr-3">
                   <img className="w-32" 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                 </div>
                 <div className="w-[600px] mt-3">
                   <h2 className="font-poppins ml-1 mb-2 font-semibold">{movie.title || movie.name}<span className="ml-4 uppercase text-sm border border-green-400 px-2">{movie.media_type}</span></h2>
                   <div className='flex items-center'>
                             <div className=' bg-blue-300 text-center p-1.5 mt-1 mr-1 rounded-full text-sm '>{(movie.vote_average).toFixed(2)}</div>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f4db39" className="size-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                             </svg>
                   </div>
                   <h2 className="text-sm mt-4">{movie.overview}</h2> 
                 </div>               
              </div>
             ))}  
           </div>

           {/* watchlist data */}
           <div className="hidden" ref={watchlistRef}>
             {watchlist.map((movie)=> (
              <div className="flex m-5 border rounded-xl overflow-hidden shadow-lg"
                   key={movie.id}>
                 <div className="mr-3">
                   <img className="w-32" 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                 </div>
                 <div className="w-[650px] mt-3">
                   <h2 className="font-poppins ml-1 mb-2 font-semibold">{movie.title || movie.name}<span className="ml-4 uppercase text-sm border border-green-400 px-2">{movie.media_type}</span></h2>
                   <div className='flex items-center'>
                             <div className=' bg-blue-300 text-center p-1.5 mt-1 mr-1 rounded-full text-sm '>{(movie.vote_average).toFixed(2)}</div>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f4db39" className="size-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                             </svg>
                   </div>
                   <h2 className="text-sm mt-4">{movie.overview}</h2> 
                 </div>               
              </div>
             ))}  
           </div>
           
         </div>
      </div>
  )
}

export default MoviesLibrary