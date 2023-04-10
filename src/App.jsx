import React from 'react';
import Navbar from './component/NavBar/Navbar';
import Home from './component/Home/Home';
import Events from './component/Events/Events';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Donate from './component/Donate/Donate';
import Portfolio from './component/portfolio/portfolio';
import './component/NavBar/Navbar.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar name='nav' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;