// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css' 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import React from "react";
import './App.css';
import Home from "./components/Home";
import Example from './components/Hooks';
import Product from "./components/Product";
import Counter from "./components/Counter";


const App = () => {
  return (

    <Router>

      <Navbar />

      <Home />

      <Example />

      <Product />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      

    </Router>

  );
};
export default App;


