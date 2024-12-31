import SearchBar from '../Explore/SearchBar'
import HomeNavBar from '../Header/NavBar'
import FeatureMoviesHeader from '../Featured/FeatureMoviesHeader'
import { Outlet } from 'react-router-dom'
import TrendingPosters from '../Trending/TrendingPosters'
import PopularCards from '../Popular/PopularCards'

function HomePage() {


  return (

    <div>
         <HomeNavBar />
         <SearchBar />  
         <FeatureMoviesHeader />    
         <Outlet />
         <TrendingPosters />
         <PopularCards />
        
       
         
        

        
        
            
    </div>

  )
}

export default HomePage