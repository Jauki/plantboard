import { Outfit } from 'next/font/google';
import ProviderWrapper from '@/utils/ProviderWrapper';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from 'sonner';
import Head from 'next/head';
import { Metadata } from 'next';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--body-font',
});

export const metadata: Metadata = {
  title: 'Plantboard',
  description:
    'Elevate your indoor gardening experience with PlantBoard – the ultimate digital companion for plant enthusiasts. Explore a curated selection of plants, customize their care routines, and witness your digital garden thrive. Transform your space into a green haven with personalized insights and expert recommendations. Start your botanical journey today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${outfit.variable} font-body`}>
      <body>
        <ProviderWrapper>
          <Navbar />
          {children}
          <Toaster />
        </ProviderWrapper>
      </body>
    </html>
  );
}
