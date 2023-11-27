// import React from 'react'
import Star from '../../assets/star.png'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <Link to={`${movie.id}`} className='w-auto h-[400px] relative overflow-hidden rounded-md mb-0 shadow-md transition-all ease-in-out duration-100 hover:scale-[1.05] '>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" className='w-[100%] h-[100%]' />
    
        <div className='absolute top-0 w-[100] h-[100%] flex flex-col justify-end opacity-0 hover:opacity-100 '>
            <div className='bg-gray-500/80 p-2 transition-all ease-in-out duration-100'>
                <h3 className='text-yellow-400 font-semibold'>{movie.title}</h3>
                <div className='flex justify-between text-yellow-400'>
                    <p>10-02-2022</p>
                    <p className='flex items-center'>{movie.vote_average}<img src={Star} alt="" className='h-3 ml-1' /></p>
                </div>
                <p className='text-sm'>{movie.overview.slice(0, 100) + " ..."}</p>
            </div>
        </div>
    </Link>
    
  )
}

export default MovieCard