// Semua teks, link, dan gambar diedit dari file ini.
export const site = {
  name: "Faridz Ma'ruf",
  email: "faridz@gmail.com",
  phone: "+62 8821-2303-630",
  location: "Indonesia",
  cv: "/cv.pdf", // taruh file CV kamu di public/cv.pdf
  photo: "/images/profile.svg", // ganti dengan foto kamu, mis. /images/foto.jpg

  nav: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Service", id: "service" },
    { label: "Project", id: "project" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ],

  stats: [
    { value: "10+", label: "Projects" },
    { value: "2+", label: "Years learning" },
    { value: "6", label: "Technologies" },
  ],

  services: [
    { icon: "Code2", title: "Web Development", text: "Membangun website yang cepat, rapi, dan mudah dirawat dari awal sampai online." },
    { icon: "PenTool", title: "UI/UX Design", text: "Merancang alur dan tampilan yang jelas supaya pengunjung langsung paham apa yang harus dilakukan." },
    { icon: "Layout", title: "Frontend Development", text: "Mengubah desain menjadi halaman interaktif yang nyaman dibuka di HP maupun laptop." },
    { icon: "Monitor", title: "Website Design", text: "Membuat desain website yang sesuai karakter dan kebutuhan, mulai dari company profile sampai portofolio." },
  ],

  // link: isi dengan URL proyek. Kalau dikosongkan, tombol otomatis nonaktif.
  projects: [
    { title: "Company Profile", text: "Website profil usaha dengan halaman produk dan formulir kontak.", image: "/images/project-1.svg", tech: ["HTML", "CSS", "JavaScript"], link: "https://example.com" },
    { title: "Toko Online", text: "Katalog produk dengan keranjang belanja dan pencarian sederhana.", image: "/images/project-2.svg", tech: ["Next.js", "CSS"], link: "" },
    { title: "Blog Pribadi", text: "Blog berbasis WordPress dengan tema yang disesuaikan sendiri.", image: "/images/project-3.svg", tech: ["WordPress", "PHP"], link: "" },
  ],

  skills: [
    { icon: "FileCode", name: "HTML" },
    { icon: "Palette", name: "CSS" },
    { icon: "Braces", name: "JavaScript" },
    { icon: "Triangle", name: "Next.js" },
    { icon: "Terminal", name: "Python" },
    { icon: "LayoutDashboard", name: "WordPress" },
  ],

  socials: [
    { label: "GitHub", icon: "Github", href: "https://github.com/" },
    { label: "Instagram", icon: "Instagram", href: "https://www.instagram.com/faridz__store" },
    { label: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/" },
    { label: "Tiktok", icon "Tiktok",
href: "https://tiktok.com/faridz_store"
  ],
};
