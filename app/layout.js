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
      <body className={`${inter.className} flex-1`}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Navbar />
        </div>
        </header>

        {children}
      </body>
    </html>
  );
}
