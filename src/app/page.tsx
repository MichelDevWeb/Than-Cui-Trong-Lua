import Navbar from '@/components/Navigation/Navbar';
import Overview from '@/components/Sections/Overview';
import Products from '@/components/Sections/Products';
import Contact from '@/components/Sections/Contact';
import BackToTop from '@/components/UI/BackToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Overview />
      <Products />
      <Contact />
      <BackToTop />
    </main>
  );
}
