import { TestimonialCard } from './TestimonialCard';
import { Button } from './ui/button';
import { useMemo } from 'react';

const cities = [
  'Tangerang Selatan',
  'Tangerang',
  'Jakarta Selatan',
  'Jakarta Barat',
  'Jakarta Pusat',
  'Jakarta Timur',
  'Jakarta Utara',
  'Depok',
  'Kabupaten Tangerang',
  'Bekasi',
  'Kabupaten Bekasi',
  'Bogor',
];

const allTestimonials = [
  {
    name: 'Ibu Sarah Wijaya',
    location: 'BSD',
    project: 'Renovasi Rumah 2 Lantai',
    testimonial:
      'Sangat profesional dan detail. Dari konsultasi sampai serah terima, semua transparan. Tidak ada biaya tersembunyi dan hasilnya melebihi ekspektasi! Tim sangat responsif di WhatsApp.',
  },
  {
    name: 'Pak Daniel Kusuma',
    location: 'Jakarta Selatan',
    project: 'Pembangunan Villa',
    testimonial:
      'Timeline tepat waktu, kualitas bangunan kokoh, dan desain sesuai keinginan. Tim sangat responsif dan laporan progres rutin. Highly recommended untuk yang cari kontraktor profesional!',
  },
  {
    name: 'Ibu Linda Pratama',
    location: 'Alam Sutera',
    project: 'Desain Interior Apartemen',
    testimonial:
      'Hasil desain elegant dan fungsional. Revisi cepat dan tim sangat memahami keinginan saya. Budget juga tetap terkontrol sesuai RAB awal. Sangat puas!',
  },
  {
    name: 'Pak Rudi Hartono',
    location: '[KOTA]',
    project: 'Desain + Build Rumah Minimalis',
    testimonial:
      'Dari desain sampai build semua dikerjakan dengan rapi. Material berkualitas, tukang profesional, dan supervisi ketat. Worth it banget!',
  },
  {
    name: 'Ibu Michelle Tan',
    location: '[KOTA]',
    project: 'Renovasi Dapur & Ruang Makan',
    testimonial:
      'Desain modern dan fungsional. Proses cepat dan hasilnya sesuai visualisasi 3D. Komunikasi lancar dan tim sangat membantu dari awal sampai akhir.',
  },
  {
    name: 'Pak Benny Setiawan',
    location: '[KOTA]',
    project: 'Pembangunan Rumah 2 Lantai',
    testimonial:
      'Pengalaman terbaik dalam membangun rumah. Tidak ada drama, tidak ada delay, semua sesuai kontrak. Kualitas bangunan sangat baik dan harga kompetitif.',
  },
  {
    name: 'Ibu Cynthia Lim',
    location: '[KOTA]',
    project: 'Desain Interior & Furniture',
    testimonial:
      'Tim desain sangat kreatif dan mengerti style yang saya inginkan. Hasilnya stunning! Custom furniture juga dikerjakan dengan presisi tinggi.',
  },
  {
    name: 'Pak Agus Wijaya',
    location: '[KOTA]',
    project: 'Renovasi Total Rumah Lama',
    testimonial:
      'Rumah lama saya berubah total jadi modern dan nyaman. Proses renovasi berjalan lancar meskipun ada beberapa challenge. Tim sangat solutif!',
  },
  {
    name: 'Ibu Diana Sari',
    location: '[KOTA]',
    project: 'Desain Eksterior & Landscape',
    testimonial:
      'Fasad rumah jadi eye-catching! Desain eksterior yang ditawarkan fresh dan unik. Landscape juga ditata dengan baik. Terima kasih tim!',
  },
  {
    name: 'Pak Steven Chandra',
    location: '[KOTA]',
    project: 'Pembangunan Kantor 3 Lantai',
    testimonial:
      'Untuk proyek komersial, tim ini sangat recommended. Project management ketat, dokumentasi lengkap, dan hasil sesuai standar. Professional!',
  },
  {
    name: 'Ibu Kartika Putri',
    location: '[KOTA]',
    project: 'Desain Interior Kamar Tidur & Kamar Mandi',
    testimonial:
      'Kamar tidur dan kamar mandi saya sekarang seperti hotel bintang 5! Desain luxury tapi tetap warm dan nyaman. Love it!',
  },
  {
    name: 'Pak Tommy Gunawan',
    location: '[KOTA]',
    project: 'Renovasi Fasad & Interior Toko',
    testimonial:
      'Toko saya sekarang lebih menarik dan modern. Customer banyak yang compliment. ROI dari renovasi ini sangat bagus. Thanks team!',
  },
];

export function TestimoniPage() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A',
      '_blank'
    );
  };

  // Shuffle cities and assign to testimonials (except first 3 which have fixed locations)
  const testimonialsWithCities = useMemo(() => {
    const shuffledCities = [...cities].sort(() => Math.random() - 0.5);
    return allTestimonials.map((testimonial, index) => {
      // Keep first 3 testimonials with their fixed locations
      if (index < 3) {
        return testimonial;
      }
      // Randomize cities for the rest
      return {
        ...testimonial,
        location: shuffledCities[(index - 3) % shuffledCities.length],
      };
    });
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl mb-4 text-primary">
            Testimoni Klien
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kepuasan klien adalah bukti komitmen kami terhadap kualitas dan profesionalisme
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-['Playfair_Display'] text-primary mb-2">100+</div>
            <div className="text-sm text-gray-600">Proyek Selesai</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-['Playfair_Display'] text-primary mb-2">98%</div>
            <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-['Playfair_Display'] text-primary mb-2">30+</div>
            <div className="text-sm text-gray-600">Tahun Pengalaman</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-['Playfair_Display'] text-primary mb-2">4.9</div>
            <div className="text-sm text-gray-600">Rating Rata-rata</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonialsWithCities.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-lg">
          <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl mb-4 text-primary">
            Ingin Jadi Klien Kami Berikutnya?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan puluhan klien yang puas dengan hasil kerja profesional kami
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            Konsultasi Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
}
