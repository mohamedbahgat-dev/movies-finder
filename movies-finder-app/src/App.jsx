import NavBar from './components/navBar'
import MoviesCard from './components/MoviesCard'
import SearchResult from './components/SearchResult';
import Snackbar from './components/Snackbar';
import MoviesLibrary from './components/MoviesLibrary';

function App() {

  return (
    <>
      <div>
        <NavBar />

        <SearchResult />
        <MoviesLibrary />
        <Snackbar />
        <MoviesCard />
      </div>
    </>
  )
}

export default App;
