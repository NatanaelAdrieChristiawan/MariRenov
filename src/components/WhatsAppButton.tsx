import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 sm:px-6 sm:py-4 rounded-full shadow-lg flex items-center sm:space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
    >
      <MessageCircle size={24} className="animate-pulse" />
      <span className="font-medium hidden sm:inline">Chat WhatsApp</span>
    </button>
  );
}
