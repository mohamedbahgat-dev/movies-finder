import { useState, useEffect, useRef } from 'react'


function MovieCard(props) {

    const [movie, setMovie] = useState('')
    const [rotten, setRotten] = useState('')

    const dataRef = useRef(null)
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    
    useEffect(() => {
        setMovie(props.movie)
        let rottenValue = props.movie.Ratings.filter((rate) => rate.Source === 'Rotten Tomatoes')[0]
        if (rottenValue) {
            setRotten(rottenValue.Value)
        } else {
            setRotten('N/A')
        }
    }, [])

    const displayData = () => {
        dataRef.current.className = [...['block animate-fadeIn m-2']]
        titleRef.current.className = 'hidden'
        imageRef.current.className = [...['w-60 h-40 object-cover rounded-2xl shadow-xl cursor-pointer mb-3']]
    }

    const hideData = () => {
        dataRef.current.className = 'hidden'
        titleRef.current.className = 'block'
        imageRef.current.className = [...['w-60 h-80 object-cover rounded-2xl shadow-xl cursor-pointer mb-3']]
    }

    const MarkAsFaforite = (e)=> {

        if (e.currentTarget.classList.contains('fill-current')){
            e.currentTarget.classList.remove('fill-current')

        } else {
            e.currentTarget.classList.add('fill-current')
            const movieId = e.target.dataset.movieid
            console.log(movieId)
        }    
    }


    return (
        <div>
            <div>
                <div id='card-container'
                    className='m-10 p-2 text-center w-60 h-auto bg-teal-100 rounded-2xl drop-shadow-lg'>
                    {/* visible part of movie card */}
                    <div>
                        <img id='movie-image'
                            className='w-60 h-80 object-cover rounded-3xl shadow-xl cursor-pointer mb-3 relative'
                            src={movie.Poster} alt='movie poster'
                            ref={imageRef}
                            onClick={displayData} />

                        <div className='absolute top-3 right-3.5 bg-gray-600 p-1.5 rounded-full opacity-90'>
                            <svg id='star' data-movieid = {movie.imdbID}
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-yellow-200  cursor-pointer" onClick={MarkAsFaforite}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                
                        <span id='card-title'
                            className=' inline-block text-gray-700 font-bold uppercase'
                            ref={titleRef}
                            >{movie.Title}
                        </span>
                    </div>

                    {/* invisible part start */}
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
                        <div className='flex justify-around'>
                            <button className='bg-teal-950 text-white w-20 mt-4 p-1 rounded-lg shadow-lg hover:shadow-xl'>Open</button>
                        </div>
                        <span onClick={hideData} className=' block text-xs text-end mr-2 text-gray-500 hover:text-gray-600 cursor-pointer'>hide</span>
                    </div>
                    {/* invisible part end */}
                </div>
            </div>
        </div>
    )
}

export default MovieCard