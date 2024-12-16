import NavBar from './components/navBar'
import MoviesCard from './components/MoviesCard'
import SearchResult from './components/SearchResult';


function App() {
  
  return (
    <> 
      <div>
        <NavBar />
        <SearchResult />
        <MoviesCard />
      </div>
    </>
  )
}

export default App;
