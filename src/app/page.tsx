import Navbar from '@/components/Navigation/Navbar';
import Overview from '@/components/Sections/Overview';
import Products from '@/components/Sections/Products';
import Contact from '@/components/Sections/Contact';
import Footer from '@/components/Sections/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Overview />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
