import { Outfit } from 'next/font/google';
import ProviderWrapper from '@/utils/ProviderWrapper';
import './globals.css';
import Navbar from '@/components/Navbar';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--body-font',
});

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
        </ProviderWrapper>
      </body>
    </html>
  );
}
