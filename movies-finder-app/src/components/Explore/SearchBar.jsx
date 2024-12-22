import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMessageStore } from '../../store/useMessageStore'
import { fetchTmdbQuery} from '../../services/tmdbServices'
import { useMovieStore } from '../../store/moviesStore'

function SearchBar() {

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const queryRef = useRef(null)
  let navigate = useNavigate()
  localStorage.setItem('search-results', JSON.stringify(movies))
 
  // fetching data from API
  const getMovieData = async () => {

    try {
      await fetchTmdbQuery(query)
           .then(response => {
                  if (!response.ok) {
                  useMessageStore.getState().setMessage('Movie not found', 'Error')
               }
                  return response.json()
          }).then(data => { setMovies(data['results']) })       

    } catch (error) {
      useMessageStore.getState().setMessage('Movie not found', 'Error')
    }
  }

  // submitting function to 
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovieData()
    queryRef.current.value = ''

    setTimeout(() => {
            setTimeout(navigate("/search"));
        }, 800)
    ;
  }

  return (
       <div>
          <div className='search-backdrop flex justify-center mb-10 text-white font-poppins items-center w-screen h-96 relative'>
          {/* input data form -- start-- */}
              <h1 className='absolute top-24 left-[280px] font-nunito text-5xl font-semibold'>Explore your Passion.</h1>
              <h1 className='absolute top-36 left-[280px] font-nunito text-3xl font-semibold'>Search for your favorite show among millions of shows.</h1>

              <form  onSubmit={handleSubmit} className='bg-gray-100 mt-24 rounded-xl' >
                <input className='w-[800px] h-12 mx-3 px-2 bg-gray-100 text-gray-700 rounded-lg focus:outline-none placeholder:font-nunito'
                type='text'
                id='title'
                ref={queryRef}
                placeholder='Search for Movies, TV shows or People'
                onChange={(event) => setQuery(() => event.target.value)}
              />

                <button 
                className=" text-black bg-teal-500 p-1 h-12 px-4 rounded-xl" type='submit'>
                  Search
                </button>
            </form>
          </div>
          {/* input data form -- end -- */}

       </div>
  )


}

export default SearchBar