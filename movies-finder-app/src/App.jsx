import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesLibrary from './components/Library/MoviesLibrary';
import HomePage from './components/Home/HomePage';
import Layout from './components/Layout';
import Explore from './components/Explore/Explore';
import TrendMovies from './components/Trending/TrendMovies';
import MovieDetails from './components/MovieDetails';
import SearchResults from './components/Search/SearchResults';
import ShowDetails from './components/Search/ShowDetails';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element= {<HomePage />}/>
            <Route path='movies/:movieId' element= {<MovieDetails />} />
            <Route path='library' element= {<MoviesLibrary />} />
            <Route path='explore' element= {<Explore />} />
            <Route path='trending' element= {<TrendMovies />} />
            <Route path='search' element= {<SearchResults />} />
            <Route path='show/:movieId' element= {<ShowDetails />} />
            
            <Route path='*' element={<div>Not found</div>} />

          </Route>
        </Routes>
      </Router>
       
    </>
  )
}

export default App;
