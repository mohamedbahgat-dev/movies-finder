
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