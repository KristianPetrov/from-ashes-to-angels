import type { Metadata } from "next";
import Image from "next/image";
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

const siteUrlString = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteUrl = new URL(siteUrlString);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "From Ashes To Angels",
    template: "%s | From Ashes To Angels",
  },
  description:
    "A modeling and talent agency with a recovery focus. Helping women rebuild confidence, reclaim dignity, and rise from the ashes.",
  creator: "Set Free Digital Disciples",
  authors: [
    { name: "Set Free Digital Disciples", url: "https://setfreedigitaldisciples.com" },
  ],
  keywords: [
    "From Ashes To Angels",
    "modeling",
    "talent agency",
    "recovery",
    "women empowerment",
    "transformation",
    "faith",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "From Ashes To Angels",
    description:
      "A modeling and talent agency with a recovery focus. Helping women rebuild confidence, reclaim dignity, and rise from the ashes.",
    url: siteUrl,
    siteName: "From Ashes To Angels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/from-ashes-to-angels-fire.png",
        width: 1200,
        height: 630,
        alt: "From Ashes To Angels - Fire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From Ashes To Angels",
    description:
      "A modeling and talent agency with a recovery focus. Helping women rebuild confidence, reclaim dignity, and rise from the ashes.",
    images: ["/from-ashes-to-angels-fire.png"],
    creator: "Set Free Digital Disciples",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
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
        {/* Parallel route modal outlet */}
        {modal}
        <footer className="border-t border-white/15 bg-black/60">
          <div className="max-w-screen-xl mx-auto px-5 py-6 flex items-center justify-center gap-3">
            <a
              href="https://setfreedigitaldisciples.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white"
            >
              <Image
                src="/set-free-digital-disciples-logo.png"
                alt="Set Free Digital Disciples logo"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
              <span className="text-sm">Website created by Set Free Digital Disciples</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
