import NavBar from './components/navBar'
import MoviesCard from './components/MoviesCard'
import SearchResult from './components/SearchResult';
import Snackbar from './components/Snackbar';


function App() {

  return (
    <>
      <div>
        <NavBar />

        <SearchResult />
        <Snackbar />
        <MoviesCard />
      </div>
    </>
  )
}

export default App;
