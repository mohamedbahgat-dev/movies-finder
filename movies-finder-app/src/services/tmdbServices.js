
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
