import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { fetchMovieByTitle, fetchMovieByTitleAndYear } from '../services/omdbServies'

function SearchResult() {

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [movie, setMovie] = useState([])
  const [error, setError] = useState('')

  const titleRef = useRef(null)
  const yearRef = useRef(null)

  const getMovieData = async () => {

    try {
      if (!year) {
        await fetchMovieByTitle(title)
          .then(response => {
            if (response.data.Response === 'False') {
              setError('Movie not found')
            } else {
              setMovie(response.data)
            }
          })
      }

      else if (!title) {
        setError('Title can not be empty')
      }

      else {
        await fetchMovieByTitleAndYear(title, year)
          .then(response => {
            if (response === 'False') {
              setError('Movie not found')
            } else {
              setMovie(response.data)
            }
          })

      }

    } catch (error) {
      setError(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovieData()
    titleRef.current.value = ''
    yearRef.current.value = ''

  }

  console.log(movie)

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
        <button className=" mr-2" type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0ea5e9" className="size-9">
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
      {/* input data form -- end -- */}

      <div className='flex justify-center'>
        <div className='w-[500px] flex mt-20 mb-10 mx-16 bg-gray-200 rounded-xl overflow-hidden drop-shadow-lg'>
          <img className='w-48' src={movie.Poster} alt='movie poster' />
          <div className='m-5'>
            <h2 className='font-poppins mb-2 font-semibold'>{movie.Title}<span className='ml-2 font-normal text-sm'>{movie.Type}</span></h2>
            <span>Language: {movie.Language}</span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default SearchResult