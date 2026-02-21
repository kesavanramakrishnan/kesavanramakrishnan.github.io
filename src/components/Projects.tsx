const projects = [
  {
    title: "Power Lever",
    badge: "TreeHacks 2026 Winner",
    description: "An intelligent GPU routing platform that reduces LLM inference energy consumption by up to 75% by dynamically dispatching prompts to right-sized GPU hardware based on complexity, using speculative decoding and Claude-powered routing.",
    link: "https://github.com/kesavanramakrishnan/power-lever"
  },
  {
    title: "TreeCycle",
    description: "A VR application that uses immersive visualization and interactive gameplay to teach kids about recycling and its environmental impact. Built with Swift, Python, and a YOLO ML model.",
    link: "https://github.com/FeoluK/TreeCycle"
  },
  {
    title: "Hybrid SwinUNet for MRI Reconstruction",
    description: "Designed a hybrid SwinUNet for MRI reconstruction using the fastMRI dataset, improving PSNR and SSIM.",
    poster: "/Accelerated MRI Reconstruction SwinUNet Poster.pdf",
    paper: "/Accelerated MRI Reconstruction with SwinUNet.pdf"
  },
  {
    title: "Web Games",
    description: "A collection of web games demonstrating mastery of different computer science fundamentals and unique algorithms.",
    link: "https://github.com/kesavanramakrishnan/web_games"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-light mb-12">Recent Work</h2>
        <div className="flex overflow-x-auto space-x-8 py-4">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-96 bg-primary rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="flex-grow">
                {project.badge && (
                  <span className="inline-block bg-accent text-light text-sm font-bold px-3 py-1 rounded-full mb-3">
                    {project.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-light mb-4">{project.title}</h3>
                <p className="text-light/80 mb-6">{project.description}</p>
              </div>
              {project.poster && project.paper ? (
                <div className="flex flex-row space-x-4 mt-auto">
                  <a href={project.poster} target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Poster</a>
                  <a href={project.paper} target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Paper</a>
                </div>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline mt-auto">
                  See Project &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
