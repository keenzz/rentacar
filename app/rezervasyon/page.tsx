import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RezervasyonPage() {
  // Seçilen araç için örnek veri
  const secilenArac = {
    id: 2,
    marka: 'BMW',
    model: '3 Serisi',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Benzin',
    koltuk: 5,
    bavul: 3,
    sinif: 'Premium',
    resim: '/images/araclar/bmw.jpg',
    gunlukFiyat: 1500
  };

  // Alış-teslim lokasyonları için örnek veri
  const lokasyonlar = [
    'İstanbul Havalimanı',
    'İstanbul Sabiha Gökçen',
    'İstanbul Ataşehir Ofis',
    'İstanbul Kadıköy Ofis',
    'Ankara Esenboğa Havalimanı',
    'Ankara Merkez Ofis',
    'İzmir Adnan Menderes Havalimanı',
    'İzmir Merkez Ofis',
    'Antalya Havalimanı',
    'Antalya Merkez Ofis'
  ];

  // Ekstra hizmetler için örnek veri
  const ekstraHizmetler = [
    {
      id: 1,
      ad: 'Tam Kasko',
      aciklama: 'Muafiyet olmadan tam koruma sağlar.',
      gunlukFiyat: 90,
      onerilen: true
    },
    {
      id: 2,
      ad: 'Navigasyon',
      aciklama: 'Yönünüzü kolayca bulmanız için.',
      gunlukFiyat: 25,
      onerilen: false
    },
    {
      id: 3,
      ad: 'Bebek Koltuğu',
      aciklama: '0-3 yaş arası çocuklar için.',
      gunlukFiyat: 15,
      onerilen: false
    },
    {
      id: 4,
      ad: 'İlave Sürücü',
      aciklama: 'Birden fazla sürücü için gereklidir.',
      gunlukFiyat: 35,
      onerilen: false
    },
    {
      id: 5,
      ad: 'Wi-Fi',
      aciklama: 'Seyahatiniz boyunca kesintisiz internet.',
      gunlukFiyat: 20,
      onerilen: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Rezervasyon</h1>
      
      {/* İlerleme Çubuğu */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div className="text-sm mt-2">Araç Seçimi</div>
          </div>
          
          <div className="flex-1 h-1 bg-blue-600 mx-2"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div className="text-sm mt-2">Rezervasyon</div>
          </div>
          
          <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">3</div>
            <div className="text-sm mt-2">Ödeme</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol Kolon - Araç Bilgileri ve Fiyat */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Seçilen Araç</h2>
            
            <div className="mb-4">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">
                  {secilenArac.marka} {secilenArac.model} Görseli
                </span>
              </div>
              <h3 className="text-lg font-bold">
                {secilenArac.marka} {secilenArac.model}
              </h3>
              <p className="text-sm text-gray-600">{secilenArac.yil}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="border rounded-lg p-2">
                <span className="text-xs text-gray-500 block">Vites</span>
                <span className="font-medium">{secilenArac.vites}</span>
              </div>
              <div className="border rounded-lg p-2">
                <span className="text-xs text-gray-500 block">Yakıt</span>
                <span className="font-medium">{secilenArac.yakit}</span>
              </div>
              <div className="border rounded-lg p-2">
                <span className="text-xs text-gray-500 block">Koltuk</span>
                <span className="font-medium">{secilenArac.koltuk} Kişilik</span>
              </div>
              <div className="border rounded-lg p-2">
                <span className="text-xs text-gray-500 block">Bavul</span>
                <span className="font-medium">{secilenArac.bavul} Bavul</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Araç Sınıfı:</span>
                <span className="font-medium">{secilenArac.sinif}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-blue-600">
                <span>Günlük Fiyat:</span>
                <span>{secilenArac.gunlukFiyat} ₺</span>
              </div>
            </div>
            
            <div className="mt-4">
              <Link 
                href="/araclar" 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Başka Araç Seç
              </Link>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">Kiralama Politikası</h3>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• Rezervasyon için minimum yaş: 21</li>
              <li>• En az 1 yıllık ehliyet gereklidir</li>
              <li>• 24 saat öncesine kadar ücretsiz iptal</li>
              <li>• Kredi kartı ve ehliyet ibrazı zorunludur</li>
              <li>• Depozito tutarı: 2.000 ₺</li>
              <li>• İade için tam yakıt deposu gerekli</li>
            </ul>
          </div>
        </div>
        
        {/* Sağ Kolon - Rezervasyon Formu */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">Tarih ve Lokasyon</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold mb-4">Alış Bilgileri</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Alış Tarihi
                    </label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Alış Saati
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      {Array.from({ length: 24 }, (_, i) => i).map(hour => (
                        <option key={hour} value={hour}>
                          {hour.toString().padStart(2, '0')}:00
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Alış Lokasyonu
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option value="">Lokasyon Seçiniz</option>
                      {lokasyonlar.map((lokasyon, index) => (
                        <option key={index} value={lokasyon}>
                          {lokasyon}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Teslim Bilgileri</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Teslim Tarihi
                    </label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Teslim Saati
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      {Array.from({ length: 24 }, (_, i) => i).map(hour => (
                        <option key={hour} value={hour}>
                          {hour.toString().padStart(2, '0')}:00
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Teslim Lokasyonu
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option value="">Lokasyon Seçiniz</option>
                      {lokasyonlar.map((lokasyon, index) => (
                        <option key={index} value={lokasyon}>
                          {lokasyon}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-600 text-sm">Toplam kiralama süresi: <span className="font-medium">3 gün</span></span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-blue-600 text-sm font-medium">Fiyat: 4.500 ₺</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">Ekstra Hizmetler</h2>
            
            <div className="space-y-4">
              {ekstraHizmetler.map(hizmet => (
                <div 
                  key={hizmet.id} 
                  className={`border rounded-lg p-4 ${hizmet.onerilen ? 'border-blue-300 bg-blue-50' : ''}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-1">
                      <input 
                        type="checkbox" 
                        id={`hizmet-${hizmet.id}`} 
                        className="h-5 w-5 rounded border-gray-300"
                        defaultChecked={hizmet.onerilen}
                      />
                    </div>
                    
                    <div className="ml-3 flex-1">
                      <label htmlFor={`hizmet-${hizmet.id}`} className="text-gray-800 font-medium flex items-center">
                        {hizmet.ad}
                        {hizmet.onerilen && (
                          <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                            Önerilen
                          </span>
                        )}
                      </label>
                      <p className="text-sm text-gray-600 mt-1">{hizmet.aciklama}</p>
                    </div>
                    
                    <div className="flex-shrink-0 text-right">
                      <div className="text-blue-600 font-bold">{hizmet.gunlukFiyat} ₺</div>
                      <div className="text-xs text-gray-500">günlük</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">Kişisel Bilgiler</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Ad*
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Soyad*
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  E-posta*
                </label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Telefon*
                </label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Adres
              </label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={3}
              ></textarea>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-start mb-4">
                <div className="flex items-center h-5">
                  <input
                    id="special-requests"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="special-requests" className="text-gray-700">
                    Özel İstekler (Uçuş numarası, gecikmeli uçuş, özel notlar vs.)
                  </label>
                </div>
              </div>
              
              <div className="hidden special-requests-area">
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                  rows={3}
                  placeholder="Özel isteklerinizi buraya yazabilirsiniz..."
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">Sürücü Bilgileri</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5 pt-1">
                  <input
                    id="same-person"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded"
                    defaultChecked
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="same-person" className="text-gray-700 font-medium">
                    Sürücü bilgileri rezervasyon sahibi ile aynı
                  </label>
                  <p className="text-sm text-gray-500 mt-1">
                    Araç kiralayan kişi ve sürücü farklı ise bu kutucuğun işaretini kaldırın.
                  </p>
                </div>
              </div>
              
              <div className="driver-details hidden border-t pt-4 mt-4">
                <h3 className="font-bold mb-4">Sürücü Detayları</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Ad*
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Soyad*
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Ehliyet Numarası*
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Doğum Tarihi*
                    </label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">Rezervasyon Özeti</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Araç:</span>
                <span className="font-medium">{secilenArac.marka} {secilenArac.model}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Kiralama Süresi:</span>
                <span className="font-medium">3 Gün</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Araç Ücreti:</span>
                <span className="font-medium">4.500 ₺</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Ekstra Hizmetler:</span>
                <span className="font-medium">270 ₺</span>
              </div>
              
              <div className="flex justify-between border-t pt-3 text-lg font-bold">
                <span>Toplam:</span>
                <span className="text-blue-600">4.770 ₺</span>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-700">
                  <Link href="/sartlar" className="text-blue-600 hover:underline">Kiralama Şartları ve Koşullarını</Link> okudum ve kabul ediyorum.
                </label>
              </div>
            </div>
            
            <Link 
              href="/odeme" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg block text-center"
            >
              Ödemeye Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 