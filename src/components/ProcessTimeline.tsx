import { Check, MessageSquare, MapPin, PenTool, Calculator, Hammer, Key } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Konsultasi',
    description: 'Diskusi kebutuhan, budget, dan timeline proyek Anda',
  },
  {
    number: 2,
    icon: MapPin,
    title: 'Survey & Site Visit',
    description: 'Kunjungan lokasi untuk mengukur dan memahami kondisi lapangan',
  },
  {
    number: 3,
    icon: PenTool,
    title: 'Desain & Revisi',
    description: 'Proses desain dengan revisi hingga sesuai keinginan Anda',
  },
  {
    number: 4,
    icon: Calculator,
    title: 'RAB & Timeline',
    description: 'Rencana Anggaran Biaya detail dan jadwal pengerjaan yang jelas',
  },
  {
    number: 5,
    icon: Hammer,
    title: 'Pembangunan',
    description: 'Eksekusi pembangunan dengan QC ketat dan laporan progres berkala',
  },
  {
    number: 6,
    icon: Key,
    title: 'Serah Terima',
    description: 'Pengecekan final dan serah terima proyek yang sudah selesai',
  },
];

interface ProcessTimelineProps {
  variant?: 'compact' | 'detailed';
}

export function ProcessTimeline({ variant = 'compact' }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line - Hidden on mobile, visible on md+ */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[22px] h-[calc(100%-22px)] w-0.5 bg-accent/30" />

      <div className="space-y-12 md:space-y-16">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.number}
              className={`relative flex items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-5/12 ${
                  isEven ? 'md:text-right' : 'md:text-left'
                } text-left`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 md:hidden mb-3">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      {step.number}
                    </div>
                  </div>
                  <h4 className="font-['Playfair_Display'] text-xl mb-2 text-primary">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Center Circle - Desktop only */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg z-10 relative">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md z-20">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout - Desktop only */}
              <div className="hidden md:block w-5/12" />
            </div>
          );
        })}
      </div>

      {/* Completion Badge */}
      <div className="mt-12 flex justify-center">
        <div className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg relative z-10">
          <Check size={20} />
          <span className="font-medium">Rumah Impian Anda Siap!</span>
        </div>
      </div>
    </div>
  );
}
