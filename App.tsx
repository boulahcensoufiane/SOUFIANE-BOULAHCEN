import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Tours } from './components/Tours';
import { Destinations } from './components/Destinations';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="text-[#4A3728] bg-[#fefefe] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Tours />
        <Destinations />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;