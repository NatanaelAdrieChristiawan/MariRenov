import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './components/HomePage';
import { PortfolioPage } from './components/PortfolioPage';
import { ProsesPage } from './components/ProsesPage';
import { TestimoniPage } from './components/TestimoniPage';
import { FAQPage } from './components/FAQPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top whenever the current page changes
  useEffect(() => {
    // Use smooth behavior for a better UX; change to 'auto' if you prefer instant jump
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'proses':
        return <ProsesPage />;
      case 'testimoni':
        return <TestimoniPage />;
      case 'faq':
        return <FAQPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
  <Footer currentPage={currentPage} onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}
