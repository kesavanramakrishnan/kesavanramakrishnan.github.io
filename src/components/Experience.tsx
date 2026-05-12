const experiences = [
  {
    role: "Research Intern (Incoming)",
    company: "Together AI, Frontier Performance Team",
    date: "Summer 2026",
    location: "San Francisco, CA",
    description: []
  },
  {
    role: "Research Intern",
    company: "AMD Research & Development",
    date: "June 2025 – December 2025",
    location: "San Jose, CA",
    description: [
      "Implemented a Stream-K style, work-centric backward pass for attention, inspired by Lean Attention, to resolve work-imbalance and improve performance for long-sequence LLMs on current and future Instinct GPUs.",
      "Optimized the Lean Attention forward pass to significantly boost GPU throughput for long-sequence models.",
      "Enhanced memory access patterns by implementing advanced kernel techniques, including memory swizzling.",
      "Tuned kernel launch parameters for the CDNA architecture to maximize occupancy and execution efficiency."
    ]
  },
  {
    role: "Undergraduate Researcher",
    company: "Stanford Artificial Intelligence Lab",
    date: "March 2025 – Present",
    location: "Stanford, CA",
    description: [
      "Researching LLM-driven approaches for hardware-aware GPU kernel performance optimization.",
      "Developing techniques for cross-architecture kernel porting and transpilation using large language models.",
      "Building tools that leverage LLMs to reason about low-level hardware constraints for high-performance kernel generation."
    ]
  },
  {
    role: "Computer Science Teaching Assistant",
    company: "Stanford University: CS 198",
    date: "December 2024 – Present",
    location: "Stanford, CA",
    description: [
      "Teaching assistant for Stanford's largest introductory programming class in Python (CS 106A/106B).",
      "Hosted weekly sections for students and debugged students' programs during weekly office hours (LaIR).",
      "Graded weekly assignments, held interactive feedback sessions w/ students to provide a better learning experience."
    ]
  },
  {
    role: "Web Development Intern",
    company: "California Department of Technology",
    date: "June 2023 – July 2023",
    location: "Sacramento, CA",
    description: [
      "Worked under Data and Geospatial services + Web Development teams on developing state website services.",
      "Developed websites with data visuals based on federal databases recording poverty and crime rates.",
      "Utilized frameworks such as OpenStreetMap and Leaflet, and mapping softwares, including ESRI and ArcGIS."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-lg font-semibold mb-3">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline gap-4">
              <p><span className="font-semibold">{exp.company}</span><span className="text-light/70">, {exp.role}</span></p>
              <p className="text-sm text-light/60 whitespace-nowrap">{exp.date}</p>
            </div>
            {exp.description.length > 0 && (
              <ul className="mt-2 space-y-1 text-light/80 text-sm list-disc pl-5">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
