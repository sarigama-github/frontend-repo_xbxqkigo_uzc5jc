export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} WA Surat Automation. Semua hak dilindungi.</p>
        <p>
          Dibuat untuk mendemokan alur: chat → konfirmasi → PDF + barcode. Siap integrasi dengan API backend dan WhatsApp Gateway.
        </p>
      </div>
    </footer>
  );
}
