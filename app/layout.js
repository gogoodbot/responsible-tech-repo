import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./comps/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Goodbot",
    default: "Goodbot",
  },
  description: "Goodbot responsible repo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex-1`}>
        <div className="absolute top-0 block w-screen">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
