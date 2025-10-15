import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
        <Icon className="text-primary" size={32} />
      </div>
      <h4 className="font-['Playfair_Display'] text-xl mb-3 text-primary">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
