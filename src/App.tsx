import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import Stats from './components/Stats';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Stats />
      <Process />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}
