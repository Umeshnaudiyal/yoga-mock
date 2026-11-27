import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BookingModalProvider } from '../components/booking-modal';
import { SiteLoader } from '../components/site-loader';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Ritesh Yoga | Find Your Way Back to Yourself',
  description:
    'Live online yoga sessions with expert guidance, real-time support, and a practice that meets you where you are.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.className} ${inter.variable}`}>
      <body className="min-h-full font-sans antialiased">
        <SiteLoader />
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}
