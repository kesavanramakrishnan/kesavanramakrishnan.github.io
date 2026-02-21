const Header = () => {
  return (
    <header className="bg-primary/80 backdrop-blur-md fixed top-0 left-0 right-0 z-10 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-light">Kesavan Ramakrishnan</a>
          <ul className="flex items-center space-x-8">
            <li><a href="#about" className="text-light/70 hover:text-light transition-colors">About</a></li>
            <li><a href="#experience" className="text-light/70 hover:text-light transition-colors">Experience</a></li>
            <li><a href="#publications" className="text-light/70 hover:text-light transition-colors">Publications</a></li>
            <li><a href="#projects" className="text-light/70 hover:text-light transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-light/70 hover:text-light transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 