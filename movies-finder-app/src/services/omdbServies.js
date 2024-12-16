import axios from 'axios'

export const fetchMovieByTitle = (title) => {

    return (
        axios.get(`http://www.omdbapi.com/?t=${title.replaceAll(' ', '+')}&plot=full&apikey=977895db`)
    )
}

export const fetchMovieByTitleAndYear = (title, year) => {

    return (
        axios.get(`http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=977895db`)
    )
}

