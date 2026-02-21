const About = () => {
  return (
    <section id="about" className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-light mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-light/80 space-y-6">
          <p>
            I'm an EECS student at Stanford interested in ML systems. My current research at the Stanford AI Lab focuses on using LLMs for hardware-aware GPU kernel optimization and cross-architecture kernel porting (transpilation). I'm exploring how language models can reason about low-level hardware constraints to generate and optimize high-performance GPU kernels across different architectures.
          </p>
          <p>
            Previously, I was an AI/ML Research Intern at AMD Research, where I worked on optimizing attention kernels for LLMs on AMD GPUs, specifically targeting load balancing attention. There, I also worked on <em>SwizzlePerf</em>, an LLM-driven system to target spatial optimization for AMD GPUs.
          </p>
          <p>
            Ultimately, I'm very interestd in low-level systems and understanding the foundations of hardware and software, to better reason about how we can build better AI systems from the ground up.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About; 