import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfilPage() {
  // Mock kullanıcı verileri
  const kullanici = {
    id: 1,
    ad: "Ahmet",
    soyad: "Yılmaz",
    email: "ahmet.yilmaz@example.com",
    telefon: "+90 555 123 4567",
    adres: "Atatürk Mah. Cumhuriyet Cad. No: 123 Kat: 5 D: 10",
    sehir: "İstanbul",
    ilce: "Kadıköy",
    dogumTarihi: "1985-05-15",
    ehliyetNo: "12345678901",
    uyeTarihi: "2021-03-10",
    avatar: "/images/avatar.jpg"
  };

  // Mock rezervasyon verileri
  const aktifRezervasyonlar = [
    {
      id: "RSV-2023-08-15",
      arac: "BMW 3 Serisi",
      baslangicTarihi: "2023-08-15",
      bitisTarihi: "2023-08-18",
      lokasyon: "İstanbul Havalimanı",
      durum: "Onaylandı",
      toplam: 3450.75
    }
  ];

  const gecmisRezervasyonlar = [
    {
      id: "RSV-2023-06-10",
      arac: "Volkswagen Passat",
      baslangicTarihi: "2023-06-10",
      bitisTarihi: "2023-06-15",
      lokasyon: "Ankara Merkez",
      durum: "Tamamlandı",
      toplam: 4250.50
    },
    {
      id: "RSV-2023-04-22",
      arac: "Renault Clio",
      baslangicTarihi: "2023-04-22",
      bitisTarihi: "2023-04-25",
      lokasyon: "İzmir Merkez",
      durum: "Tamamlandı",
      toplam: 1875.25
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Hesabım</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sol Kısım - Menü */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center flex-col mb-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 overflow-hidden">
                {/* Gerçek bir avatar olduğunda Image componenti kullanılacak */}
                <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white text-2xl font-bold">
                  {kullanici.ad.charAt(0)}{kullanici.soyad.charAt(0)}
                </div>
              </div>
              <h2 className="text-xl font-bold">{kullanici.ad} {kullanici.soyad}</h2>
              <p className="text-gray-600 text-sm mb-2">{kullanici.email}</p>
              <p className="text-gray-600 text-sm">Üyelik: {new Date(kullanici.uyeTarihi).toLocaleDateString('tr-TR')}</p>
            </div>
            
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#kisisel-bilgiler" className="flex items-center p-2 bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Kişisel Bilgiler
                  </a>
                </li>
                <li>
                  <a href="#rezervasyonlar" className="flex items-center p-2 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Rezervasyonlarım
                  </a>
                </li>
                <li>
                  <a href="#sifre-degistir" className="flex items-center p-2 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Şifre Değiştir
                  </a>
                </li>
                <li>
                  <a href="#faturalar" className="flex items-center p-2 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Faturalarım
                  </a>
                </li>
                <li>
                  <a href="#favoriler" className="flex items-center p-2 hover:bg-gray-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Favorilerim
                  </a>
                </li>
              </ul>
            </nav>
            
            <div className="mt-6 pt-6 border-t">
              <a 
                href="/hesap/cikis" 
                className="flex items-center text-red-600 hover:text-red-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Çıkış Yap
              </a>
            </div>
          </div>
        </div>
        
        {/* Sağ Kısım - İçerik */}
        <div className="lg:col-span-3">
          {/* Kişisel Bilgiler */}
          <section id="kisisel-bilgiler" className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Kişisel Bilgiler</h2>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Düzenle
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-600 mb-1">Ad Soyad</h3>
                <p className="font-bold">{kullanici.ad} {kullanici.soyad}</p>
              </div>
              <div>
                <h3 className="text-gray-600 mb-1">E-posta</h3>
                <p className="font-bold">{kullanici.email}</p>
              </div>
              <div>
                <h3 className="text-gray-600 mb-1">Telefon</h3>
                <p className="font-bold">{kullanici.telefon}</p>
              </div>
              <div>
                <h3 className="text-gray-600 mb-1">Doğum Tarihi</h3>
                <p className="font-bold">{new Date(kullanici.dogumTarihi).toLocaleDateString('tr-TR')}</p>
              </div>
              <div>
                <h3 className="text-gray-600 mb-1">Adres</h3>
                <p className="font-bold">{kullanici.adres}</p>
              </div>
              <div>
                <h3 className="text-gray-600 mb-1">Şehir/İlçe</h3>
                <p className="font-bold">{kullanici.ilce}, {kullanici.sehir}</p>
              </div>
              <div>
                <h3 className="text-gray-600 mb-1">Ehliyet No</h3>
                <p className="font-bold">{kullanici.ehliyetNo}</p>
              </div>
            </div>
          </section>
          
          {/* Aktif Rezervasyonlar */}
          <section id="rezervasyonlar" className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-6">Aktif Rezervasyonlar</h2>
            
            {aktifRezervasyonlar.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Rezervasyon No</th>
                      <th className="px-4 py-2 text-left">Araç</th>
                      <th className="px-4 py-2 text-left">Tarih</th>
                      <th className="px-4 py-2 text-left">Durum</th>
                      <th className="px-4 py-2 text-left">Toplam</th>
                      <th className="px-4 py-2 text-left">İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aktifRezervasyonlar.map((rezervasyon) => (
                      <tr key={rezervasyon.id} className="border-b">
                        <td className="px-4 py-3">{rezervasyon.id}</td>
                        <td className="px-4 py-3">{rezervasyon.arac}</td>
                        <td className="px-4 py-3">
                          {new Date(rezervasyon.baslangicTarihi).toLocaleDateString('tr-TR')} - {' '}
                          {new Date(rezervasyon.bitisTarihi).toLocaleDateString('tr-TR')}
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {rezervasyon.durum}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-bold">₺{rezervasyon.toplam.toFixed(2)}</td>
                        <td className="px-4 py-3">
                          <Link href={`/rezervasyon/${rezervasyon.id}`} className="text-blue-600 hover:underline">
                            Detay
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Aktif rezervasyonunuz bulunmamaktadır.</p>
                <Link href="/araclar" className="text-blue-600 hover:underline mt-2 inline-block">
                  Hemen Araç Kirala
                </Link>
              </div>
            )}
          </section>
          
          {/* Geçmiş Rezervasyonlar */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-6">Geçmiş Rezervasyonlar</h2>
            
            {gecmisRezervasyonlar.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Rezervasyon No</th>
                      <th className="px-4 py-2 text-left">Araç</th>
                      <th className="px-4 py-2 text-left">Tarih</th>
                      <th className="px-4 py-2 text-left">Durum</th>
                      <th className="px-4 py-2 text-left">Toplam</th>
                      <th className="px-4 py-2 text-left">İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gecmisRezervasyonlar.map((rezervasyon) => (
                      <tr key={rezervasyon.id} className="border-b">
                        <td className="px-4 py-3">{rezervasyon.id}</td>
                        <td className="px-4 py-3">{rezervasyon.arac}</td>
                        <td className="px-4 py-3">
                          {new Date(rezervasyon.baslangicTarihi).toLocaleDateString('tr-TR')} - {' '}
                          {new Date(rezervasyon.bitisTarihi).toLocaleDateString('tr-TR')}
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                            {rezervasyon.durum}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-bold">₺{rezervasyon.toplam.toFixed(2)}</td>
                        <td className="px-4 py-3">
                          <Link href={`/rezervasyon/${rezervasyon.id}`} className="text-blue-600 hover:underline">
                            Detay
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Geçmiş rezervasyonunuz bulunmamaktadır.</p>
              </div>
            )}
            
            {gecmisRezervasyonlar.length > 2 && (
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:underline">
                  Tüm Geçmiş Rezervasyonları Gör
                </button>
              </div>
            )}
          </section>
          
          {/* Şifre Değiştir */}
          <section id="sifre-degistir" className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-6">Şifre Değiştir</h2>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Mevcut Şifre
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Yeni Şifre
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  Şifreniz en az 8 karakter olmalı ve en az bir büyük harf, bir küçük harf ve bir rakam içermelidir.
                </p>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">
                  Yeni Şifre (Tekrar)
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Şifreyi Güncelle
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
} 