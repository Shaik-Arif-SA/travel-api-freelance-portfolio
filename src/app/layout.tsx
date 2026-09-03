import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Shaik Arif | Travel Technology API Integration & Backend Developer',
  description:
    'Travel technology API integration and backend development for hotel, flight, booking, pricing, payment, and cancellation workflows.',
  keywords: [
    'Travel API Integration Developer',
    'Hotel API Integration',
    'Flight API Integration',
    'Travel Technology Developer',
    'Backend Developer',
    'PHP API Integration',
    'Python API Integration'
  ],
  openGraph: {
    title: 'Travel Technology API Integration & Backend Developer',
    description:
      'Backend workflows that connect travel APIs to search, pricing, booking, payments, and post-booking operations.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
