import { useMovieStore } from "../store/moviesStore";


function MoviesLibrary() {

    const movies = useMovieStore(state => state.movies)
    const addMovies = useMovieStore(state => state.addToLibrary)
    


  return (
    <div>MoviesLibrary</div>
  )
}

export default MoviesLibrary