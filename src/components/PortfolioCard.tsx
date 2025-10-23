import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin } from 'lucide-react';

interface PortfolioCardProps {
  image: string;
  title: string;
  type: string;
  location: string;
  onClick?: () => void;
}

export function PortfolioCard({ image, title, type, location, onClick }: PortfolioCardProps) {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Background fill to prevent white bars */}
        <ImageWithFallback
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        {/* Foreground full image without crop */}
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 px-6 py-3 rounded-full">
            <p className="text-primary font-medium">Lihat Detail</p>
          </div>
        </div>
      </div>
  <div className="p-5">
        <h4 className="font-['Playfair_Display'] text-lg mb-1.5 text-primary">
          {title}
        </h4>
        <p className="text-sm text-gray-600 mb-2">{type}</p>
        <div className="flex items-center text-xs text-muted-foreground gap-1">
          <MapPin size={14} className="text-accent" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
