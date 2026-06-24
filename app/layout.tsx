import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fauzan-aldi.vercel.app'),
  title: 'FauzanAldi | Portfolio',
  description: 'Personal portfolio of FauzanAldi, showcasing cybersecurity research, software engineering, and technical projects.',
  keywords: 'FauzanAldi, cybersecurity, software engineering, portfolio, bug bounty, AI, backend development',
  authors: [{ name: 'FauzanAldi' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'FauzanAldi | Portfolio',
    description: 'Portfolio of FauzanAldi showcasing cybersecurity, development, and technical project work.',
    siteName: 'FauzanAldi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FauzanAldi | Portfolio',
    description: 'Portfolio of FauzanAldi showcasing cybersecurity, development, and technical project work.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}