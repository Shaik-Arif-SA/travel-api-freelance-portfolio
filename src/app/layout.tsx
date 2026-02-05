import type { Metadata } from 'next';
import { Montserrat, DM_Sans } from 'next/font/google';
import './globals.css';
// import Navbar from '@/components/Navbar/Navbar';
import QueryProvider from '@/providers/queryProvider';
// import Footer from '@/components/Footer/Footer';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css';
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Shaik Arif',
  description: 'Empower Your Mind to Achieve More Than Just Marks',
  authors: [{ name: 'i2Global' }],
  creator: 'i2Global Team',
  openGraph: {
    title: 'Shaik Arif',
    description: 'Empower Your Mind to Achieve More Than Just Marks',
    url: 'https://shaikarif.com',
    siteName: 'Shaik Arif'
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${dmSans.variable} scrollbar antialiased`}
      >
        <Toaster
          toastOptions={{ duration: 4000 }}
          position="top-right"
          reverseOrder={false}
        />
        <QueryProvider>
          {/* <Navbar /> */}
          <div>{children}</div>
          {/* <Footer /> */}
        </QueryProvider>
      </body>
    </html>
  );
}
