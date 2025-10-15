import { ProcessTimeline } from './ProcessTimeline';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

export function ProsesPage() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/6285285888158?text=Halo%20Mari%20Renov%2C%20saya%20mau%20konsultasi.%0ANama%3A%0ANo.%20WA%3A%0ARuang%20yang%20ingin%20saya%20renov%3A%0ALokasi%3A%0ABudget%20kira-kira%3A%0ATimeline%20yang%20diharapkan%3A%0APesan%20Tambahan%3A',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl mb-4 text-primary">
            Proses Kerja Kami
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sistem kerja terstruktur dengan 6 langkah jelas untuk memastikan proyek Anda berjalan
            lancar dari awal hingga serah terima
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <ProcessTimeline variant="detailed" />
        </div>

        {/* Detailed Process Cards */}
        <div className="space-y-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-primary">
              1. Konsultasi Awal
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>
                Pada tahap ini, kami akan mendengarkan kebutuhan Anda secara detail meliputi:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Konsep dan gaya desain yang diinginkan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Budget yang tersedia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Timeline yang diharapkan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Kebutuhan spesifik (jumlah ruang, fungsi, dll)</span>
                </li>
              </ul>
              <p className="pt-2">
                <strong>Durasi:</strong> 1-2 jam • <strong>Biaya:</strong> GRATIS
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-primary">
              2. Survey & Site Visit
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>Tim kami akan melakukan kunjungan ke lokasi untuk:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Pengukuran detail lahan/bangunan existing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Analisis kondisi tanah dan struktur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Dokumentasi foto dan video</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Memahami orientasi bangunan dan lingkungan sekitar</span>
                </li>
              </ul>
              <p className="pt-2">
                <strong>Durasi:</strong> 1-2 hari
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-primary">
              3. Desain & Revisi
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>Proses kreatif dimulai dengan tahapan:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Konsep desain awal (sketsa & layout)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Presentasi desain 3D visualisasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Revisi hingga Anda puas (2-3x revisi termasuk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Gambar kerja detail untuk eksekusi</span>
                </li>
              </ul>
              <p className="pt-2">
                <strong>Durasi:</strong> 2-4 minggu (tergantung kompleksitas)
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-primary">
              4. RAB & Timeline
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>Transparansi penuh mengenai biaya dan jadwal:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Rencana Anggaran Biaya (RAB) detail per item</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Spesifikasi material yang digunakan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Timeline pengerjaan dengan milestone jelas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Sistem pembayaran bertahap (termin)</span>
                </li>
              </ul>
              <p className="pt-2">
                <strong>Durasi:</strong> 3-5 hari kerja
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-primary">
              5. Pembangunan
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>Eksekusi pembangunan dengan standar quality control tinggi:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Supervisi harian oleh project manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Laporan progres mingguan via WhatsApp (foto & video)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Quality control ketat setiap tahap (pondasi, struktur, finishing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Material berkualitas dari supplier terpercaya</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Tukang berpengalaman dan tersertifikasi</span>
                </li>
              </ul>
              <p className="pt-2">
                <strong>Durasi:</strong> Sesuai timeline yang disepakati (rata-rata 3-6 bulan untuk
                rumah 2 lantai)
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-primary">
              6. Serah Terima
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>Penyelesaian proyek dengan proses handover yang profesional:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Inspeksi final bersama klien</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Checklist kelengkapan dan kualitas finishing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Perbaikan jika ada ketidaksesuaian</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Serah terima dokumen (as-built drawing, garansi, manual perawatan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Garansi struktur dan workmanship</span>
                </li>
              </ul>
              <p className="pt-2">
                <strong>Durasi:</strong> 1-2 hari
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-lg">
          <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl mb-4 text-primary">
            Siap Memulai Proyek Anda?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Konsultasi gratis untuk membahas kebutuhan dan timeline proyek Anda
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            Konsultasi via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
