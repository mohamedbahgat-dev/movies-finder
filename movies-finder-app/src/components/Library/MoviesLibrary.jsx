import { useMovieStore } from "../../store/moviesStore";
import HomeNavBar from "../Header/NavBar";


function MoviesLibrary() {

    const movies = useMovieStore(state => state.movies)
    const favorites = useMovieStore(state => state.favorites)

   

  return (

      <div>
        <HomeNavBar />
        <div>My library</div>
      
      </div>
  )
}

export default MoviesLibrary