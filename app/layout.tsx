import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Nav from "@/app/components/Nav";
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
        className={`bg-[url('/space.jpg')] bg-cover min-h-screen ${poppins.className} text-white`}
      >
        <Nav />
        <main className="max-w-[1440px] m-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
