const publications = [
  {
    title: "SwizzlePerf: Hardware-Aware LLMs for GPU Kernel Performance Optimization",
    authors: "Arya Tschand, Muhammad Awad, Ryan Swann, Kesavan Ramakrishnan, Jeffrey Ma, Keith Lowery, Ganesh Dasika, Vijay Janapa Reddi",
    venue: "Spotlight Paper, NeurIPS 2025 ML for Systems Workshop",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2508.20258" }
    ]
  },
];

const Publications = () => {
  return (
    <section id="publications" className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-light mb-16">Publications</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {publications.map((pub, index) => (
            <div key={index} className="border-l-2 border-accent pl-8">
              <h3 className="text-2xl font-bold text-light">{pub.title}</h3>
              <p className="text-light/80 mt-2">{pub.authors}</p>
              {pub.venue && <p className="text-accent font-semibold mt-2">&#9733; {pub.venue}</p>}
              <div className="flex flex-row space-x-4 mt-4">
                {pub.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
