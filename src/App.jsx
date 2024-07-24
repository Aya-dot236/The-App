// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//src/App.js

import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import React from "react";
import Counter from "./components/Counter";
import './App.css';
import Home from "./components/Home";
import Example from './components/Hooks';
const App = () => {
  return (
   
    <Router>
      
<div>

<Navbar />
<Routes>
<Route path = '/' element={<Home />} />
<Route path = '/about' element={<About />} />
<Route path = '/contact' element={<Contact />} />

</Routes>
</div>
</Router>

  );
};
export default App;


