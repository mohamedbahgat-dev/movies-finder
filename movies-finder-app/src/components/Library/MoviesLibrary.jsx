import { useMovieStore } from "../../store/moviesStore";


function MoviesLibrary() {

    const movies = useMovieStore(state => state.movies)
    const favorites = useMovieStore(state => state.favorites)

   

  return (

    <div>MoviesLibrary</div>
  )
}

export default MoviesLibrary