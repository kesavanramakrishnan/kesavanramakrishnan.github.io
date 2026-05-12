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
    description: "A collection of web games I made when I was young and bored.",
    link: "https://github.com/kesavanramakrishnan/web_games"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-lg font-semibold mb-3">Projects</h2>
      <div className="space-y-5">
        {projects.map((project, index) => (
          <div key={index}>
            <p>
              <span className="font-semibold">{project.title}</span>
              {project.badge && <span className="text-light/60"> — {project.badge}</span>}
            </p>
            <p className="text-sm text-light/80 mt-1">{project.description}</p>
            <p className="text-sm mt-1 space-x-3">
              {project.poster && project.paper ? (
                <>
                  <a href={project.poster} target="_blank" rel="noopener noreferrer" className="underline hover:text-light text-light/80">poster</a>
                  <a href={project.paper} target="_blank" rel="noopener noreferrer" className="underline hover:text-light text-light/80">paper</a>
                </>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-light text-light/80">link</a>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
