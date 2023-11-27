// import React from 'react'
import MovieList from "../component/MovieList/MovieList";
import Star from '../assets/glowing-star.png'

const Toprated = () => {
  return (
    <MovieList type="top_rated" title="Top Rated" emoji={Star} />
  )
}

export default Toprated