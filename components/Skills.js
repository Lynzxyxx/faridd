import { site } from "@/data/site";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <Reveal><h2 className="center">Skills</h2></Reveal>
        <div className="grid grid-6">
          {site.skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="card skill">
                <Icon name={s.icon} size={32} />
                <span>{s.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
