import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./comps/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Goodbot",
  description: "Goodbot responsible repo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="absolute top-0 block w-screen">
        <Nav />
      </div>
      <body className={`${inter.className} mt-16 pt-5`}>{children}</body>
    </html>
  );
}
