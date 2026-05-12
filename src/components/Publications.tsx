const SELF = "Kesavan Ramakrishnan";

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

const renderAuthors = (authors: string) => {
  const parts = authors.split(SELF);
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <strong className="text-light font-semibold">{SELF}</strong>}
    </span>
  ));
};

const Publications = () => {
  return (
    <section id="publications">
      <h2 className="text-lg font-semibold mb-3">Publications</h2>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index}>
            <p className="font-semibold">{pub.title}</p>
            <p className="text-sm text-light/70 mt-1">{renderAuthors(pub.authors)}</p>
            {pub.venue && <p className="text-sm text-light/70 mt-1"><span className="text-light/90 font-medium">{pub.venue}</span></p>}
            <p className="text-sm mt-1 space-x-3">
              {pub.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-light text-light/80">
                  {link.label}
                </a>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
