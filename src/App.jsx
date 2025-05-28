import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import Service from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Service />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
