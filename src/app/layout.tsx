import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Turkish Brain Team | Dijital Kütüphane",
  description: "Turkish Brain Team akademik dijital kütüphane ve araştırma platformu.",
  icons: {
    icon: "/brand/tbt-logo.png",
  },
  openGraph: {
    title: "Turkish Brain Team Dijital Kütüphane",
    description: "Beyin sinyalleri, yapay zekâ, biyomedikal veri analizi ve akademik kaynaklara odaklanan dijital araştırma kütüphanesi.",
    url: "https://turkish-brain-team.vercel.app",
    siteName: "TBT",
    images: [
      {
        url: "/brand/tbt-logo.png",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="tbt-theme">
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
