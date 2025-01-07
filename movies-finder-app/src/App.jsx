import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MoviesLibrary from './components/Library/MoviesLibrary';
import HomePage from './components/Home/HomePage';
import Layout from './components/Layout';
import Trendings from './components/Trending/Trendings';
import MovieDetails from './components//Featured/MovieDetails';
import SearchResults from './components/Search/SearchResults';
import ShowDetails from './components/Search/ShowDetails';
import TrendingDetails from './components/Trending/TrendingDetails';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element= {<HomePage />}/>            
            <Route path='movies/:movieId' element= {<MovieDetails />} />
            <Route path='library' element= {<MoviesLibrary />} />
            <Route path='explore' element= {<SearchResults />} />
            <Route path='trending' element= {<Trendings />} />
            <Route path='show/:movieId' element= {<ShowDetails />} />
            <Route path='trendings/:trendId' element= {<TrendingDetails />} />       
            <Route path='*' element={<div>Not found</div>} />
          </Route>
        </Routes>
      </Router>
       
    </>
  )
}

export default App;
