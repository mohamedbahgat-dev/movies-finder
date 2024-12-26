import React from 'react'
import FeaturedMoviesCard from '../Home/FeaturedMoviesCard'
import SearchBar from '../Explore/SearchBar'
import HomeNavBar from '../Header/NavBar'
import FeatureMoviesHeader from './FeatureMoviesHeader'
import { Outlet } from 'react-router-dom'

function HomePage() {


  return (

    <div>
         <HomeNavBar />
         <SearchBar />  
         <FeatureMoviesHeader /> 
         <Outlet />
        
    </div>

  )
}

export default HomePage