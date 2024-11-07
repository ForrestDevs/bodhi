import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "$BODHI",
  description: "Awakening • Enlightenment • Peace",
  openGraph: {
    title: "$BODHI",
    description: "Awakening • Enlightenment • Peace",
    url: "https://www.bodhimission.org",
    siteName: "$BODHI",
    locale: "en_US",
    type: "website",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
