// import React from 'react'
import { useEffect, useState } from 'react';
import _ from 'lodash';
import MovieCard from './MovieCard';
import Filters from './Filters';

const MovieList = ({type, title, emoji}) => {

    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([])
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    })

    const fetchMovies = async () => {
       const res =  await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=d4c097d47e920ad3cd4bcd941c02d739`)
        const data = await res.json();
        setMovies(data.results);
        setFilteredMovies(data.results)
    }

    console.log(movies)

    useEffect(() => {
        fetchMovies();
    }, [])

    useEffect(() => {
        if(sort.by !== "default") {
           const sortedMovies =  _.orderBy(filteredMovies, [sort.by], [sort.order])
            setFilteredMovies(sortedMovies)
        }
    }, [sort])

    const handleFilter = rate => {
      if(rate === minRating) {
        setMinRating(0);
        setFilteredMovies(movies)
      } else {
          setMinRating(rate)
    
          const filtered =  movies.filter(movie => movie.vote_average >= rate)
          setFilteredMovies(filtered)
      }

    } 
    
    const handleSort = (e) => {
        const {name, value} = e.target;
        setSort(prev => ({...prev, [name]: value}))
    }

  return (
    <main >
        
        <header className='m-5 md:flex justify-between' id={type}>
            <h2 className='flex items-center text-green-500 text-xl font-semibold'>{title}  <img  className='w-5' src={emoji} alt={`${emoji} icon`} /></h2>
            
            <section className='md:flex gap-5 py-2 md:py-0'>
                <Filters 
                onRatingsClick={handleFilter} 
                minRating={minRating}
                ratings={[8, 7, 6]}
                />
                <select name="by" onChange={handleSort} value={sort.by} id="" className='h-fit text-black rounded-md px-2 py-1.5 mt-3 md:mt-0 mr-3 md:mr-0'>
                    <option value="default">Sort By</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" id="" onChange={handleSort} value={sort.order} className='h-fit text-black rounded-md px-2 py-1.5'>
                    <option value="asc">Asending</option>
                    <option value="desc">Desending</option>
                </select>
            </section>
        </header>


        <section className='p-4 gap-4 grid md:grid-cols-3 lg:grid-cols-5 '>
            {
                filteredMovies.map((movie) => {

                    return < MovieCard key={movie.id} movie={movie}/>
                })
            }
        </section>
    </main>
  )
}

export default MovieList