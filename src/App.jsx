import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import ImgGrid from './components/ImgGrid';
import Search from './components/Search';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

import './index.css'

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <ImgGrid />
      <Search />
      <Experiences />
      <Footer />
    </>
  )
}

export default App
