import { create } from "zustand";

export const useMovieStore = create(set => ({
    movies: [],
    favorites: [],
    addToLibrary: (newMovie) => set(state => ({movies: [...state.movies, newMovie]})),
    setLibraryMovies : (movies)=> set({movies: movies}),
    setFavorites: (movie) => set({favorites: movie}),
    AddToFavorites: (newMovie) => set((state) => ({favorites: [...state.favorites, newMovie]}))
   
}))