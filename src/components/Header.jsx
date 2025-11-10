import { MessageCircle, FileText, ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Otomatisasi Surat via WhatsApp
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Buat draf surat, konfirmasi penandatangan melalui WhatsApp, lalu unduh PDF lengkap
            dengan tanda tangan digital dan barcode verifikasi.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <MessageCircle size={18} />
            <span>Alur WA</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <FileText size={18} />
            <span>PDF Otomatis</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <ShieldCheck size={18} />
            <span>Barcode Verifikasi</span>
          </div>
        </div>
      </div>
    </header>
  );
}
