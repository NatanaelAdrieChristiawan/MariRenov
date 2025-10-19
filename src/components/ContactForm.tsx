import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="font-['Playfair_Display'] text-2xl mb-6 text-center">
        Konsultasi Gratis — Isi Form 1 Menit
      </h3>

      <div className="space-y-5">
        {/* Nama */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent/0 via-accent/25 to-primary/25 opacity-0 blur-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-60" />
          <div className="relative">
            <Label htmlFor="nama">Nama Lengkap *</Label>
            <Input
              id="nama"
              type="text"
              required
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              placeholder="Nama Anda"
              className="mt-1.5 border-2 border-gray-300 hover:border-gray-400 transition-all focus:ring-2 focus:ring-accent focus:border-accent"
            />
            <p className="text-xs text-gray-500 mt-1 opacity-0 -translate-y-1 transition-all group-focus-within:opacity-100 group-focus-within:translate-y-0">
              Gunakan nama lengkap agar tim mudah mengidentifikasi Anda
            </p>
          </div>
        </motion.div>

        {/* WhatsApp */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.04 }}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-60" />
          <div className="relative">
            <Label htmlFor="whatsapp">No. WhatsApp *</Label>
            <Input
              id="whatsapp"
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="08123456789"
              className="mt-1.5 border-2 border-gray-300 hover:border-gray-400 transition-all focus:ring-2 focus:ring-accent focus:border-accent"
            />
            <p className="text-xs text-gray-500 mt-1 opacity-0 -translate-y-1 transition-all group-focus-within:opacity-100 group-focus-within:translate-y-0">
              Contoh: 0812xxxxxxx (tanpa +62)
            </p>
          </div>
        </motion.div>

        {/* Ruang yang ingin direnovasi */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.08 }}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent/25 to-primary/25 opacity-0 blur-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-60" />
          <div className="relative">
            <Label htmlFor="ruang">Ruang yang ingin saya renov *</Label>
            <Input
              id="ruang"
              type="text"
              required
              value={formData.ruang}
              onChange={(e) => setFormData({ ...formData, ruang: e.target.value })}
              placeholder="Contoh: Kamar tidur, dapur, seluruh rumah"
              className="mt-1.5 border-2 border-gray-300 hover:border-gray-400 transition-all focus:ring-2 focus:ring-accent focus:border-accent"
            />
            <p className="text-xs text-gray-500 mt-1 opacity-0 -translate-y-1 transition-all group-focus-within:opacity-100 group-focus-within:translate-y-0">
              Jelaskan ruangan agar kami bisa menyiapkan estimasi yang tepat
            </p>
          </div>
        </motion.div>

        {/* Lokasi */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/25 to-accent/25 opacity-0 blur-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-60" />
          <div className="relative">
            <Label htmlFor="lokasi">Lokasi *</Label>
            <Input
              id="lokasi"
              type="text"
              required
              value={formData.lokasi}
              onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
              placeholder="Kota/Kabupaten"
              className="mt-1.5 border-2 border-gray-300 hover:border-gray-400 transition-all focus:ring-2 focus:ring-accent focus:border-accent"
            />
            <p className="text-xs text-gray-500 mt-1 opacity-0 -translate-y-1 transition-all group-focus-within:opacity-100 group-focus-within:translate-y-0">
              Contoh: BSD, Tangerang Selatan
            </p>
          </div>
        </motion.div>

        {/* Budget */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.16 }}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent/25 to-primary/25 opacity-0 blur-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-60" />
          <div className="relative">
            <Label htmlFor="budget">Budget kira-kira *</Label>
            <Select
              required
              value={formData.budget as
              | "< 100 juta"
              | "100 - 300 juta"
              | "300 - 500 juta"
              | "500 juta - 1 Milyar"
              | "> 1 Milyar"
              | ""}
              onValueChange={(
              value:
                | "< 100 juta"
                | "100 - 300 juta"
                | "300 - 500 juta"
                | "500 juta - 1 Milyar"
                | "> 1 Milyar"
              ) => setFormData({ ...formData, budget: value })}
            >
              <SelectTrigger className="mt-1.5 border-2 border-gray-300 hover:border-gray-400 transition-all focus:ring-2 focus:ring-accent focus:border-accent data-[state=open]:ring-2 data-[state=open]:border-accent">
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
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/25 to-accent/25 opacity-0 blur-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-60" />
          <div className="relative">
            <Label htmlFor="timeline">Timeline yang diharapkan *</Label>
            <Select
              required
              value={formData.timeline as
              | "Segera (< 1 bulan)"
              | "1 - 3 bulan"
              | "3 - 6 bulan"
              | "> 6 bulan"
              | "Masih eksplorasi"
              | ""}
              onValueChange={(
              value:
                | "Segera (< 1 bulan)"
                | "1 - 3 bulan"
                | "3 - 6 bulan"
                | "> 6 bulan"
                | "Masih eksplorasi"
              ) => setFormData({ ...formData, timeline: value })}
            >
              <SelectTrigger className="mt-1.5 border-2 border-gray-300 hover:border-gray-400 transition-all focus:ring-2 focus:ring-accent focus:border-accent data-[state=open]:ring-2 data-[state=open]:border-accent">
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
        </motion.div>

        {/* Pesan (Optional) */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.24 }}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent/25 to-primary/25 opacity-0 blur-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-60" />
          <div className="relative">
            <Label htmlFor="pesan">Pesan tambahan (Opsional)</Label>
            <Textarea
              id="pesan"
              value={formData.pesan}
              onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
              placeholder="Ada yang ingin Anda sampaikan?"
              className="mt-1.5 border-2 border-gray-300 hover:border-gray-400 transition-all focus:ring-2 focus:ring-accent focus:border-accent"
              rows={3}
            />
            <p className="text-xs text-gray-500 mt-1 opacity-0 -translate-y-1 transition-all group-focus-within:opacity-100 group-focus-within:translate-y-0">
              Opsional: beritahu kami preferensi gaya atau deadline khusus
            </p>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.28 }}>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg mt-6"
            >
              Kirim via WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        <p className="text-xs text-center text-gray-500 mt-3">
          Dengan mengirim form ini, Anda akan dihubungi melalui WhatsApp
        </p>
      </div>
    </motion.form>
  );
}
