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
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        
        {/* @todo - refactor this into  SiteHeader component*/}
        <div className="relative flex min-h-screen flex-col">
         <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Navbar />
          </div>
         </header>

         <div className="flex-1">{children}</div>
        </div>
      
      </body>
    </html>
  );
}
