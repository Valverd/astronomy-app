import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Nav from "@/app/components/Nav";
import Footer from "./components/Footer";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "AstroRange",
  description: "Show the facts about the solar system and the planets distance.",
};

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
