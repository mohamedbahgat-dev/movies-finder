import {useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMessageStore } from '../../store/useMessageStore'
import { fetchTmdbQuery} from '../../services/tmdbServices'


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
        }, 1000)
  }

  return (
       <div>
          <div className='search-backdrop flex flex-nowrap items-center h-[380px] text-white font-poppins w-screen  relative'>
          {/* input data form -- start-- */}
              <div className='absolute flex flex-col ml-20 mt-10 font-nunito font-semibold'>
                <h1 className='top-52 text-4xl'>Explore your Passion.</h1>
                <h1 className='top-64 text-2xl'>Search for your favorite show among millions of shows.</h1>
              </div>
                
              <form  onSubmit={handleSubmit} className=' flex bg-gray-100 mt-60 ml-20 rounded-3xl' >
                <input className='mx-3 px-2 bg-gray-100 text-gray-700 rounded-xl focus:outline-none placeholder:font-nunito w-64 sm:w-[500px] md:w-[400px] lg:w-[500px] xl:w-[800px]'
                type='text'
                id='title'
                ref={queryRef}
                placeholder='Search for Movies, TV shows or People'
                onChange={(event) => setQuery(() => event.target.value)}
              />

                <button 
                className=" text-black bg-sky-500 p-1 h-12 px-4 rounded-3xl" type='submit'>
                  Search
                </button>
            </form>
          </div>
          {/* input data form -- end -- */}

       </div>
  )


}

export default SearchBar