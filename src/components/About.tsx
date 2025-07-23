const About = () => {
  return (
    <section id="about" className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-light mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-light/80 space-y-6">
          <p>
            I'm an EECS student at Stanford interested in ML systems. Right now, I'm an AI/ML Research Intern at AMD Research, working on GPU optimization. My main focus is on making large language models run more efficiently, which involves a lot of work with low-level kernel performance and memory access patterns, as well as looking into work-centric styles of partitioning work. 
          </p>
          <p>
            I'm driven by the challenge of bridging the gap between cutting-edge AI research and practical, real-world deployment. This has led me to explore everything from high-performance computing and custom kernel development to the architectural nuances of modern hardware.
          </p>
           <p>
            Ultimately, I'm excited to contribute to a future where powerful AI is not just a concept, but an accessible and efficient tool that can be used by anyone, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 