import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, slideIn, staggerContainer, fadeWhileInView } from '../animations/motionVariants';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioDetail, PortfolioItem } from './PortfolioDetail';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Download } from 'lucide-react';
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

export function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

        setItems(normalized);
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

  const handlePortfolioClick = (portfolio: PortfolioItem) => {
    setSelectedPortfolio(portfolio);
  };

  const handleCloseDetail = () => {
    setSelectedPortfolio(null);
  };

  if (loading) {
    return (
      <>
        <PortfolioDetail portfolio={selectedPortfolio} onClose={handleCloseDetail} />
        <div className="min-h-screen pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4">Memuat portfolio…</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PortfolioDetail portfolio={selectedPortfolio} onClose={handleCloseDetail} />
        <div className="min-h-screen pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 text-red-600">{error}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <PortfolioDetail portfolio={selectedPortfolio} onClose={handleCloseDetail} />
      <motion.div
        className="min-h-screen pt-24 pb-20"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.08, 0.05)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div className="text-center mb-16" variants={staggerContainer(0.08)}>
            <motion.h1
              className="font-['Playfair_Display'] text-4xl sm:text-5xl mb-4 text-primary"
              variants={fadeInUp}
            >
              Portfolio Proyek
            </motion.h1>
            <motion.p className="text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
              Lihat hasil karya kami yang telah mewujudkan rumah impian puluhan klien
            </motion.p>
          </motion.div>

          {/* Tabs Filter */}
          <Tabs defaultValue="all" className="w-full">
            <motion.div
              className="flex justify-center mb-12"
              variants={slideIn('up', 24)}
            >
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">Semua</TabsTrigger>
                <TabsTrigger value="design-build">Desain + Build</TabsTrigger>
                <TabsTrigger value="interior">Interior</TabsTrigger>
                <TabsTrigger value="exterior">Eksterior</TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    variants={fadeWhileInView}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={idx}
                  >
                    <PortfolioCard {...item} onClick={() => handlePortfolioClick(item)} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="design-build" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items
                  .filter((item) => item.type === 'Desain + Build')
                  .map((item, idx) => (
                    <motion.div
                      key={item.id}
                      variants={fadeWhileInView}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={idx}
                    >
                      <PortfolioCard {...item} onClick={() => handlePortfolioClick(item)} />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="interior" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items
                  .filter((item) => item.type === 'Desain Interior')
                  .map((item, idx) => (
                    <motion.div
                      key={item.id}
                      variants={fadeWhileInView}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={idx}
                    >
                      <PortfolioCard {...item} onClick={() => handlePortfolioClick(item)} />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="exterior" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items
                  .filter((item) => item.type === 'Desain Eksterior')
                  .map((item, idx) => (
                    <motion.div
                      key={item.id}
                      variants={fadeWhileInView}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={idx}
                    >
                      <PortfolioCard {...item} onClick={() => handlePortfolioClick(item)} />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <motion.div
            className="mt-20 text-center bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-lg"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="font-['Playfair_Display'] text-2xl sm:text-3xl mb-4 text-primary"
              variants={fadeInUp}
            >
              Tertarik dengan Portfolio Kami?
            </motion.h3>
            <motion.p className="text-gray-600 mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
              Konsultasikan proyek Anda dan wujudkan rumah impian bersama tim profesional
              MariRenov
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={staggerContainer(0.08)}
            >
              <motion.div variants={fadeInUp}>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
                >
                  Konsultasi via WhatsApp
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6"
                >
                  <a
                    href="https://drive.google.com/drive/folders/1ROa8ghvJ_uwIJjVybWFoYnfoYSej0pME?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Portfolio PDF
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
