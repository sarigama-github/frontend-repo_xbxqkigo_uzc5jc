import { ArrowRight, Phone, FileSignature, Download, QrCode } from 'lucide-react';

const steps = [
  {
    title: 'Input Permintaan',
    desc: 'User mengirimkan format permintaan surat via WhatsApp bot.',
    icon: Phone,
  },
  {
    title: 'Generate Draf',
    desc: 'Sistem menyusun draf surat otomatis berdasarkan template.',
    icon: FileSignature,
  },
  {
    title: 'Konfirmasi Tanda Tangan',
    desc: 'Penandatangan menerima link konfirmasi di WA pribadi.',
    icon: ArrowRight,
  },
  {
    title: 'PDF + Barcode',
    desc: 'Surat final diunduh sebagai PDF dengan barcode verifikasi.',
    icon: QrCode,
  },
];

export default function FlowCard() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">Bagaimana Alurnya?</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mt-1">Empat langkah sederhana dari chat ke PDF bertanda tangan.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-3">
                <Icon size={20} />
              </div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
