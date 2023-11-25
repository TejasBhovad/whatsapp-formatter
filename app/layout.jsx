import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whatsapp Message Editor",
  description: "Made by Tejas bhovad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#0B141A] w-full h-full">
      <body className={`${inter.className} w-full h-full`}>{children}</body>
    </html>
  );
}
