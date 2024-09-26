import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Goodbot',
    default: 'Goodbot',
  },
  description: 'Goodbot responsible repo',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
