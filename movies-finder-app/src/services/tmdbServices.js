
// fetch by Query
export const fetchTmdbQuery = (query) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}


//fetch by title and show type
export const fetchTmdbByTitle = (title, type) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/search/${type}?query=${title}&language=en-US&page=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

//fetch by title, show type and released year
export const fetchTmdbByTitleAndYear = (title, type, year) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/search/${type}?query=${title}&language=en-US&page=1&year=${year}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}


// fetch by imdbId 
export const fetchTmdbByimdbId = (imdbId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchMovieTrailer = (showId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/movie/${showId}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchTvTrailer = (showId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/tv/${showId}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchPopularMovies = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchPopularTV = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchTrendingDay = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchTrendingWeek = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchTrendingPersons = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/trending/person/week?language=en-US', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchPlayingMovies = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchOnAirTv = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchAiringToday = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchUpcomingMovies = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchTopRatedMovies = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchTopRatedTv = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

 // request movie/tv details
export const fetchMovieDetails = (movieId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

export const fetchTvDetails = (seriesId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}
 
// request movie credits
export const fetchMovieCredits = (movieId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request movie credits
export const fetchTvCredits = (seriesId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/tv/${seriesId}/credits?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request movie images
export const fetchMovieImages = (movieId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request Tv images
export const fetchTvImages = (seriesId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/tv/${seriesId}/images`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request movie videos
export const fetchMovieVideos = (movieId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request Tv videos
export const fetchTvVideos = (seriesId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/tv/${seriesId}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request movie reviews
export const fetchMovieReviews = (movieId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request Tv reviews
export const fetchTvReviews = (seriesId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/tv/${seriesId}/reviews?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request movie reviews
export const fetchMovieRecommendations = (movieId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request Tv reviews
export const fetchTvRecommendations = (seriesId) => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch(`https://api.themoviedb.org/3/tv/${seriesId}/recommendations?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request trend movies by day 
export const fetchTrendingMoviesDay = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=2', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request trend movies by week reviews
export const fetchTrendingMoviesWeek = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request trend tv by day reviews
export const fetchTrendingTvDay = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}

// request trend tv by day reviews
export const fetchTrendingTvWeek = () => {

    let apiTocken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk1ZjQyNGJiM2FjYjlkMWI5YzhjYWZkYTY0Mjk2MiIsIm5iZiI6MTczMzQyOTA5MC4zNjA5OTk4LCJzdWIiOiI2NzUyMDc2MjgwZTViOGYwYTc1NjFjMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.50RA6LIsEcB9qqJ94wZMA3BeFeHfbHWmK9vDVC4iuuU';

    return (
        fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': apiTocken,
            }
        })
    )
}