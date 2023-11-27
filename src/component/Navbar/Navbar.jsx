// import React from 'react'
import { Link } from 'react-router-dom';
import Fire from '../../assets/fire.png';
import Stars from '../../assets/glowing-star.png'
import Face from '../../assets/partying-face.png'
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  return (
    <nav className='md:flex items-center justify-between border-b-2'> 
        <a href="/">
          <h1 className='text-green-500 ml-4 text-xl font-semibold uppercase'>StraksMovie</h1>
        </a>

        <section className='flex mt-1 mb-2'>
            <DarkMode />
            <Link to="/" className='flex items-center text-xs md:text-[14px]  font-semibold ml-4 mr-6 '>Popular  <img  className='w-5 hidden md:block' src={Fire} alt="fire emoji" /> </Link>
            <Link  to="/top_rated" className='flex items-center  text-xs md:text-[14px] font-semibold mr-6'>Top Rated  <img className='w-5 hidden md:block'  src={Stars} alt="star emoji" /> </Link>
            <Link  to="upcoming" className='flex items-center text-xs md:text-[14px]  font-semibold mr-8 '>Upcoming  <img className='w-5 hidden md:block'  src={Face} alt="Face emoji" /> </Link>
        </section>
    </nav>
  )
}

export default Navbar