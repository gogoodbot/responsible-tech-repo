import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./comps/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Goodbot",
  description: "Goodbot responsible repo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="absolute top-0 block w-screen">
        <Navbar />
      </div>
      <body className={`${inter.className} flex-1`}>{children}</body>
    </html>
  );
}
