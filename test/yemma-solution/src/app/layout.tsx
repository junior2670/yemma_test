import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Importation et configuration
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // tu peux adapter les poids selon ton design
});

export const metadata: Metadata = {
  title: "Yemma-solution",
  description: "Application de sourcing de talent ",
};

// 💅 Application dans RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
