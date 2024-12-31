import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'


function MovieCard(props) {

    //states management

    const [movie, setMovie] = useState('')
    const [rotten, setRotten] = useState('')
    
    //Refs management

    const dataRef = useRef(null)
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const hamburgerListRef = useRef(null)
    

    // side effects management
    
    useEffect(() => {
        setMovie(props.movie)
        let rottenValue = props.movie.Ratings.filter((rate) => rate.Source === 'Rotten Tomatoes')[0]
        if (rottenValue) {
            setRotten(rottenValue.Value)
        } else {
            setRotten('N/A')
        }
    }, [])


    // handle events functions

    // event to display hidden data on movie card
    const displayData = () => {
        dataRef.current.className = [...['block animate-fadeIn m-2']]
        titleRef.current.className = 'hidden'
        imageRef.current.className = [...['w-60 h-40 object-cover rounded-2xl shadow-xl cursor-pointer mb-3']]
    }
    // event to hide main movie card data
    const hideData = () => {
        dataRef.current.className = 'hidden'
        titleRef.current.className = 'block'
        imageRef.current.className = [...['w-60 h-80 object-cover rounded-2xl shadow-xl cursor-pointer mb-3']]
    }
    
    //store current viewed movie in local storage to save the movie viewd page
    const handleClick = ()=> {
        localStorage.setItem('viewedMovie', JSON.stringify(movie))
    }

    // show options manu event callback function
    const showHamburgerList = ()=> {
        hamburgerListRef.current.className = [...['absolute flex flex-col z-30 top-10 -right-10 bg-gray-200 rounded-md text-sm font-poppins cursor-pointer']]
    }

     // hide options menu event callback function
    const hideHamburgerList = ()=> {
        hamburgerListRef.current.className = 'hidden'
    }

    // manage my-list movie local storage
    const handleMovieList = ()=> {

        if(localStorage.getItem('mylist') === null){
            localStorage.setItem('mylist',JSON.stringify([movie]))
        }else { 
            let storedMyList = JSON.parse(localStorage.getItem('mylist'))
            if(storedMyList.length > 0) {
                if(!storedMyList.some((item)=> item.imdbID === movie.imdbID )){
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
                if(!storedFavorites.some((item)=> item.imdbID === movie.imdbID )){
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
                if(!storedwatchlist.some((item)=> item.imdbID === movie.imdbID )){
                    storedwatchlist.push(movie)
                   localStorage.setItem('watchlist', JSON.stringify(storedwatchlist))
                }
          } else if (storedwatchlist.length === 0){
                localStorage.setItem('watchlist', JSON.stringify([movie]))
        }
      }  
    }


    return (
        <div>
            <div>
                                             {/* card container ----start------ */}
                <div className='ml-12 p-2 text-center w-60 h-auto mb-5 backdrop-blur-sm bg-blue-200/30 rounded-2xl drop-shadow-lg'>
                    {/* visible part of movie card */}
                    <div >
                              {/* movie full poster poster  */}
                            
                        <img id='movie-image'
                            className='w-60 h-80 object-cover rounded-3xl shadow-xl cursor-pointer mb-3 relative'
                            src={movie.Poster} alt='movie poster'
                            ref={imageRef}
                            onClick={displayData} />
                        
 
                                                        {/* hamburger menu icon */}
                        <div onClick={showHamburgerList}  
                             className='absolute top-5 right-5 bg-gray-300 rounded-full opacity-90 hover:bg-teal-800 hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                               <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                               {/* hamburger menu */}
                        <div className='hidden' ref={hamburgerListRef}>
                                    {/* close Icon */}
                            <div className='ml-[100px] mt-1 mr-1 hover:cursor-pointer' onClick={hideHamburgerList}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                               </svg>
                            </div>                          
                            {/* add to my list button/icon */}
                            <div onClick={handleMovieList}
                                 className='flex items-center mt-0 p-1 m-1 pr-5 border-b border-b-gray-300 hover:bg-blue-900 hover:text-white'>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-1">
                                    <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                                <span >Mylist</span>
                            </div>
                            
                            {/* add to favorites button/icon */}
                            <div onClick={handleFavorites}
                                 className='flex items-center p-1 my-1  m-1 pr-5 border-b border-b-gray-300  hover:bg-blue-900 hover:text-white'>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-1">
                                 <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                               </svg>
                               <span>Favorites</span>
                            </div>
                            
                            {/* add to watch list button/icon */}
                            <div onClick={handleWatchList}
                                className='flex items-center p-1 my-1 m-1 pr-5 hover:bg-blue-900 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-1">
                                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                </svg>
                                <span>Watchlist</span>
                            </div>                           
                        </div>
                        
                            {/* movie main card movie title */}
                        <span id='card-title'
                            className=' inline-block text-gray-700 font-bold uppercase'
                            ref={titleRef}
                            >{movie.Title}
                        </span>
                    </div>
                    

                                {/* invisible part of movie card -----start------- */}
                    <div id='movie-data' className='hidden' ref={dataRef}>
                        <div className=' flex text-start items-center mt-1'>
                            <span className=' my-1 mr-2 font-semibold font-poppins text-gray-800'>{movie.Title}</span>
                            <span className='text-xs mr-3 font-poppins'>{movie.Type}</span>

                        </div>
                        <span className='block text-[12px] text-start'>{movie.Plot}</span>

                        <div className='flex mt-3'>
                            <div className='flex items-center mr-5'>
                                <img className='w-6 mr-1' src='../src/assets/tomato.png' />
                                <span className='text-xs font-poppins font-semibold'>{rotten}</span>
                            </div>
                            <div className='flex items-center ml-5'>
                                <img className='w-6 mr-1' src='../src/assets/IMDB.png' />
                                <span className='text-xs font-poppins font-semibold'>{movie.imdbRating}</span>
                            </div>

                            <div className='flex items-center'>
                                <span className='mr-1 ml-7 text-xs text-gray-500'>Year</span>
                                <span className=' text-sm font-poppins ml-1 text-start'>{movie.Year}</span>
                            </div>

                        </div>
                        <Link to={`/movies/${movie.imdbID}`}>
                           <div className='flex justify-around'>
                             <button onClick={handleClick}
                                     className='bg-teal-950 text-white w-20 mt-4 p-1 rounded-lg shadow-lg hover:shadow-xl'>Open</button>
                           </div>
                        </Link>
                        
                        <span onClick={hideData} className=' block text-xs text-end mr-2 text-gray-500 hover:text-gray-600 cursor-pointer'>hide</span>
                    </div>
                                           {/* invisible part of movie card -----end------- */}
                </div>
                                         {/* Card container -------end-------- */}
            </div>
        </div>
    )
}

export default MovieCard;