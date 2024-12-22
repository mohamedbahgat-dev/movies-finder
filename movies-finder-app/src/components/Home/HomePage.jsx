import React from 'react'
import FeaturedMoviesCard from '../Home/FeaturedMoviesCard'
import { useMovieStore } from '../../store/moviesStore'
import { Link } from 'react-router-dom'
import { fetchTmdbByimdbId } from '../../services/tmdbServices'
import SearchBar from '../Explore/SearchBar'

function HomePage() {


  return (

    <div>
         <SearchBar />   
        <FeaturedMoviesCard />
    </div>

  )
}

export default HomePage