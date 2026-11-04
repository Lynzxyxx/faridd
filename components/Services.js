import { site } from "@/data/site";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="service" className="section alt">
      <div className="container">
        <Reveal><h2 className="center">Services</h2></Reveal>
        <div className="grid grid-4">
          {site.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card service">
                <span className="icon"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
