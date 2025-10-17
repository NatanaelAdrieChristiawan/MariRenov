import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

interface FooterProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Footer({ currentPage = 'home', onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/MR.png"
                alt="MariRenov Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-['Playfair_Display'] font-semibold text-xl">
                MariRenov
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Desain & build premium untuk rumah impian Anda. Transparan, rapi, tepat waktu.
            </p>
            <div className="mt-4 flex items-center space-x-1 text-accent text-sm">
              <span>Mewah</span>
              <span>•</span>
              <span>Kokoh</span>
              <span>•</span>
              <span>Cepat</span>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-['Playfair_Display'] font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'proses', label: 'Proses' },
                { id: 'testimoni', label: 'Testimoni' },
                { id: 'faq', label: 'FAQ' },
                { id: 'about', label: 'About' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate?.(item.id)}
                    className={`text-left w-full transition-colors ${
                      currentPage === item.id
                        ? 'text-accent'
                        : 'text-white/80 hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-['Playfair_Display'] font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Desain Eksterior</li>
              <li>Desain Interior</li>
              <li>Gambar Kerja</li>
              <li>Pembangunan</li>
              <li>Konsultasi Gratis</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-['Playfair_Display'] font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  +62 852-8588-8158
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:marirenovrumah@gmail.com"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  marirenovrumah@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Banten, Indonesia</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-3 mt-6">
              <a
                href="https://www.instagram.com/mari.renov/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582388930505"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@marirenov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@marirenov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 MariRenov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
