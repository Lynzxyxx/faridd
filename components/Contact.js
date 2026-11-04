"use client";
import { useState } from "react";
import { site } from "@/data/site";
import { Icon } from "./icons";
import Reveal from "./Reveal";

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Nama minimal 2 karakter.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Masukkan alamat email yang valid.";
  if (v.message.trim().length < 10) e.message = "Pesan minimal 10 karakter.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (Object.keys(errors).length) setErrors(validate(next));
    setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    // Tanpa backend: membuka aplikasi email dengan isi pesan terisi otomatis.
    // Untuk kirim langsung dari website, sambungkan ke Formspree / EmailJS / API route.
    const subject = encodeURIComponent(`Pesan dari ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n${values.name} (${values.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {name === "message"
        ? <textarea id={name} name={name} rows={5} value={values[name]} onChange={onChange} aria-invalid={!!errors[name]} {...props} />
        : <input id={name} name={name} value={values[name]} onChange={onChange} aria-invalid={!!errors[name]} {...props} />}
      {errors[name] && <small className="error" role="alert">{errors[name]}</small>}
    </div>
  );

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <Reveal>
          <h2>Contact</h2>
          <p>Punya proyek atau sekadar ingin menyapa? Kirim pesan, saya biasanya membalas dalam beberapa hari.</p>
          <ul className="info">
            <li><Icon name="Mail" size={18} /> {site.email}</li>
            <li><Icon name="Phone" size={18} /> {site.phone}</li>
            <li><Icon name="MapPin" size={18} /> {site.location}</li>
          </ul>
          <div className="socials">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><Icon name={s.icon} size={20} /></a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <form className="card form" onSubmit={onSubmit} noValidate>
            {field("name", "Nama", { type: "text", autoComplete: "name" })}
            {field("email", "Email", { type: "email", autoComplete: "email" })}
            {field("message", "Pesan")}
            <button type="submit" className="btn btn-primary">Send Message</button>
            {sent && <p className="ok" role="status">Aplikasi email dibuka dengan pesanmu. Tekan kirim di sana untuk menyelesaikan.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
