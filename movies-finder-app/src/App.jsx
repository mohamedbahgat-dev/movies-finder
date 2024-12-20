import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesLibrary from './components/Library/MoviesLibrary';
import HomePage from './components/Home/HomePage';
import Layout from './components/Layout';
import Explore from './components/Explore/Explore';
import TrendMovies from './components/Trending/TrendMovies';
import MovieDetails from './components/MovieDetails';


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
          </Route>
        </Routes>
      </Router>
       
    </>
  )
}

export default App;
