import { create } from "zustand";

export const useMovieStore = create(set => ({
    movies: [],
    favorites: [],
    addToLibrary: (newMovie) => set(state => ({movies: [...state.movies, newMovie]})),
    setMovies : (movies)=> set({movies}),
    addFavorites: (movieId) => set((state) =>({
        favorites: state.movies.map(movie => movie.id===movieId && {...movie, favorite: movie.favorite})
    }) )
    
}))