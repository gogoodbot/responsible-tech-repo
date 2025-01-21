import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "../components/Footer";

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
            <Header />
            <div className="flex-1">{children}</div>
            <Footer/>
          </div>
        </ThemeProvider>
      </body >
    </html >
  );
}
