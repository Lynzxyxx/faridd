import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.photo} alt={`Foto ${site.name}`} />
        </Reveal>
        <Reveal delay={100}>
          <h2>About Me</h2>
          <p>
            Saya Faridz, masih sekolah dan sedang serius belajar membuat website. Awalnya saya
            penasaran bagaimana sebuah halaman bisa tampil di layar, lalu keterusan sampai sekarang.
          </p>
          <p>
            Saya senang mengerjakan tampilan sekaligus kodenya, karena hasil akhirnya terasa lebih
            utuh. Saat ini saya terus berlatih lewat proyek kecil dan terbuka untuk kerja sama
            atau proyek baru.
          </p>
          <ul className="info">
            <li><MapPin size={18} /> {site.location}</li>
            <li><Phone size={18} /> {site.phone}</li>
            <li><Mail size={18} /> {site.email}</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </Reveal>
      </div>
    </section>
  );
}
