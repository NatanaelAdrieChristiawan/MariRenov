import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  project: string;
  testimonial: string;
  rating?: number;
}

export function TestimonialCard({
  name,
  location,
  project,
  testimonial,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <Quote className="text-accent" size={32} />
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-accent text-accent" />
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{testimonial}"
      </p>
      
      <div className="pt-4 border-t border-gray-100">
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-gray-600">{project}</p>
        <p className="text-xs text-muted-foreground mt-1">{location}</p>
      </div>
    </div>
  );
}
