import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const baseUrl = "https://caraqueleonardoAlfredo.github.io/solarParck/";
const ogImageUrl = new URL("./og-iniciativa.png", baseUrl).href;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Operación + Tecnología | Una iniciativa para parques solares",
  description:
    "El conocimiento operativo de Robin Fernando y la capacidad tecnológica de Leonardo Caraque pueden combinarse para desarrollar mejoras concretas en los parques.",
  icons: { icon: "./favicon.png", shortcut: "./favicon.png" },
  openGraph: {
    title: "Conocimiento operativo + capacidad tecnológica",
    description:
      "Robin Fernando y Leonardo Caraque: dos perspectivas complementarias para explorar mejoras progresivas en los parques solares.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: ogImageUrl,
        width: 1536,
        height: 1024,
        alt: "Conocimiento operativo más capacidad tecnológica para parques solares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Operación + Tecnología | Parques solares",
    description: "Una combinación que puede convertir necesidades reales en mejoras concretas.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
