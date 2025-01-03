import SearchBar from '../Explore/SearchBar'
import HomeNavBar from '../Header/NavBar'
import FeatureMoviesHeader from '../Featured/FeatureMoviesHeader'
import { Outlet } from 'react-router-dom'
import TrendingPosters from '../Trending/TrendingPosters'
import PopularCards from '../Popular/PopularCards'
import TrendingAllCards from '../TrendingAll/TrendingAllCards'
import StreamingCards from '../Streaming/StreamingCards'
import ExploreCards from '../Explore/ExploreCards'
import Footer from '../Footer/Footer'

function HomePage() {


  return (

    <div>
         <HomeNavBar />
         <SearchBar />  
         <FeatureMoviesHeader />    
         <Outlet />
         <TrendingPosters />
         <PopularCards />
         <TrendingAllCards />
         <StreamingCards />
         <ExploreCards />
         <Footer />
                          
    </div>

  )
}

export default HomePage