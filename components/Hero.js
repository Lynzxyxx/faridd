import { Download } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="small">Welcome</p>
          <h1>Hello Everyone, I&apos;m <span className="accent">{site.name}</span></h1>
          <p className="lead">
            Saya pelajar yang tertarik dengan dunia teknologi, desain, dan pengembangan website.
            Saya suka mengubah ide sederhana menjadi halaman web yang rapi dan enak dipakai.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href={site.cv} download className="btn btn-outline"><Download size={18} /> Download CV</a>
          </div>
          <dl className="stats">
            {site.stats.map((s) => (
              <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>
            ))}
          </dl>
        </div>
        <div className="hero-photo">
          <div className="frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.photo} alt={`Foto ${site.name}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
