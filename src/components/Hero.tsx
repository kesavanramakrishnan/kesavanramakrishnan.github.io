import ProfilePic from '../assets/Profile_pic.JPG';

const Hero = () => {
  return (
    <section className="flex items-start gap-6">
      <img
        src={ProfilePic}
        alt="Kesavan Ramakrishnan"
        className="w-24 h-24 object-cover"
      />
      <div>
        <h1 className="text-2xl font-bold">Kesavan Ramakrishnan</h1>
        <p className="text-light/70 mt-1"><span className="text-light/90">CS + EE</span> student at Stanford</p>
        <p className="text-light/60 mt-1 text-sm">kesavanr at stanford dot edu</p>
        <p className="text-light/70 mt-3 text-sm space-x-4">
          <a href="https://github.com/kesavanramakrishnan" target="_blank" rel="noopener noreferrer" className="underline hover:text-light">github</a>
          <a href="https://www.linkedin.com/in/kesavan-ramakrishnan/" target="_blank" rel="noopener noreferrer" className="underline hover:text-light">linkedin</a>
          <a href="https://scholar.google.com/citations?user=aINWJroAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="underline hover:text-light">scholar</a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
