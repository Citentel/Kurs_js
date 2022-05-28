import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function Main({ children }) {
  return (
    <div className="container mx-auto text-gray-900 min-h-screen">
      <Header />
      <main className="min-h-screen w-full mx-auto py-4">{children}</main>
      <Footer />
    </div>
  );
}
