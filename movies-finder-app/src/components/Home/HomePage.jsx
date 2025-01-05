import SearchBar from '../Explore/SearchBar'
import HomeNavBar from '../Header/NavBar'
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
         <TrendingAllCards />
         <TrendingPosters />
         <PopularCards />       
         <StreamingCards />
         <ExploreCards />
         <Footer />                         
    </div>

  )
}

export default HomePage