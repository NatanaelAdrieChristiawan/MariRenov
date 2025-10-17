import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
                onClick={() => window.open('https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A', '_blank')}
              >
                Chat WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 text-gray-700 rounded-full border ${
                isScrolled ? 'border-gray-100 bg-white/70' : 'border-white/30 bg-white/60'
              } shadow-md`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            className="fixed inset-0 z-40 pt-20 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.35) 100%)',
              backdropFilter: 'blur(16px) saturate(160%)',
              WebkitBackdropFilter: 'blur(16px) saturate(160%)',
            }}
          >
            {/* Liquid blobs background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute -top-10 -left-10 w-56 h-56 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.55), transparent 60%)',
                  filter: 'blur(30px)',
                }}
                animate={{ x: [0, 20, -10, 0], y: [0, 10, -15, 0], scale: [1, 1.05, 0.98, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-20 right-0 w-64 h-64 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 70% 40%, rgba(236,72,153,0.5), transparent 60%)',
                  filter: 'blur(36px)',
                }}
                animate={{ x: [0, -15, 10, 0], y: [0, -10, 15, 0], scale: [1, 0.97, 1.04, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-10 w-60 h-60 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 40% 60%, rgba(16,185,129,0.45), transparent 60%)',
                  filter: 'blur(34px)',
                }}
                animate={{ x: [0, 12, -8, 0], y: [0, -12, 8, 0], scale: [1, 1.02, 0.99, 1] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              />
            </div>

            {/* Glass panel container */}
            <motion.div
              className="mx-4 mt-4 rounded-2xl border shadow-2xl overflow-hidden"
              style={{
                borderColor: 'rgba(255,255,255,0.35)',
                background: 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                boxShadow: '0 20px 50px -20px rgba(0,0,0,0.25)',
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.9 }}
            >
              <div className="flex flex-col space-y-2 px-4 py-6">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3 px-4 rounded-xl font-medium transition-colors ${
                      currentPage === item.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-white/60'
                    }`}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -12, opacity: 0 }}
                    transition={{ delay: 0.03 * idx, duration: 0.2 }}
                    style={{
                      border: currentPage === item.id ? '1px solid rgba(255,255,255,0.35)' : '1px solid rgba(255,255,255,0.2)',
                      background: currentPage === item.id ? undefined : 'rgba(255,255,255,0.45)',
                      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                      backdropFilter: 'blur(24px) saturate(180%)',
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.03 * navItems.length }}
                >
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white w-full mt-2"
                    onClick={() =>
                      window.open(
                        'https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A',
                        '_blank'
                      )
                    }
                  >
                    Chat WhatsApp
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
