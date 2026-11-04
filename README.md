# Portofolio Faridz Ma'ruf

Next.js 14 + CSS + Lucide Icons.

## Menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:3000 di Google Chrome.

## Cara mengedit
- **Semua konten** (nama, kontak, layanan, proyek, skill, sosial media): `data/site.js`
- **Foto profil**: taruh file di `public/images/`, lalu ubah `photo` di `data/site.js`
- **Thumbnail proyek**: ubah `image` pada tiap proyek
- **Link proyek**: isi `link`. Kosong = tombol "View Project" nonaktif. Terisi = buka di tab baru
- **CV**: simpan sebagai `public/cv.pdf`
- **Warna**: variabel `--accent` di `app/globals.css`

## Struktur
```
faridz-portfolio/
├── app/ (layout.js, page.js, globals.css)
├── components/ (Navbar, Hero, About, Services, Projects, Skills, Contact, Footer, Reveal, icons)
├── data/site.js
├── public/images/
└── package.json
```
