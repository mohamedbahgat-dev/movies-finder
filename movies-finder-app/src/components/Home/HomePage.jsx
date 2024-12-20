import React from 'react'
import FeaturedMoviesCard from '../Home/FeaturedMoviesCard'
import { useMovieStore } from '../../store/moviesStore'
import { Link } from 'react-router-dom'
import { fetchTmdbByimdbId } from '../../services/tmdbServices'

function HomePage() {


  return (

    <div>
        <FeaturedMoviesCard />
    </div>

  )
}

export default HomePage