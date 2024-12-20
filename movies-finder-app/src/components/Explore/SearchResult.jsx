import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useMessageStore } from '../../store/useMessageStore'
import { fetchTmdbByTitle, fetchTmdbByTitleAndYear } from '../../services/tmdbServices'
import { useMovieStore } from '../../store/moviesStore'

function SearchResult() {

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [movies, setMovies] = useState([])
  const [type, setType] = useState('')

  
  const titleRef = useRef(null)
  const yearRef = useRef(null)
  
  
  const getMovieData = async () => {

    try {
      if (!year) {
        await fetchTmdbByTitle(title,type)
          .then(response => {
            if (!response.ok) {
              useMessageStore.getState().setMessage('Movie not found', 'Error')
            }
            return response.json()

          }).then(data => { setMovies(data['results']) })       
      }

      else if (!title) {
        useMessageStore.getState().setMessage('Movie not found', 'Error')
      }

      else if (year) {
        await fetchTmdbByTitleAndYear(title, type, year)
          .then(response => {
            if (!response.ok) {
              useMessageStore.getState().setMessage('Movie not found', 'Error')
            }
            return response.json()

          }).then(data => { setMovies(data['results']) })
            
      }

    } catch (error) {
      useMessageStore.getState().setMessage('Movie not found', 'Error')
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    getMovieData()
    titleRef.current.value = ''
    yearRef.current.value = ''

  }


  
  return (
    <div>
      {/* input data form -- start-- */}
      <form onSubmit={handleSubmit}
        className='flex flex-wrap items-center justify-center font-poppins'>
        <label htmlFor='title'>Title</label>
        <input className='w-40 h-8 mx-3 px-2 bg-gray-100 rounded-lg focus:outline-none placeholder:font-nunito'
          type='text'
          id='title'
          ref={titleRef}
          onChange={(event) => setTitle(() => event.target.value)}
        />

        <label htmlFor='year'>Year</label>
        <input className='w-40 h-8 mx-3 px-2 bg-gray-100 rounded-lg focus:outline-none placeholder:font-nunito'
          type='text'
          id='year'
          ref={yearRef}
          onChange={(event) => setYear(() => event.target.value)}
        />
        
        <label htmlFor='type'>Type</label>
        <select id='type' name='selectType'
                className='w-24 text-center bg-gray-100 rounded-lg mr-3 mx-2 h-8' 
                onChange={(event)=> setType(()=> event.target.value)}
                required >
          <option value=' '></option>
          <option value='movie'>movie</option>
          <option value='tv'>tv</option>
        </select>


        <button className=" mr-2" type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0ea5e9" className="size-9">
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
      {/* input data form -- end -- */}

      {movies &&
      <div className='flex flex-wrap justify-center mt-20 my-10 ' >
        
       {movies.map((movie) => (
          <div className='m-3' key={movie.id}>
            {movie.poster_path && 
             <div className='bg-gray-200 p-5 rounded-lg w-60 '>
              <img className='w-56 h-64 rounded-lg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <span className='block text-center font-thin mt-2'>{movie.title || movie.original_name}</span>
            </div> }
          </div>
        ))}
      </div> 
     }
    </div>
  )
}

export default SearchResult