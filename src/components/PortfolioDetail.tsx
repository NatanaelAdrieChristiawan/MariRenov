import { X, MapPin, Calendar, DollarSign, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  type: string;
  location: string;
  images?: string[];
  description?: string;
  year?: string;
  budget?: string;
  duration?: string;
  client?: string;
  specs?: string[];
}

interface PortfolioDetailProps {
  portfolio: PortfolioItem | null;
  onClose: () => void;
}

export function PortfolioDetail({ portfolio, onClose }: PortfolioDetailProps) {
  if (!portfolio) return null;

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A`,
      '_blank'
    );
  };

  const allImages = portfolio.images || [portfolio.image];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Header with Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-primary">
              {portfolio.title}
            </h2>
            <p className="text-accent">{portfolio.type}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-primary" />
          </button>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-4 p-6">
          {allImages.map((img, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? 'md:col-span-2' : ''
              } aspect-video overflow-hidden rounded-lg`}
            >
              <ImageWithFallback
                src={img}
                alt={`${portfolio.title} - ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="px-6 pb-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Description */}
            <div>
              <h3 className="font-['Playfair_Display'] text-xl text-primary mb-4">
                Tentang Proyek
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {portfolio.description ||
                  'Proyek ini menampilkan desain dan pembangunan yang memadukan estetika modern dengan fungsionalitas tinggi. Setiap detail dirancang dengan cermat untuk menciptakan ruang yang nyaman dan elegan.'}
              </p>

              {portfolio.specs && portfolio.specs.length > 0 && (
                <>
                  <h4 className="font-['Playfair_Display'] text-lg text-primary mb-3">
                    Spesifikasi
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {portfolio.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-gray-700 text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-accent" size={20} />
                  <span className="font-medium text-primary">Lokasi</span>
                </div>
                <p className="text-gray-700 ml-8">{portfolio.location}</p>
              </div>

              {portfolio.year && (
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-accent" size={20} />
                    <span className="font-medium text-primary">Tahun</span>
                  </div>
                  <p className="text-gray-700 ml-8">{portfolio.year}</p>
                </div>
              )}

              {portfolio.duration && (
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-accent" size={20} />
                    <span className="font-medium text-primary">Durasi</span>
                  </div>
                  <p className="text-gray-700 ml-8">{portfolio.duration}</p>
                </div>
              )}

              {portfolio.budget && (
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="text-accent" size={20} />
                    <span className="font-medium text-primary">Budget Range</span>
                  </div>
                  <p className="text-gray-700 ml-8">{portfolio.budget}</p>
                </div>
              )}

              {portfolio.client && (
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-accent" size={20} />
                    <span className="font-medium text-primary">Klien</span>
                  </div>
                  <p className="text-gray-700 ml-8">{portfolio.client}</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
            >
              Konsultasi Proyek Serupa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
