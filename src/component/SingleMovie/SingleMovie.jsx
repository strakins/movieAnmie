// import React from 'react'

// import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"

const SingleMovie = () => {

    // const [items, setItems] = useState([]);
    const {id} = useParams();
    console.log(id)

    // useEffect(() => {
    //   // setLoading(true);
    //   fetch(`` + id, {
    //     method: "GET",
    //   })
    //     .then((res) => res.json())
    //     .then((ticketItem) => {
    //       setItems(ticketItem);
    //       // setLoading(false);
    //     });
    // }, []);


  return (
    <div className="bg-slate-800 h-screen text-white pt-10 ml-20 text-2xl">
      <Link to='/' className="text-sm bg-blue-300 w-fit p-2 rounded-lg">Home</Link>
      {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" className='w-[100%] h-[100%]' /> */}
      <div className="mt-5">
        Movie {id}
      </div>

    </div>
  )
}

export default SingleMovie