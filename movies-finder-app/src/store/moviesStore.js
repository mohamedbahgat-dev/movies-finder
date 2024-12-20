import { create } from "zustand";

export const useMovieStore = create(set => ({
    movies: [],
    favorites: [],
    addToLibrary: (newMovie) => set(state => ({movies: [...state.movies, newMovie]})),
    setLibraryMovies : (movies)=> set({movies: movies}),
    MarkAsFavorite: (id) => set(state => ({movies: state.movies.map(movie => movie.id || movie.imdbID === id ? {...movie, favorite: true}: movie)})),
    UnMarkFavorite: (id) => set(state => ({movies: state.movies.map(movie => movie.id || movie.imdbID === id ? {...movie, favorite: false}: movie) }) ),
   
}))