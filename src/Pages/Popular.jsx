// import React from 'react'
import MovieList from "../component/MovieList/MovieList";
import Fire from '../assets/fire.png'


const Popular = () => {
  return (
     <MovieList type="popular" title="Popular" emoji={Fire} /> 
  )
}

export default Popular