import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Navbar from "./comps/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Goodbot",
    default: "Goodbot",
  },
  description: "Goodbot - Responsible Tech Repo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        {/* ThemeProvider+ DarkMode */}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
          >
        
        {/* @todo - refactor this into  SiteHeader component*/}
        <div className="relative flex min-h-screen flex-col">
         <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Navbar />
          </div>
         </header>

         <div className="flex-1">{children}</div>
        </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
