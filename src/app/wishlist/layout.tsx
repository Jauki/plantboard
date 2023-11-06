import Navbar from '@/components/Navbar';
import ProviderWrapper from '@/utils/ProviderWrapper';

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderWrapper>
      <Navbar />
      {children}
    </ProviderWrapper>
  );
}
