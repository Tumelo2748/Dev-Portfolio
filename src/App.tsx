import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import AnimatedBackground from './components/AnimatedBackground';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <div className="container">
          <section id="hero">
            <Hero />
          </section>
          <Skills />
          <Projects />
          <Education />
          {/* <Experience/> */}
          <Contact/>
          {/* <Resume /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
