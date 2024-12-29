import { create } from "zustand";

export const useMovieStore = create(set => ({
    movies: [],
    favorites: [],
    trendings:[],
    trailers: [],
    addToLibrary: (newMovie) => set(state => ({movies: [...state.movies, newMovie]})),
    setLibraryMovies : (movies)=> set({movies: movies}),
    setFavorites: (movie) => set({favorites: movie}),
    AddToFavorites: (newMovie) => set((state) => ({favorites: [...state.favorites, newMovie]})),
    setTrendings: (trendings) => set({trendings: trendings }),
    addToTrendings: (newTrend) => set(state => ({trendings: [...state.trending, newTrend]})),
    addToTrailers: (newTrailer) => set((state) => ({trailers: [...state.trailers, newTrailer] }))
   
}))