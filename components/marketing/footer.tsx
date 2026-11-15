import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, ShieldCheck } from 'lucide-react'

export function MarketingFooter() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand & Kontak Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/opilines-logo.png"
                alt="Opilines"
                width={130}
                height={24}
                className="h-auto w-[124px] object-contain"
              />
            </Link>
            <p className="text-[13px] text-[#475569] leading-relaxed max-w-sm">
              Operating system terpadu untuk perusahaan jasa dan teknisi lapangan di Indonesia. Mengoptimalkan penjadwalan tugas, verifikasi SOP berbasis GPS, dan penerbitan Berita Acara Pekerjaan (BAP) digital.
            </p>

            <div className="pt-1 space-y-2 text-[12.5px]">
              <a
                href="mailto:support@opilines.com"
                className="flex items-center gap-2 text-[#475569] hover:text-[#007ACC] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#007ACC] shrink-0" />
                <span>support@opilines.com</span>
              </a>
              <a
                href="https://wa.me/628887771117"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#475569] hover:text-[#007ACC] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#007ACC] shrink-0" />
                <span>+62 888-777-1117 (WhatsApp CS)</span>
              </a>
            </div>
          </div>

          {/* Col 1: Fitur Platform */}
          <div className="col-span-1 space-y-3.5">
            <h4 className="font-heading text-[12.5px] font-semibold uppercase tracking-[0.05em] text-[#0F172A]">
              Fitur Platform
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#475569]">
              <li>
                <Link href="/fitur#dispatch" className="hover:text-[#007ACC] transition-colors">
                  Smart Dispatching
                </Link>
              </li>
              <li>
                <Link href="/fitur#job-management" className="hover:text-[#007ACC] transition-colors">
                  Manajemen Tiket SPK
                </Link>
              </li>
              <li>
                <Link href="/fitur#mobile" className="hover:text-[#007ACC] transition-colors">
                  Aplikasi HP Teknisi
                </Link>
              </li>
              <li>
                <Link href="/fitur#field-execution" className="hover:text-[#007ACC] transition-colors">
                  Checklist SOP &amp; GPS
                </Link>
              </li>
              <li>
                <Link href="/fitur#assets" className="hover:text-[#007ACC] transition-colors">
                  Riwayat Aset &amp; Servis
                </Link>
              </li>
              <li>
                <Link href="/fitur#monitoring" className="hover:text-[#007ACC] transition-colors">
                  Monitoring SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solusi & Paket */}
          <div className="col-span-1 space-y-3.5">
            <h4 className="font-heading text-[12.5px] font-semibold uppercase tracking-[0.05em] text-[#0F172A]">
              Solusi &amp; Harga
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#475569]">
              <li>
                <Link href="/pricing" className="hover:text-[#007ACC] transition-colors font-medium text-[#007ACC]">
                  Paket &amp; Harga (IDR)
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-[#007ACC] transition-colors">
                  Jadwalkan Demo
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-[#007ACC] transition-colors">
                  Coba Gratis 14 Hari
                </Link>
              </li>
              <li>
                <Link href="/fitur" className="hover:text-[#007ACC] transition-colors">
                  Servis AC &amp; HVAC
                </Link>
              </li>
              <li>
                <Link href="/fitur" className="hover:text-[#007ACC] transition-colors">
                  Maintenance Gedung
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#007ACC] transition-colors">
                  Masuk ke Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Kebijakan */}
          <div className="col-span-2 sm:col-span-1 space-y-3.5">
            <h4 className="font-heading text-[12.5px] font-semibold uppercase tracking-[0.05em] text-[#0F172A]">
              Bantuan &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#475569]">
              <li>
                <Link href="/terms" className="hover:text-[#007ACC] transition-colors">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/terms#privacy" className="hover:text-[#007ACC] transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms#refund" className="hover:text-[#007ACC] transition-colors">
                  Kebijakan Refund Dana
                </Link>
              </li>
              <li>
                <Link href="/terms#akun-keamanan" className="hover:text-[#007ACC] transition-colors">
                  Keamanan Akun &amp; Data
                </Link>
              </li>
              <li>
                <Link href="/terms#pembayaran" className="hover:text-[#007ACC] transition-colors">
                  Informasi Pembayaran
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#64748B]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Opilines Indonesia. Hak Cipta Dilindungi. Transaksi resmi dalam mata uang Rupiah (IDR).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <span className="inline-flex items-center gap-1.5 text-[#0F172A] font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
              Pembayaran Midtrans Terenkripsi
            </span>
            <span>•</span>
            <span>PCI-DSS Level 1</span>
            <span>•</span>
            <span>Server Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

