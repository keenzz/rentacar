import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileBottomNavbar from "./components/MobileBottomNavbar";
import InfoModal from "./components/InfoModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentaCar - Araç Kiralama Servisi",
  description: "Modern ve güvenilir araç kiralama hizmeti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {/* Bilgilendirme Modalı */}
        <InfoModal />
        
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto py-4 px-4 flex justify-between items-center">
            <div className="text-2xl font-bold">RentaCar</div>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Ana Sayfa</a></li>
                <li><a href="/araclar" className="hover:underline">Araçlar</a></li>
                <li><a href="/hakkimizda" className="hover:underline">Hakkımızda</a></li>
                <li><a href="/iletisim" className="hover:underline">İletişim</a></li>
              </ul>
            </nav>
            <div className="hidden md:flex space-x-2">
              <a href="/hesap/giris" className="hover:underline">Giriş</a>
              <span>|</span>
              <a href="/hesap/kayit" className="hover:underline">Kayıt</a>
            </div>
          </div>
        </header>
        <main className="min-h-screen pb-16 md:pb-0">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">RentaCar</h3>
              <p>Modern ve güvenilir araç kiralama hizmeti</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                <li><a href="/araclar" className="hover:underline">Tüm Araçlar</a></li>
                <li><a href="/sss" className="hover:underline">Sık Sorulan Sorular</a></li>
                <li><a href="/sartlar" className="hover:underline">Şartlar ve Koşullar</a></li>
                <li><a href="/gizlilik" className="hover:underline">Gizlilik Politikası</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">İletişim</h4>
              <ul className="space-y-2">
                <li>Telefon: +90 212 123 45 67</li>
                <li>E-posta: info@rentacar.com</li>
                <li>Adres: Atatürk Cad. No:123, İstanbul</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Bizi Takip Edin</h4>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-8 pt-4 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} RentaCar. Tüm hakları saklıdır.</p>
          </div>
        </footer>
        
        {/* Mobil Alt Navigasyon */}
        <MobileBottomNavbar />
      </body>
    </html>
  );
}
