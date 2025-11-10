import { useState } from 'react';
import { FileText, Send } from 'lucide-react';

export default function TemplateForm() {
  const [form, setForm] = useState({
    tipe: 'Surat Keterangan',
    nama: '',
    tujuan: '',
    tanggal: new Date().toISOString().slice(0, 10),
  });
  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const generatePreview = () => {
    const text = `${form.tipe}\n\nYang bertanda tangan di bawah ini menyatakan bahwa ${form.nama} benar membutuhkan surat untuk keperluan ${form.tujuan}.\n\nDibuat pada ${new Date(form.tanggal).toLocaleDateString('id-ID')}.`;
    setPreview(text);
  };

  const sendToWhatsApp = () => {
    // Simulasi kirim ke WA: membuat link WA dengan isi pesan
    const msg = encodeURIComponent(`Permintaan ${form.tipe}%0A%0A${preview || 'Draf akan dihasilkan.'}`);
    const url = `https://wa.me/?text=${msg}`;
    window.open(url, '_blank');
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2">
          <FileText className="text-indigo-600" />
          <h2 className="text-2xl font-semibold">Buat Draf Surat</h2>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 mt-1">Isi data berikut untuk membentuk draf awal surat yang akan dikirim via WhatsApp bot.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tipe Surat</label>
              <select name="tipe" value={form.tipe} onChange={handleChange} className="w-full rounded-lg border-neutral-300 dark:border-neutral-700 bg-transparent">
                <option>Surat Keterangan</option>
                <option>Surat Tugas</option>
                <option>Surat Undangan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nama Pemohon</label>
              <input name="nama" value={form.nama} onChange={handleChange} placeholder="Contoh: Budi Santoso" className="w-full rounded-lg border-neutral-300 dark:border-neutral-700 bg-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tujuan/Keperluan</label>
              <input name="tujuan" value={form.tujuan} onChange={handleChange} placeholder="Contoh: keperluan administrasi perusahaan" className="w-full rounded-lg border-neutral-300 dark:border-neutral-700 bg-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tanggal</label>
              <input type="date" name="tanggal" value={form.tanggal} onChange={handleChange} className="w-full rounded-lg border-neutral-300 dark:border-neutral-700 bg-transparent" />
            </div>

            <div className="flex gap-3 pt-2">
              <button onClick={generatePreview} className="px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">Buat Draf</button>
              <button onClick={sendToWhatsApp} className="px-4 py-2 rounded-lg bg-indigo-600 text-white flex items-center gap-2">
                <Send size={18} />
                Kirim ke WA
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Preview Draf</label>
            <textarea value={preview} readOnly rows={14} className="w-full rounded-lg border-neutral-300 dark:border-neutral-700 bg-transparent"></textarea>
            <p className="text-xs text-neutral-500 mt-2">Catatan: Ini simulasi front-end. Integrasi penuh akan mengandalkan API untuk mengirim pesan, menerima konfirmasi, dan menghasilkan PDF + barcode.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
