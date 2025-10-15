import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedIn?: string;
}

export function TeamCard({ name, role, description, image, linkedIn }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="aspect-square relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <h4 className="font-['Playfair_Display'] text-xl text-primary">
            {name}
          </h4>
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-accent text-white hover:text-primary px-3 py-1.5 rounded-md transition-all duration-200 group"
              aria-label={`LinkedIn profile of ${name}`}
            >
              <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
          )}
        </div>
        <p className="text-accent font-medium text-sm mb-4">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
