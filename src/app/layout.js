import './globals.css';
import { Poppins } from 'next/font/google';
import ClientWrapper from './components/ClientWrapper';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Math Tutor Portfolio By Faizan',
  description: 'Professional math tutoring tailored to your needs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/study.png" sizes="512x512" />
      </head>
      <body className={poppins.className}>
        {children}
        <ClientWrapper /> {/* Ensure AOS initializes on the client side */}
      </body>
    </html>
  );
}
