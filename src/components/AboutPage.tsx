import { TeamCard } from './TeamCard';
import { Button } from './ui/button';
import { Award, Target, Heart, TrendingUp, Shield, Users } from 'lucide-react';

export function AboutPage() {
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
            Tentang Kami
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Lebih dari 30 tahun pengalaman dalam industri konstruksi, material, dan desain
          </p>
        </div>

        {/* Story */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl mb-6 text-primary text-center">
            Cerita Kami
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-600">
            <p className="leading-relaxed mb-4">
              MariRenov lahir dari pengalaman puluhan tahun di industri material bangunan dan
              construction management. Kami memahami betul pain points yang sering dialami klien:
              budget membengkak, timeline molor, kualitas tidak sesuai janji, dan komunikasi yang
              buruk.
            </p>
            <p className="leading-relaxed mb-4">
              Dengan background yang kuat di supply chain material dan project management, kami
              hadir untuk memberikan solusi end-to-end yang transparan, terukur, dan berkualitas
              tinggi. Kami percaya bahwa membangun rumah impian seharusnya menjadi pengalaman yang
              menyenangkan, bukan menegangkan.
            </p>
            <p className="leading-relaxed">
              Setiap proyek kami tangani dengan dedikasi penuh, karena kami tahu bahwa rumah bukan
              sekadar bangunan — ini adalah tempat Anda membuat kenangan bersama keluarga.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl mb-12 text-primary text-center">
            Nilai-Nilai Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-xl mb-3 text-primary">Transparansi</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Biaya jelas, timeline jelas, proses jelas. Tidak ada hidden cost atau kejutan tidak
                menyenangkan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-xl mb-3 text-primary">Kualitas</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Material terbaik, workmanship presisi, dan quality control ketat di setiap tahap
                pengerjaan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h4 className="font-['Playfair_Display'] text-xl mb-3 text-primary">Kepuasan</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Klien puas adalah ukuran kesuksesan kami. Kami berkomitmen pada hasil yang
                melebihi ekspektasi.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl mb-12 text-primary text-center">
            Mengapa Pilih Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <TrendingUp className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">30+ Tahun Pengalaman</h4>
                <p className="text-sm text-gray-600">
                  Track record panjang di industri material dan konstruksi memberikan kami insight
                  mendalam tentang quality control dan cost efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Shield className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Project Management Ketat</h4>
                <p className="text-sm text-gray-600">
                  Sistem monitoring dan kontrol proyek yang terstruktur memastikan on-time dan
                  on-budget delivery.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Tim Profesional</h4>
                <p className="text-sm text-gray-600">
                  Arsitek bersertifikat, project manager berpengalaman, dan tukang tersertifikasi
                  untuk hasil maksimal.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Target className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">One-Stop Service</h4>
                <p className="text-sm text-gray-600">
                  Dari desain hingga build, satu tim yang bertanggung jawab penuh untuk kemudahan
                  dan efisiensi Anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl mb-4 text-primary text-center">
            Tim Kami
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dipimpin oleh profesional berpengalaman dengan keahlian komplementer
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <TeamCard
              name="Budi Arianto Kho"
              role="Founder & Material Expert"
              description="30+ tahun pengalaman di material bangunan & interior. Pernah memimpin 3 perusahaan material. Ahli dalam quality control dan supply chain management. Memastikan setiap material yang digunakan adalah yang terbaik dengan harga kompetitif."
              image="/images/budi.png"
              linkedIn="https://www.linkedin.com/in/budi-arianto-359ba53a/"
            />
            <TeamCard
              name="Winston Khogres"
              role="Project Manager & Business Engineering"
              description="Spesialis project management dengan fokus pada kontrol scope, jadwal, dan biaya. Memastikan proyek on-time dan on-budget dengan sistem monitoring ketat. Background business engineering memberikan pendekatan sistematis dan data-driven."
              image="/images/winston.png"
              linkedIn="https://www.linkedin.com/in/winston-khogres-b5a0692b4/"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-full shadow-md">
              <span className="text-accent text-2xl">★</span>
              <span className="font-['Playfair_Display'] text-xl text-primary">
                Mewah • Kokoh • Cepat
              </span>
              <span className="text-accent text-2xl">★</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary text-white p-12 rounded-lg">
          <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl mb-4">
            Mari Bicara tentang Proyek Anda
          </h3>
          <p className="mb-8 max-w-2xl mx-auto text-white/90">
            Tim kami siap mendengarkan dan membantu mewujudkan rumah impian Anda
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
          >
            Bicara dengan Tim Kami
          </Button>
        </div>
      </div>
    </div>
  );
}
