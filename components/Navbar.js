"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      site.nav.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">{site.name}</a>
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Menu utama">
          {site.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Buka menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
