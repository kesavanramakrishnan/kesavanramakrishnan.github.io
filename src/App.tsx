import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen font-sans text-light">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        <Header />
        <main className="space-y-16">
          <Hero />
          <About />
          <Experience />
          <Publications />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
