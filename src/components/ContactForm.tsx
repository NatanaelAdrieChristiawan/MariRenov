import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function ContactForm() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    ruang: '',
    lokasi: '',
    layanan: '',
    budget: '',
    timeline: '',
    pesan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `Halo Mari Renov, saya mau konsultasi.

*Nama:* ${formData.nama}
*No. WA:* ${formData.whatsapp}
*Ruang yang ingin saya renov:* ${formData.ruang}
*Lokasi:* ${formData.lokasi}
*Budget kira-kira:* ${formData.budget}
*Timeline yang diharapkan:* ${formData.timeline}
${formData.pesan ? `*Pesan Tambahan:* ${formData.pesan}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285285888158?text=${encodedMessage}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h3 className="font-['Playfair_Display'] text-2xl mb-6 text-center">
        Konsultasi Gratis — Isi Form 1 Menit
      </h3>

      <div className="space-y-5">
        {/* Nama */}
        <div>
          <Label htmlFor="nama">Nama Lengkap *</Label>
          <Input
            id="nama"
            type="text"
            required
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            placeholder="Nama Anda"
            className="mt-1.5"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <Label htmlFor="whatsapp">No. WhatsApp *</Label>
          <Input
            id="whatsapp"
            type="tel"
            required
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            placeholder="08123456789"
            className="mt-1.5"
          />
        </div>

        {/* Ruang yang ingin direnovasi */}
        <div>
          <Label htmlFor="ruang">Ruang yang ingin saya renov *</Label>
          <Input
            id="ruang"
            type="text"
            required
            value={formData.ruang}
            onChange={(e) => setFormData({ ...formData, ruang: e.target.value })}
            placeholder="Contoh: Kamar tidur, dapur, seluruh rumah"
            className="mt-1.5"
          />
        </div>

        {/* Lokasi */}
        <div>
          <Label htmlFor="lokasi">Lokasi *</Label>
          <Input
            id="lokasi"
            type="text"
            required
            value={formData.lokasi}
            onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
            placeholder="Kota/Kabupaten"
            className="mt-1.5"
          />
        </div>

        {/* Budget */}
        <div>
          <Label htmlFor="budget">Budget kira-kira *</Label>
          <Select
            required
            value={formData.budget}
            onValueChange={(value) => setFormData({ ...formData, budget: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Pilih budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="< 100 juta">{"< 100 juta"}</SelectItem>
              <SelectItem value="100 - 300 juta">100 - 300 juta</SelectItem>
              <SelectItem value="300 - 500 juta">300 - 500 juta</SelectItem>
              <SelectItem value="500 juta - 1 Milyar">500 juta - 1 Milyar</SelectItem>
              <SelectItem value="> 1 Milyar">{"> 1 Milyar"}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Timeline */}
        <div>
          <Label htmlFor="timeline">Timeline yang diharapkan *</Label>
          <Select
            required
            value={formData.timeline}
            onValueChange={(value) => setFormData({ ...formData, timeline: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Pilih timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Segera (< 1 bulan)">Segera ({"< 1 bulan"})</SelectItem>
              <SelectItem value="1 - 3 bulan">1 - 3 bulan</SelectItem>
              <SelectItem value="3 - 6 bulan">3 - 6 bulan</SelectItem>
              <SelectItem value="> 6 bulan">{"> 6 bulan"}</SelectItem>
              <SelectItem value="Masih eksplorasi">Masih eksplorasi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Pesan (Optional) */}
        <div>
          <Label htmlFor="pesan">Pesan tambahan (Opsional)</Label>
          <Textarea
            id="pesan"
            value={formData.pesan}
            onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
            placeholder="Ada yang ingin Anda sampaikan?"
            className="mt-1.5"
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg mt-6"
        >
          Kirim via WhatsApp
        </Button>

        <p className="text-xs text-center text-gray-500 mt-3">
          Dengan mengirim form ini, Anda akan dihubungi melalui WhatsApp
        </p>
      </div>
    </form>
  );
}
