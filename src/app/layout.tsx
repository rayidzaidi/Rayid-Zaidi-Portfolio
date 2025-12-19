import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron, Comfortaa, Rubik_Bubbles, Modak, Titan_One, DynaPuff, Chewy, Outfit, Russo_One, Michroma } from "next/font/google";
import "./globals.css";
import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

const rubikBubbles = Rubik_Bubbles({
  variable: "--font-rubik-bubbles",
  weight: "400",
  subsets: ["latin"],
});

const modak = Modak({
  variable: "--font-modak",
  weight: "400",
  subsets: ["latin"],
});

const titanOne = Titan_One({
  variable: "--font-titan-one",
  weight: "400",
  subsets: ["latin"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dynapuff",
  subsets: ["latin"],
});

const chewy = Chewy({
  variable: "--font-chewy",
  weight: "400",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  weight: "400",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Technologist",
  description: "A premium full-stack portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${mono.variable} ${orbitron.variable} ${comfortaa.variable} ${rubikBubbles.variable} ${modak.variable} ${titanOne.variable} ${dynaPuff.variable} ${chewy.variable} ${outfit.variable} ${russoOne.variable} ${michroma.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Preloader />
        <ThreeBackground />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
          <Chatbot />
          <Footer />
        </main>
      </body>
    </html>
  );
}
