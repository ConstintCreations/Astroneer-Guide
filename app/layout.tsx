import type { Metadata } from "next";
import Astroneer_Font from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";

const astroneerFont = Astroneer_Font({
  src: "../public/fonts/ndastroneer.ttf",
  variable: "--font-astroneer",
});

export const metadata: Metadata = {
  title: "Astroneer Guide",
  description: "A guide for the game Astroneer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full overflow-hidden">
      <body
        className={`${astroneerFont.className} antialiased h-full w-full overflow-hidden flex flex-col items-center justify-center`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
