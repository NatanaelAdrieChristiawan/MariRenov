import { useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioDetail, PortfolioItem } from './PortfolioDetail';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Download } from 'lucide-react';

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAzMDA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Villa Minimalis Modern',
    type: 'Desain + Build',
    location: 'Tangerang Selatan',
    images: [
      'https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAzMDA4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MDM1ODUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwMzU3NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description:
      'Villa minimalis modern dengan konsep open space yang memadukan estetika Jepang dan Skandinavia. Desain yang clean dengan material premium seperti marmer Carrara, kayu jati, dan kaca tempered. Pencahayaan alami dimaksimalkan dengan skylight dan jendela floor-to-ceiling.',
    year: '2024',
    duration: '8 bulan',
    budget: 'Rp 2.5M - 3M',
    client: 'Keluarga Wijaya',
    specs: [
      'Luas Bangunan: 300m²',
      'Lantai: 2 lantai',
      'Kamar Tidur: 4 + 1 maid room',
      'Kamar Mandi: 5',
      'Material: Marmer Carrara, Kayu Jati, Kaca Tempered',
      'Smart Home System dengan kontrol suhu & lighting otomatis',
    ],
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjAyNjAzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Ruang Tamu Contemporary',
    type: 'Desain Interior',
    location: 'Jakarta Selatan',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjAyNjAzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1707299231603-6c0a93e0f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjAzNjEwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description:
      'Desain ruang tamu contemporary dengan palet warna netral yang hangat. Furniture custom dari kayu walnut dengan sentuhan brass accent. Layout dirancang untuk mendukung entertaining sekaligus intimate family gathering.',
    year: '2023',
    duration: '3 bulan',
    budget: 'Rp 400M - 600M',
    client: 'Ibu Sarah',
    specs: [
      'Luas Ruangan: 60m²',
      'Custom Sofa dari fabric premium Italia',
      'Coffee table marmer Calacatta',
      'Built-in storage dengan panel kayu walnut',
      'Lighting design dengan dimmer system',
    ],
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MDI5NTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Rumah Eksterior Modern',
    type: 'Desain Eksterior',
    location: 'BSD City',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MDI5NTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description:
      'Fasad rumah modern dengan kombinasi material beton exposed, kayu, dan kaca. Desain box-shaped dengan void dan balkon yang menciptakan dimensi visual menarik. Carport terintegrasi dengan landscape minimalis.',
    year: '2024',
    duration: '5 bulan',
    budget: 'Rp 1.8M - 2.2M',
    client: 'Pak Daniel',
    specs: [
      'Luas Tanah: 200m²',
      'Luas Bangunan: 180m²',
      'Material: Beton Exposed, Kayu Bengkirai, Kaca',
      'Carport untuk 2 mobil',
      'Landscape dengan vertical garden',
    ],
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1625578782042-3f2ad4f42956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwMjg2Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Master Bedroom Suite',
    type: 'Desain Interior',
    location: 'Jakarta Pusat',
    images: [
      'https://images.unsplash.com/photo-1625578782042-3f2ad4f42956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwMjg2Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description:
      'Master bedroom suite dengan konsep hotel bintang 5. Dilengkapi dengan walk-in closet, ensuite bathroom, dan private balcony. Material premium dan detail finishing yang sangat rapi menciptakan suasana mewah namun tetap nyaman.',
    year: '2023',
    duration: '4 bulan',
    budget: 'Rp 500M - 700M',
    client: 'Keluarga Kusuma',
    specs: [
      'Luas Ruangan: 45m² (termasuk bathroom)',
      'Custom bed dengan headboard upholstered',
      'Walk-in closet dengan lighting LED strips',
      'Ensuite bathroom dengan bathtub & rain shower',
      'Motorized curtain dengan remote control',
    ],
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwMjg2NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Dapur Modern',
    type: 'Desain Interior',
    location: 'Tangerang',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwMjg2NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description:
      'Dapur modern dengan island counter dan breakfast bar. Kitchen set dengan finishing HPL glossy dan countertop granit hitam. Dilengkapi dengan built-in appliances dari brand ternama dan hood dengan exhaust yang powerful.',
    year: '2024',
    duration: '2.5 bulan',
    budget: 'Rp 350M - 500M',
    client: 'Ibu Michelle',
    specs: [
      'Luas Dapur: 25m²',
      'Kitchen set custom dengan HPL glossy',
      'Countertop granit hitam absolute',
      'Built-in oven, cooktop, & dishwasher',
      'Island dengan storage & breakfast bar',
    ],
  },
  {
    id: '6',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjAyODY3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Kamar Mandi Luxury',
    type: 'Desain Interior',
    location: 'Jakarta Barat',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjAyODY3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjAzNjY2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description:
      'Kamar mandi luxury dengan konsep spa. Dilengkapi bathtub freestanding, rain shower, dan dual sink. Material marmer white Carrara dengan accent brass fixture menciptakan tampilan mewah dan timeless.',
    year: '2023',
    duration: '3 bulan',
    budget: 'Rp 300M - 450M',
    client: 'Keluarga Tan',
    specs: [
      'Luas Bathroom: 18m²',
      'Bathtub freestanding dengan brass faucet',
      'Rain shower & hand shower dengan thermostatic mixer',
      'Double vanity dengan countertop marmer',
      'Floor & wall cladding marmer Carrara',
    ],
  },
  {
    id: '7',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGZhY2FkZXxlbnwxfHx8fDE3NjAyODY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fasad Rumah Contemporary',
    type: 'Desain Eksterior',
    location: 'Depok',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGZhY2FkZXxlbnwxfHx8fDE3NjAyODY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description:
      'Desain fasad contemporary dengan permainan void dan balkon yang menciptakan kesan dinamis. Kombinasi warna abu-abu dan putih dengan accent kayu memberikan karakter modern namun warm.',
    year: '2024',
    duration: '4 bulan',
    budget: 'Rp 1.2M - 1.5M',
    client: 'Pak Agus',
    specs: [
      'Luas Bangunan: 150m²',
      'Material: Cat tekstur, Panel GRC, Kayu',
      'Void di tengah rumah untuk sirkulasi udara',
      'Balkon di lantai 2 dengan railing kaca',
    ],
  },
  {
    id: '8',
    image:
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZW5vdmF0aW9uJTIwaG9tZXxlbnwxfHx8fDE3NjAyODY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Renovasi Total Rumah',
    type: 'Desain + Build',
    location: 'Bekasi',
    images: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZW5vdmF0aW9uJTIwaG9tZXxlbnwxfHx8fDE3NjAyODY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description:
      'Renovasi total mengubah rumah lama menjadi modern minimalis. Perubahan layout untuk optimalisasi ruang, upgrade struktur, dan penggantian semua material interior & eksterior. Hasilnya rumah yang terasa brand new dengan gaya hidup modern.',
    year: '2023',
    duration: '6 bulan',
    budget: 'Rp 1.5M - 2M',
    client: 'Keluarga Setiawan',
    specs: [
      'Luas Bangunan: 120m²',
      'Perubahan layout untuk open concept',
      'Upgrade struktur & atap',
      'Replace semua material interior & eksterior',
      'Instalasi listrik & plumbing baru',
    ],
  },
  {
    id: '9',
    image:
      'https://images.unsplash.com/photo-1600607686442-67e9e50affe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjByZW5vdmF0aW9uJTIwaG9tZXxlbnwxfHx8fDE3NjAyODY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Open Concept Living',
    type: 'Desain Interior',
    location: 'Bogor',
    images: [
      'https://images.unsplash.com/photo-1600607686442-67e9e50affe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjByZW5vdmF0aW9uJTIwaG9tZXxlbnwxfHx8fDE3NjAyODY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description:
      'Desain interior open concept yang menggabungkan ruang tamu, ruang makan, dan dapur dalam satu ruang luas. Pembagian area menggunakan furniture placement dan material flooring yang berbeda, menciptakan flow yang natural.',
    year: '2024',
    duration: '4 bulan',
    budget: 'Rp 600M - 800M',
    client: 'Ibu Diana',
    specs: [
      'Luas Total: 70m²',
      'Open concept living, dining, & kitchen',
      'Different flooring untuk zonasi ruang',
      'Custom furniture set dengan palet warna konsisten',
      'Lighting design dengan multiple circuits',
    ],
  },
];

export function PortfolioPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);

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

  return (
    <>
      <PortfolioDetail portfolio={selectedPortfolio} onClose={handleCloseDetail} />
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl mb-4 text-primary">
              Portfolio Proyek
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat hasil karya kami yang telah mewujudkan rumah impian puluhan klien
            </p>
          </div>

          {/* Tabs Filter */}
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">Semua</TabsTrigger>
                <TabsTrigger value="design-build">Desain + Build</TabsTrigger>
                <TabsTrigger value="interior">Interior</TabsTrigger>
                <TabsTrigger value="exterior">Eksterior</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item) => (
                  <PortfolioCard 
                    key={item.id} 
                    {...item} 
                    onClick={() => handlePortfolioClick(item)}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="design-build" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.type === 'Desain + Build')
                  .map((item) => (
                    <PortfolioCard 
                      key={item.id} 
                      {...item} 
                      onClick={() => handlePortfolioClick(item)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="interior" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.type === 'Desain Interior')
                  .map((item) => (
                    <PortfolioCard 
                      key={item.id} 
                      {...item} 
                      onClick={() => handlePortfolioClick(item)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="exterior" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.type === 'Desain Eksterior')
                  .map((item) => (
                    <PortfolioCard 
                      key={item.id} 
                      {...item} 
                      onClick={() => handlePortfolioClick(item)}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <div className="mt-20 text-center bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-lg">
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl mb-4 text-primary">
              Tertarik dengan Portfolio Kami?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Konsultasikan proyek Anda dan wujudkan rumah impian bersama tim profesional
              MariRenov
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
              >
                Konsultasi via WhatsApp
              </Button>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
