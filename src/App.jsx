import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Features from './components/Features';
import About from './components/About';
import FAQ from './components/FAQ';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <>
      <div className="ambient-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <Features />
        <About />
        <FAQ />
        <Support />
      </main>
      <Footer />
    </>
  );
}

export default App;
