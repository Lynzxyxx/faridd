import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="project" className="section">
      <div className="container">
        <Reveal><h2 className="center">Projects</h2></Reveal>
        <div className="grid grid-3">
          {site.projects.map((p, i) => {
            const link = (p.link || "").trim();
            return (
              <Reveal key={p.title} delay={i * 80}>
                <article className="card project">
                  <div className="thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={`Thumbnail ${p.title}`} loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View Project</a>
                    ) : (
                      <button type="button" className="btn btn-primary btn-sm" disabled title="Link proyek belum diisi">View Project</button>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
