import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UnifrakturCook } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oldEnglish = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-old-english",
});

export const metadata: Metadata = {
  title: "Concept Name",
  description: "A modeling and talent agency with a recovery focus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${oldEnglish.variable} antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-50">
          <nav className="bg-black text-white border-b border-white/15 nav-red-glow">
            <div className="max-w-screen-xl mx-auto px-5 py-3 flex items-center justify-between">
              <a href="#top" className="font-bold tracking-tight font-[family-name:var(--font-old-english)] text-2xl title-outline-glow">From Ashes To Angels</a>
              <input id="nav-toggle" type="checkbox" className="nav-toggle" aria-label="Toggle navigation" />
              <label htmlFor="nav-toggle" className="nav-hamburger md:hidden"><span></span></label>
              <div className="nav-menu flex-col md:flex md:flex-row md:items-center gap-4 md:gap-4">
                <a href="#about" className="font-medium hover:underline underline-offset-4 nav-button-glow">About</a>
                <a href="#process" className="font-medium hover:underline underline-offset-4 nav-button-glow">Process</a>
                <a href="#impact" className="font-medium hover:underline underline-offset-4 nav-button-glow">Impact</a>
                <a href="#twist" className="font-medium hover:underline underline-offset-4 nav-button-glow">Documentary</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
