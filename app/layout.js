import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Faridz Ma'ruf | Portfolio",
  description: "Portofolio Faridz Ma'ruf: pelajar yang tertarik pada teknologi, desain, dan pengembangan website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
