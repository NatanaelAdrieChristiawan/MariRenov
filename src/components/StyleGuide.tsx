import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { ServiceCard } from './ServiceCard';
import { PortfolioCard } from './PortfolioCard';
import { TestimonialCard } from './TestimonialCard';
import { Home, PenTool } from 'lucide-react';

export function StyleGuide() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-['Playfair_Display'] text-5xl mb-4 text-primary text-center">
          Design System & Style Guide
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Panduan lengkap komponen dan styling untuk MariRenov — Design & Build Website
        </p>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">Color Palette</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="h-32 rounded-lg bg-[#65201c] shadow-lg"></div>
              <div className="text-sm">
                <p className="font-semibold">Burgundy (Primary)</p>
                <p className="text-gray-600">#65201c</p>
                <p className="text-xs text-gray-500">Tombol utama, heading</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-32 rounded-lg bg-[#ceb14f] shadow-lg"></div>
              <div className="text-sm">
                <p className="font-semibold">Gold (Accent)</p>
                <p className="text-gray-600">#ceb14f</p>
                <p className="text-xs text-gray-500">Aksen, ikon, highlight</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-32 rounded-lg bg-[#263b83] shadow-lg"></div>
              <div className="text-sm">
                <p className="font-semibold">Navy (Subteks)</p>
                <p className="text-gray-600">#263b83</p>
                <p className="text-xs text-gray-500">Teks sekunder</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-32 rounded-lg bg-[#f5f5f5] border shadow-lg"></div>
              <div className="text-sm">
                <p className="font-semibold">Light BG</p>
                <p className="text-gray-600">#f5f5f5</p>
                <p className="text-xs text-gray-500">Background utama</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">Typography</h2>
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Heading Font: Playfair Display</p>
              <h1 className="font-['Playfair_Display']">
                H1 - Heading Level 1 (56px / 3.5rem)
              </h1>
              <h2 className="font-['Playfair_Display']">
                H2 - Heading Level 2 (40px / 2.5rem)
              </h2>
              <h3 className="font-['Playfair_Display']">
                H3 - Heading Level 3 (32px / 2rem)
              </h3>
              <h4 className="font-['Playfair_Display']">H4 - Heading Level 4 (24px / 1.5rem)</h4>
            </div>
            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 mb-2">Body Font: Inter</p>
              <p className="text-base">Paragraph - Body text (16px / 1rem) - Regular weight</p>
              <p className="text-sm">Small text - Secondary info (14px / 0.875rem)</p>
            </div>
          </div>
        </section>

        {/* Spacing Scale */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">Spacing Scale</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">Base unit: 8px (0.5rem)</p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded"></div>
                <span className="text-sm">8px (0.5rem) - Small gaps</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded"></div>
                <span className="text-sm">16px (1rem) - Medium gaps</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary rounded"></div>
                <span className="text-sm">24px (1.5rem) - Large gaps</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded"></div>
                <span className="text-sm">32px (2rem) - XL gaps</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded"></div>
                <span className="text-sm">48px (3rem) - Section spacing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">Buttons</h2>
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-3">Primary Button (Solid Burgundy)</p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Primary Button
              </Button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">Secondary Button (Outline Gold)</p>
              <Button variant="outline" className="border-2 border-accent text-primary hover:bg-accent/10">
                Secondary Button
              </Button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">Tertiary Button (Text Link)</p>
              <Button variant="link" className="text-primary">
                Tertiary Button →
              </Button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">Large Size</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Large Button
              </Button>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">Form Elements</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
            <div className="space-y-4">
              <div>
                <Label htmlFor="demo-input">Input Label</Label>
                <Input
                  id="demo-input"
                  type="text"
                  placeholder="Placeholder text"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="demo-input2">Required Field *</Label>
                <Input
                  id="demo-input2"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="mt-1.5"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">Cards</h2>
          
          <h3 className="text-xl mb-4 text-gray-700">Service Card</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ServiceCard
              icon={Home}
              title="Desain Eksterior"
              description="Tampilan luar rumah yang memukau dengan gaya arsitektur modern"
            />
            <ServiceCard
              icon={PenTool}
              title="Gambar Kerja"
              description="Gambar teknis detail dan lengkap untuk memudahkan pelaksanaan"
            />
          </div>

          <h3 className="text-xl mb-4 text-gray-700">Portfolio Card</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400"
              title="Villa Modern Minimalis"
              type="Desain + Build"
              location="[KOTA]"
            />
          </div>

          <h3 className="text-xl mb-4 text-gray-700">Testimonial Card</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              name="Ibu Sarah Wijaya"
              location="[KOTA]"
              project="Renovasi Rumah 2 Lantai"
              testimonial="Sangat profesional dan detail. Dari konsultasi sampai serah terima, semua transparan."
            />
          </div>
        </section>

        {/* Grid System */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">Grid System</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">12-column grid, Max-width: 1280px (7xl container)</p>
            <div className="grid grid-cols-12 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-accent/30 h-16 rounded flex items-center justify-center text-sm">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Breakpoints */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">Breakpoints</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Mobile</span>
                <span>390px</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Tablet</span>
                <span>768px (md)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Desktop</span>
                <span>992px (lg)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold">Large Desktop</span>
                <span>1440px (xl)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl mb-8 text-primary">
            Design Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-2 text-primary">Clean & Elegant</h4>
              <p className="text-sm text-gray-600">
                Banyak whitespace, layout bersih, fokus pada konten penting
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-2 text-primary">High Conversion</h4>
              <p className="text-sm text-gray-600">
                CTA jelas, form singkat, akses mudah ke WhatsApp di setiap section
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-2 text-primary">Premium Feel</h4>
              <p className="text-sm text-gray-600">
                Tipografi serif untuk heading, warna burgundy & gold, imagery berkualitas tinggi
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
