import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Festival from './components/Festival';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Social from './components/Social';
import PQRS from './components/PQRS';
import Transparency from './components/Transparency';
import Location from './components/Location';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Festival />
        <Gallery />
        <Events />
        <Social />
        <PQRS />
        <Transparency />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
