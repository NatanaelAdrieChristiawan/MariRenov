import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';

const faqData = [
  {
    question: 'Apakah bisa desain saja tanpa build?',
    answer:
      'Ya, tentu saja! Kami melayani jasa desain saja (eksterior, interior, gambar kerja). Anda bebas memilih kontraktor sendiri untuk pembangunan. Atau Anda juga bisa pilih paket lengkap Desain + Build dari kami untuk kemudahan dan one-stop service.',
  },
  {
    question: 'Berapa lama proses desain biasanya?',
    answer:
      'Tergantung kompleksitas proyek. Untuk rumah standar 2 lantai, biasanya 2-4 minggu termasuk revisi. Untuk proyek yang lebih kompleks bisa 4-8 minggu. Kami akan berikan timeline yang jelas dan detail di awal konsultasi.',
  },
  {
    question: 'Bagaimana sistem pembayaran?',
    answer:
      'Sistem pembayaran bertahap (termin) sesuai progres pekerjaan. Untuk desain: biasanya DP 50%, pelunasan setelah acc final. Untuk build: termin disesuaikan dengan milestone proyek (pondasi, struktur, finishing, dll). Semua jelas di kontrak dan tidak ada biaya tersembunyi.',
  },
  {
    question: 'Apakah ada garansi?',
    answer:
      'Ya, untuk pembangunan kami berikan garansi struktur dan garansi workmanship sesuai ketentuan. Detail garansi akan dijelaskan di kontrak kerja sama. Kami juga menyediakan after-sales service untuk maintenance dan perbaikan.',
  },
  {
    question: 'Berapa kali revisi desain yang bisa dilakukan?',
    answer:
      'Untuk paket standar, kami menyediakan 2-3 kali revisi major. Revisi minor (seperti perubahan warna, material alternatif) bisa lebih fleksibel. Kami ingin memastikan Anda benar-benar puas dengan hasil desain sebelum eksekusi.',
  },
  {
    question: 'Apakah bisa konsultasi dulu sebelum komit?',
    answer:
      'Tentu! Konsultasi awal GRATIS. Anda bisa diskusi kebutuhan, budget, timeline, dan melihat portfolio kami terlebih dahulu. Tidak ada kewajiban untuk langsung komit. Kami ingin Anda merasa yakin sebelum memulai.',
  },
  {
    question: 'Layanan tersedia untuk area mana saja?',
    answer:
      'Kami melayani area [KOTA] dan sekitarnya. Untuk proyek di luar area, silakan hubungi kami untuk diskusi lebih lanjut. Kami bisa melayani remote untuk jasa desain, dan untuk build akan disesuaikan dengan lokasi proyek.',
  },
  {
    question: 'Apakah RAB bisa berubah di tengah proyek?',
    answer:
      'RAB yang sudah disepakati bersifat binding. Perubahan hanya terjadi jika ada change order dari klien (misalnya menambah ruangan, upgrade material). Semua perubahan harus disetujui tertulis dan harga jelas sebelum eksekusi.',
  },
  {
    question: 'Bagaimana cara monitoring progres pembangunan?',
    answer:
      'Kami memberikan laporan progres mingguan via WhatsApp berisi foto dan video progress pekerjaan. Project manager kami juga responsif untuk pertanyaan. Anda juga bisa site visit kapan saja dengan konfirmasi terlebih dahulu.',
  },
  {
    question: 'Apakah material bisa pilih sendiri atau harus dari Anda?',
    answer:
      'Fleksibel! Kami bisa supply material (kami punya akses ke supplier berkualitas dengan harga kompetitif), atau Anda bisa supply sendiri. Untuk material dari klien, kami akan QC terlebih dahulu untuk memastikan kualitas dan kesesuaian spesifikasi.',
  },
  {
    question: 'Minimal budget untuk menggunakan jasa Anda?',
    answer:
      'Untuk jasa desain mulai dari 5-10 juta tergantung kompleksitas. Untuk build, minimal budget sekitar 100 juta untuk proyek renovasi, dan 200-300 juta untuk new build rumah kecil. Silakan konsultasi untuk budget spesifik sesuai kebutuhan Anda.',
  },
  {
    question: 'Apakah ada biaya survey lokasi?',
    answer:
      'Survey lokasi BSD & Tangerang GRATIS untuk klien serius.Untuk area lain di Jabodetabek, mungkin ada biaya transport (akan dikonfirmasi terlebih dahulu).Biaya survey akan dikembalikan jika project jadi.Berbasis di BSD, melayani area sekitarnya.Area lain di Jabodetabek dapat kami layani setelah diskusi awal.Kami hanya menyediakan desain tatap muka agar proses lebih personal dan hasil maksimal.',
  },
  {
    question: 'Bagaimana jika ada masalah setelah serah terima?',
    answer:
      'Kami berkomitmen pada after-sales service. Jika ada masalah dalam periode garansi, kami akan perbaiki tanpa biaya tambahan. Di luar garansi, kami tetap siap membantu dengan biaya yang fair dan transparan.',
  },
  {
    question: 'Apakah tim Anda sertifikasi atau licensed?',
    answer:
      'Ya, tim kami terdiri dari arsitek bersertifikat, project manager berpengalaman, dan tukang tersertifikasi. Kami juga bekerja sama dengan konsultan struktur untuk proyek-proyek tertentu yang membutuhkan perhitungan engineering.',
  },
  {
    question: 'Berapa lama waktu build untuk rumah 2 lantai?',
    answer:
      'Untuk rumah 2 lantai standar (150-200m²), waktu build biasanya 5-7 bulan tergantung kompleksitas desain dan cuaca. Kami akan berikan timeline detail di awal dengan buffer untuk antisipasi. Komitmen kami adalah on-time delivery sesuai kontrak.',
  },
];

export function FAQPage() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl mb-4 text-primary">
            Pertanyaan yang Sering Ditanyakan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Temukan jawaban untuk pertanyaan umum tentang layanan Design & Build kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-md border-0"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline">
                <span className="text-left font-medium text-primary">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-lg">
          <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl mb-4 text-primary">
            Masih Ada Pertanyaan?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Tim kami siap menjawab pertanyaan spesifik Anda via WhatsApp
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            Chat dengan Kami
          </Button>
        </div>
      </div>
    </div>
  );
}
