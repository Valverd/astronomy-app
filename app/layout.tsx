import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Nav from "@/app/components/Nav";
import Footer from "./components/Footer";
import Head from "next/head";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Astro Range',
  description: 'Explore informações do Sistema Solar, com visualizações em 3D dos Planetas.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Sistema Solar',
    description: 'Explore informações do Sistema Solar, com visualizações em 3D dos Planetas.',
    url: 'https://astronomy-app-ten.vercel.app/',
    siteName: 'AstroRange',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo do Site'
      }
    ],
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[url('/milky_way.jpg')]  flex flex-col min-h-screen ${poppins.className} text-white`}
      >
        <Nav />
        <main className="flex-1 max-w-[1440px] w-full m-auto px-6 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
