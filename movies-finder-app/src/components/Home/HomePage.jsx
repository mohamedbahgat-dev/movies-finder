import SearchBar from '../Explore/SearchBar'
import HomeNavBar from '../Header/NavBar'
import FeatureMoviesHeader from './FeatureMoviesHeader'
import { Outlet } from 'react-router-dom'
import TrendingPosters from '../Trending/TrendingPosters'
import TtrendingCardsHeader from '../Trending/TrendingCardsHeader'

function HomePage() {


  return (

    <div>
         <HomeNavBar />
         <SearchBar />  
         <FeatureMoviesHeader />    
         <Outlet />
         <TrendingPosters />
        
       
         
        

        
        
            
    </div>

  )
}

export default HomePage