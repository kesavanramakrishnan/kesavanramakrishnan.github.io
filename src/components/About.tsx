const About = () => {
  return (
    <section id="about">
      <h2 className="text-lg font-semibold mb-3">About</h2>
      <div className="space-y-3 text-light/80">
        <p>
          I'm incoming as a Research Intern at <strong className="text-light font-semibold">Together AI</strong> on the <strong className="text-light font-semibold">Frontier Performance</strong> team.
        </p>
        <p>
          I'm a computer science student interested in <strong className="text-light font-semibold">machine learning systems</strong> and <strong className="text-light font-semibold">hardware-software codesign</strong>.
        </p>
        <p>
          I've worked on things like <strong className="text-light font-semibold">LLMs for hardware-aware GPU kernel optimization</strong> and <strong className="text-light font-semibold">cross-architecture kernel transpilation</strong> for porting between architectures and vendors.
        </p>
        <p>
          Previously, I was a Research Intern at <strong className="text-light font-semibold">AMD Research</strong>, where I worked on optimizing attention kernels for LLMs on AMD GPUs, with a focus on load balancing. I also contributed to <em className="text-light font-semibold not-italic">SwizzlePerf</em>, an LLM-driven system for spatial optimization on AMD GPUs.
        </p>
        <p>
          More broadly, I'm interested in how <strong className="text-light font-semibold">systems and models shape each other</strong> — how models can be designed to exploit the hardware beneath them, and vice versa.
        </p>
      </div>
    </section>
  );
};

export default About;
