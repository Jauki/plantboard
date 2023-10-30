import { Outfit } from 'next/font/google';
import ProviderWrapper from './ProviderWrapper';
import './globals.css';

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
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
