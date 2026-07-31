import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Fırat Brain Mind Machine Lab | Dijital Kütüphane",
  description: "Fırat Brain Mind Machine Lab akademik dijital kütüphane ve araştırma platformu.",
  icons: {
    icon: "/brand/logoyeni.png",
  },
  openGraph: {
    title: "Fırat Brain Mind Machine Lab Dijital Kütüphane",
    description: "Beyin sinyalleri, yapay zekâ, biyomedikal veri analizi ve akademik kaynaklara odaklanan dijital araştırma kütüphanesi.",
    url: "https://fbmml-dijital-kutuphane.vercel.app",
    siteName: "FBMML",
    images: [
      {
        url: "/brand/logoyeni.png",
        width: 300,
        height: 300,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
