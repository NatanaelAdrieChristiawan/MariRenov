import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll to top whenever the displayed page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [currentPage]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'proses', label: 'Proses' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setIsMobileMenuOpen(false);

    // Force scroll to top immediately and again on next frame
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3"
            >
              <img
                src="/images/MR.png"
                alt="MariRenov Logo"
                className="h-10 w-auto"
              />
              <span className="font-['Playfair_Display'] font-semibold text-xl text-primary">
                MariRenov
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === item.id ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() =>
                  window.open(
                    'https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A',
                    '_blank'
                  )
                }
              >
                Chat WhatsApp
              </Button>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-3 px-4 rounded-lg font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-white w-full mt-4"
              onClick={() => window.open('https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A', '_blank')}
            >
              Chat WhatsApp
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
