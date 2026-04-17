import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/podtext/Header";
import Footer from "@/components/podtext/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Podtext — Točíme příběhy. Píšeme příběhy.",
    template: "%s | Podtext",
  },
  description:
    "Podtext je kreativní studio zaměřené na video produkci, redakční tvorbu a správu sociálních sítí. Pomáháme firmám vyprávět jejich příběhy.",
  keywords: [
    "video produkce",
    "redakce",
    "content marketing",
    "podcast",
    "firemní video",
    "Praha",
  ],
  openGraph: {
    title: "Podtext — Točíme příběhy. Píšeme příběhy.",
    description:
      "Kreativní studio zaměřené na video produkci, redakční tvorbu a správu sociálních sítí.",
    url: "https://podtext.cz",
    siteName: "Podtext",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podtext — Točíme příběhy. Píšeme příběhy.",
    description:
      "Kreativní studio zaměřené na video produkci, redakční tvorbu a správu sociálních sítí.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
