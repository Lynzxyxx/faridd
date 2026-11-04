import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { Icon } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong className="logo">{site.name}</strong>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
        <div className="socials">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><Icon name={s.icon} size={20} /></a>
          ))}
          <a href="#home" className="to-top" aria-label="Kembali ke atas"><ArrowUp size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
