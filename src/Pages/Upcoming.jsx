// import React from 'react'
import MovieList from "../component/MovieList/MovieList";
import Party from '../assets/partying-face.png'

const Upcoming = () => {
  return (
    <MovieList type="upcoming" title="Upcoming" emoji={Party} /> 
  )
}

export default Upcoming