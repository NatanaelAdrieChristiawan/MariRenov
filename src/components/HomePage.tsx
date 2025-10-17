import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeWhileInView, slideIn } from '../animations/motionVariants';
import { Button } from './ui/button';
import { ServiceCard } from './ServiceCard';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioDetail, PortfolioItem } from './PortfolioDetail';
import { TestimonialCard } from './TestimonialCard';
import { TeamCard } from './TeamCard';
import { ProcessTimeline } from './ProcessTimeline';
import { ContactForm } from './ContactForm';
import {
  CheckCircle,
  Shield,
  Users,
  Clock,
  Home,
  PenTool,
  Sofa,
  Hammer,
  ArrowRight,
  TrendingUp,
  FileText,
  BarChart3,
  MessageSquareText,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

type JsonPortfolioItem = {
  id?: string | number;
  title: string;
  type?: string;
  location?: string;
  images: string[];
  image?: string;
  description?: string;
  year?: string | number;
  duration?: string;
  budget?: string;
  client?: string;
  specs?: string[];
};

function inferTypeFromTitle(title: string): PortfolioItem['type'] {
  const t = title.toLowerCase();
  if (/(kitchen|bedroom|living|bath|toilet|dapur|kamar|ruang)/.test(t)) return 'Desain Interior';
  if (/(fasad|exterior|eksterior|rumah|renovasi|renovation)/.test(t)) return 'Desain Eksterior';
  return 'Desain Interior';
}

function generateDescription(i: { title: string; type: string; location?: string }) {
  const loc = i.location ? ` di ${i.location}` : '';
  return `${i.title} adalah proyek ${i.type.toLowerCase()}${loc}. Mengusung tampilan modern-minimalis dengan material berkualitas, tata ruang fungsional, dan pencahayaan yang nyaman.`;
}

const testimonials = [
  {
    name: 'Ibu Sarah Wijaya',
    location: 'BSD',
    project: 'Renovasi Rumah 2 Lantai',
    testimonial:
      'Sangat profesional dan detail. Dari konsultasi sampai serah terima, semua transparan. Tidak ada biaya tersembunyi dan hasilnya melebihi ekspektasi!',
  },
  {
    name: 'Pak Daniel Kusuma',
    location: 'Jakarta Selatan',
    project: 'Pembangunan Villa',
    testimonial:
      'Timeline tepat waktu, kualitas bangunan kokoh, dan desain sesuai keinginan. Tim sangat responsif dan laporan progres rutin. Highly recommended!',
  },
  {
    name: 'Ibu Linda Pratama',
    location: 'Alam Sutera',
    project: 'Desain Interior Apartemen',
    testimonial:
      'Hasil desain elegant dan fungsional. Revisi cepat dan tim sangat memahami keinginan saya. Budget juga tetap terkontrol sesuai RAB awal.',
  },
];

const heroImages = [
  '/images/carousel/carousel1.png',
  '/images/carousel/carousel2.png',
  '/images/carousel/carousel3.png',
  '/images/carousel/carousel4.png',
  '/images/carousel/carousel5.png',
];

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on('select', onSelect);

    return () => {
      clearInterval(autoplay);
      api.off('select', onSelect);
    };
  }, [api]);

  // Load 6 portfolio items from JSON
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/data/portfolio.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('Gagal memuat data portfolio');
        const raw: JsonPortfolioItem[] = await res.json();
        const normalized: PortfolioItem[] = raw.map((p, idx) => {
          const id = String(p.id ?? idx + 1);
          const images = (p.images ?? []).map((u) => (u.startsWith('http') ? u : `${u}`));
          const image = p.image ?? images[0] ?? '';
          const type = p.type ?? inferTypeFromTitle(p.title);
          const description = p.description ?? generateDescription({ title: p.title, type, location: p.location ?? '' });
          return {
            id,
            title: p.title,
            type,
            location: p.location ?? '',
            images,
            image,
            description,
            year: String(p.year ?? new Date().getFullYear()),
            duration: p.duration ?? '-',
            budget: p.budget ?? '-',
            client: p.client ?? '-',
            specs: p.specs ?? [],
          };
        });
        setItems(normalized.slice(0, 6));
      } catch (e: any) {
        setError(e.message || 'Terjadi kesalahan');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A',
      '_blank'
    );
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortfolioClick = (portfolio: PortfolioItem) => {
    setSelectedPortfolio(portfolio);
  };

  const handleCloseDetail = () => {
    setSelectedPortfolio(null);
  };

  return (
    <>
      <PortfolioDetail portfolio={selectedPortfolio} onClose={handleCloseDetail} />
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer(0.18)}
            initial="hidden"
            animate="show"
          >
            {/* Left Content */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div className="space-y-4">
                <motion.h1
                  className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight"
                  variants={fadeInUp}
                >
                  Wujudkan Rumah Impian. Premium, Rapi, Tepat Waktu
                </motion.h1>
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed max-w-xl"
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                >
                  Desain & build dari konsep sampai serah terima. Kepastian biaya, kualitas
                  terjamin, dan dikerjakan oleh tim profesional berpengalaman 30+ tahun.
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                  >
                    Konsultasi via WhatsApp
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={scrollToForm}
                    size="lg"
                    variant="outline"
                    className="border-2 border-accent text-primary hover:bg-accent/10 px-8 py-6 text-lg"
                  >
                    Isi Form 1 Menit
                  </Button>
                </motion.div>
              </motion.div>

              {/* Micro-badges */}
              <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4" variants={staggerContainer(0.12)}>
                <motion.div className="flex flex-col items-center text-center space-y-2" variants={fadeInUp}>
                  <CheckCircle className="text-accent" size={28} />
                  <span className="text-xs text-gray-600">Kepastian Biaya</span>
                </motion.div>
                <motion.div className="flex flex-col items-center text-center space-y-2" variants={fadeInUp}>
                  <Shield className="text-accent" size={28} />
                  <span className="text-xs text-gray-600">QC Ketat</span>
                </motion.div>
                <motion.div className="flex flex-col items-center text-center space-y-2" variants={fadeInUp}>
                  <Users className="text-accent" size={28} />
                  <span className="text-xs text-gray-600">Tim Profesional</span>
                </motion.div>
                <motion.div className="flex flex-col items-center text-center space-y-2" variants={fadeInUp}>
                  <Clock className="text-accent" size={28} />
                  <span className="text-xs text-gray-600">On-Time</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image - Slideshow */}
            <motion.div className="relative" variants={slideIn('right', 80)}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  className="w-full h-full"
                >
                  <CarouselContent className="h-full">
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div className="relative h-full w-full">
                          <img
                            src={image}
                            alt={`Modern House ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        current === index
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* Floating card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl hidden lg:block z-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-sm text-gray-600 mb-1">Pengalaman</p>
                <p className="font-['Playfair_Display'] text-2xl text-primary">30+ Tahun</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeWhileInView}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4 text-primary">
              Kenapa Memilih Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pengalaman puluhan tahun, sistem kerja terstruktur, dan komitmen pada kepuasan Anda
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer(0.18)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-lg text-primary">
                Hasil Premium & Fungsional
              </h4>
              <p className="text-sm text-gray-600">
                Desain aesthetic yang tetap memperhatikan kenyamanan dan fungsi ruang
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <FileText className="text-primary" size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-lg text-primary">
                Kepastian Biaya & Timeline
              </h4>
              <p className="text-sm text-gray-600">
                RAB detail dan jadwal jelas tanpa biaya tersembunyi
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-primary" size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-lg text-primary">
                On-Time & On-Budget
              </h4>
              <p className="text-sm text-gray-600">
                Project management ketat dengan kontrol scope, jadwal, dan biaya
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="text-primary" size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-lg text-primary">
                End-to-End Service
              </h4>
              <p className="text-sm text-gray-600">
                Dari desain, RAB, hingga build — satu tim, satu tanggung jawab
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button onClick={handleWhatsApp} variant="outline" className="border-accent text-primary">
              Chat WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PAIN → SOLUTION */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={fadeWhileInView}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4 text-primary">
              Hindari Overbudget & Proyek Molor
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Banyak yang kecewa dengan kontraktor yang tidak profesional. Kami hadir dengan
              solusi yang jelas dan terukur.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h5 className="font-semibold text-primary mb-2">❌ Masalah Umum:</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Biaya membengkak di tengah jalan</li>
                  <li>• Timeline tidak jelas & sering molor</li>
                  <li>• Komunikasi lambat, sulit dihubungi</li>
                  <li>• Kualitas tidak sesuai janji</li>
                </ul>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg shadow-md">
                <h5 className="font-semibold mb-2">✅ Solusi Kami:</h5>
                <ul className="space-y-2 text-sm">
                  <li>• Gambar kerja detail sebelum eksekusi</li>
                  <li>• RAB transparan & binding</li>
                  <li>• PIC responsif via WhatsApp</li>
                  <li>• Laporan progres berkala dengan foto</li>
                </ul>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDMzNjU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
            >
              Konsultasi Gratis via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeWhileInView}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4 text-primary">
              Layanan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih sesuai kebutuhan: Desain saja, Build saja, atau paket lengkap Desain + Build
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            <ServiceCard
              icon={Home}
              title="Desain Eksterior"
              description="Tampilan luar rumah yang memukau dengan gaya arsitektur modern, minimalis, atau luxury sesuai karakter Anda"
            />
            <ServiceCard
              icon={PenTool}
              title="Gambar Kerja"
              description="Gambar teknis detail dan lengkap untuk memudahkan pelaksanaan pembangunan tanpa miss komunikasi"
            />
            <ServiceCard
              icon={Sofa}
              title="Desain Interior"
              description="Interior yang cantik, nyaman, dan fungsional dengan pemilihan material berkualitas"
            />
            <ServiceCard
              icon={Hammer}
              title="Pembangunan/Build"
              description="Eksekusi pembangunan profesional dengan QC ketat, material terpilih, dan tukang berpengalaman"
            />
          </motion.div>

          <motion.div 
            className="mt-12 text-center bg-accent/10 p-6 rounded-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-700">
              💡 <span className="font-semibold">Catatan:</span> Anda bisa pilih "Desain saja"
              atau "Desain + Build" sesuai kebutuhan
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeWhileInView}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4 text-primary">
              Proses Kerja 6 Langkah
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sistem kerja terstruktur untuk memastikan proyek Anda berjalan lancar dan sesuai
              ekspektasi
            </p>
          </motion.div>

          <ProcessTimeline variant="compact" />

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
            >
              Minta Jadwal Survey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO HIGHLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeWhileInView}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4 text-primary">
              Portfolio Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beberapa proyek yang telah kami selesaikan dengan hasil memuaskan
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {(loading ? [] : items).map((item, idx) => (
              <motion.div key={item.id} variants={fadeWhileInView} custom={idx}>
                <PortfolioCard 
                  {...item} 
                  onClick={() => handlePortfolioClick(item)}
                />
              </motion.div>
            ))}
            {(!loading && items.length === 0 && !error) && (
              <p className="text-gray-600 col-span-full">Portfolio belum tersedia.</p>
            )}
            {error && (
              <p className="text-red-600 col-span-full">{error}</p>
            )}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              className="border-accent text-primary"
              onClick={() => onNavigate?.('portfolio')}
            >
              Lihat Semua Portfolio
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeWhileInView}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4 text-primary">
              Testimoni Klien
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeWhileInView} custom={index}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <Button onClick={handleWhatsApp} variant="outline" className="border-accent text-primary">
              Tanyakan Proses Kami
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / TEAM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeWhileInView}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4 text-primary">
              Siapa Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim berpengalaman dengan track record puluhan tahun di industri konstruksi dan desain
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            variants={staggerContainer(0.18)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            <TeamCard
              name="Budi Arianto Kho"
              role="Founder & Material Expert"
              description="30+ tahun pengalaman di material bangunan & interior. Pernah memimpin 3 perusahaan material. Ahli dalam quality control dan supply chain management."
              image="/images/budi.png"
              linkedIn="https://www.linkedin.com/in/budi-arianto-359ba53a/"
            />
            <TeamCard
              name="Winston Khogres"
              role="Project Manager & Business Engineering"
              description="Spesialis project management dengan fokus pada kontrol scope, jadwal, dan biaya. Memastikan proyek on-time dan on-budget dengan sistem monitoring ketat."
              image="/images/winston.png"
              linkedIn="https://www.linkedin.com/in/winston-khogres-b5a0692b4/"
            />
          </motion.div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-accent/10 px-8 py-4 rounded-full text-lg">
              <span className="text-accent">★</span>
              <span className="font-['Playfair_Display'] text-primary">
                Mewah • Kokoh • Cepat
              </span>
              <span className="text-accent">★</span>
            </div>
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Bicara dengan Tim Kami
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeWhileInView}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4 text-primary">
              Pertanyaan Umum
            </h2>
            <p className="text-gray-600">Jawaban untuk pertanyaan yang sering ditanyakan</p>
          </motion.div>

          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6">
                Apakah bisa desain saja tanpa build?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Ya, tentu saja! Kami melayani jasa desain saja (eksterior, interior, gambar
                kerja). Anda bebas memilih kontraktor sendiri untuk pembangunan. Atau Anda juga
                bisa pilih paket lengkap Desain + Build dari kami.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6">
                Berapa lama proses desain biasanya?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Tergantung kompleksitas proyek. Untuk rumah standar 2 lantai, biasanya 2-4 minggu
                termasuk revisi. Kami akan berikan timeline yang jelas di awal konsultasi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6">
                Bagaimana sistem pembayaran?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Sistem pembayaran bertahap (termin) sesuai progres pekerjaan. Untuk desain:
                biasanya DP 50%, pelunasan setelah acc final. Untuk build: termin disesuaikan
                dengan milestone proyek (pondasi, struktur, finishing, dll). Semua jelas di
                kontrak.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6">Apakah ada garansi?</AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Ya, untuk pembangunan kami berikan garansi struktur dan garansi workmanship sesuai
                ketentuan. Detail garansi akan dijelaskan di kontrak kerja sama.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#faq"
              className="text-accent hover:text-primary transition-colors text-sm font-medium"
            >
              Lihat semua FAQ →
            </a>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-4">
            Siap Mulai Tanpa Drama Timeline & Biaya?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Konsultasi gratis. Balas cepat. Tim profesional siap membantu Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-6 text-lg"
            >
              <MessageSquareText className="mr-2" size={20} />
              Chat WhatsApp
            </Button>
            <Button
              onClick={scrollToForm}
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg border-0"
            >
              Isi Form 1 Menit
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
    </>
  );
}
