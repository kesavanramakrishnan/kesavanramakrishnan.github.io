const experiences = [
  {
    role: "AI/ML Systems Research Intern",
    company: "AMD Research & Development",
    date: "June 2025 – Present",
    location: "San Jose, CA",
    description: [
      "Implemented a Stream-K style, work-centric backward pass for attention, inspired by Lean Attention, to resolve work-imbalance and improve performance for long-sequence LLMs on current and future Instinct GPUs.",
      "Optimized the Lean Attention forward pass to significantly boost GPU throughput for long-sequence models.",
      "Enhanced memory access patterns by implementing advanced kernel techniques, including memory swizzling.",
      "Tuned kernel launch parameters for the CDNA architecture to maximize occupancy and execution efficiency."
    ]
  },
  {
    role: "ML Systems Researcher",
    company: "Stanford Artificial Intelligence Lab",
    date: "March 2025 – Present",
    location: "Stanford, CA",
    description: [
      "Conducted research on Domain-Specific Languages (DSLs) for high-performance GPU programming."
    ]
  },
  {
    role: "Computer Science Teaching Assistant",
    company: "Stanford University: CS 198",
    date: "December 2024 – Present",
    location: "Stanford, CA",
    description: [
      "Teaching assistant for Stanford’s largest introductory programming class in Python (CS 106A/106B).",
      "Hosted weekly sections for students and debugged students’ programs during weekly office hours (LaIR).",
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
    <section id="experience" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-light mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-8">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-light">{exp.role}</h3>
                <p className="text-md font-medium text-light/70">{exp.date}</p>
              </div>
              <div className="flex justify-between items-baseline mb-4">
                <p className="text-lg font-semibold text-light/90">{exp.company}</p>
                <p className="text-md font-medium text-light/70">{exp.location}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-light/80 hanging-indent">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 