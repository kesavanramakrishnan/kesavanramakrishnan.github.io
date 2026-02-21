import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
