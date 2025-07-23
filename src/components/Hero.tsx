import ProfilePic from '../assets/Profile_pic.JPG';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Hero = () => {
  return (
    <section className="bg-secondary pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="md:order-2">
            <img
              src={ProfilePic}
              alt="Kesavan Ramakrishnan"
              className="w-64 h-64 rounded-lg shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:order-1 text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-light leading-tight">
              EECS Student at Stanford
            </h1>
            <p className="mt-6 text-xl text-light/80 max-w-lg">
              Passionate about the applications of AI and developing efficient, scalable machine learning systems.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/kesavanramakrishnan" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-light transition-colors">
                <GitHubIcon className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/kesavan-ramakrishnan/" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-light transition-colors">
                <LinkedInIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 