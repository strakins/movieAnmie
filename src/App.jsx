// import React from 'react'
import "./App.css";
import { Routes, Route } from 'react-router-dom'
// import MovieList from "./component/MovieList/MovieList";
import Navbar from "./component/Navbar/Navbar";
import Popular from "./Pages/Popular";
import Toprated from "./Pages/Toprated";
import Upcoming from "./Pages/Upcoming";
import SingleMovie from "./component/SingleMovie/SingleMovie";
// import Fire from './assets/fire.png';
// import Star from './assets/glowing-star.png';
// import Party from './assets/partying-face.png';

const App = () => {
  return (
    <div className="App font-monserrat bg-slate-800 h-full text-white">
      <Navbar />
      
      <Routes>
        <Route path="/" type="popular" element={ < Popular /> } />
        <Route path="/top_rated" type="top_rated" element={ < Toprated /> } />
        <Route path="/upcoming" type="upcoming" element={ < Upcoming /> } />
        <Route path=":id"  element={ < SingleMovie /> } />
      </Routes>
    </div>
  )
}

export default App
