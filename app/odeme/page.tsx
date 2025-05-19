import React from 'react';
import Link from 'next/link';

export default function OdemePage() {
  // Seçilen araç ve rezervasyon detayları için örnek veri
  const rezervasyon = {
    arac: {
      id: 2,
      marka: 'BMW',
      model: '3 Serisi',
      resim: '/images/araclar/bmw.jpg',
      vites: 'Otomatik',
      yakit: 'Benzin',
      sinif: 'Premium'
    },
    tarihler: {
      alis: '2023-08-15T10:00:00',
      teslim: '2023-08-20T10:00:00'
    },
    lokasyon: {
      alis: 'İstanbul Havalimanı',
      teslim: 'İstanbul Havalimanı'
    },
    ekstralar: [
      { ad: 'Navigasyon', fiyat: 25, gun: 5, toplam: 125 },
      { ad: 'Bebek Koltuğu', fiyat: 15, gun: 5, toplam: 75 }
    ],
    fiyatlandirma: {
      gunlukFiyat: 1500,
      gunSayisi: 5,
      aracToplam: 7500,
      ekstralarToplam: 200,
      indirim: 500,
      genelToplam: 7200
    }
  };

  // Tarih formatlama fonksiyonu
  const formatTarih = (tarihStr: string) => {
    const tarih = new Date(tarihStr);
    return tarih.toLocaleDateString('tr-TR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Ödeme</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol Kolon - Rezervasyon Özeti */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Rezervasyon Özeti</h2>
            
            <div className="mb-4">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">
                  {rezervasyon.arac.marka} {rezervasyon.arac.model} Görseli
                </span>
              </div>
              <h3 className="text-lg font-bold">
                {rezervasyon.arac.marka} {rezervasyon.arac.model}
              </h3>
              <div className="flex text-sm text-gray-600 mt-1">
                <span className="mr-2">{rezervasyon.arac.sinif}</span>
                <span className="mr-2">•</span>
                <span className="mr-2">{rezervasyon.arac.vites}</span>
                <span className="mr-2">•</span>
                <span>{rezervasyon.arac.yakit}</span>
              </div>
            </div>
            
            <div className="border-t pt-4 space-y-3">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Alış Tarihi:</span>
                  <span className="font-medium">{formatTarih(rezervasyon.tarihler.alis)}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Alış Yeri:</span>
                  <span className="font-medium">{rezervasyon.lokasyon.alis}</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Teslim Tarihi:</span>
                  <span className="font-medium">{formatTarih(rezervasyon.tarihler.teslim)}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Teslim Yeri:</span>
                  <span className="font-medium">{rezervasyon.lokasyon.teslim}</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Kiralama Süresi:</span>
                  <span className="font-medium">{rezervasyon.fiyatlandirma.gunSayisi} Gün</span>
                </div>
              </div>
            </div>
            
            {rezervasyon.ekstralar.length > 0 && (
              <div className="border-t pt-4 mt-4">
                <h3 className="font-bold mb-2">Ek Hizmetler</h3>
                {rezervasyon.ekstralar.map((ekstra, index) => (
                  <div key={index} className="flex justify-between text-sm mb-1">
                    <span>{ekstra.ad}</span>
                    <span>{ekstra.toplam} ₺</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="border-t pt-4 mt-4">
              <h3 className="font-bold mb-2">Fiyatlandırma</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Günlük Fiyat:</span>
                  <span>{rezervasyon.fiyatlandirma.gunlukFiyat} ₺</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Araç Toplam ({rezervasyon.fiyatlandirma.gunSayisi} gün):</span>
                  <span>{rezervasyon.fiyatlandirma.aracToplam} ₺</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ek Hizmetler:</span>
                  <span>{rezervasyon.fiyatlandirma.ekstralarToplam} ₺</span>
                </div>
                {rezervasyon.fiyatlandirma.indirim > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>İndirim:</span>
                    <span>-{rezervasyon.fiyatlandirma.indirim} ₺</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Genel Toplam:</span>
                  <span>{rezervasyon.fiyatlandirma.genelToplam} ₺</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/rezervasyon"
                className="block text-center text-blue-600 hover:text-blue-800 text-sm"
              >
                Rezervasyon Detaylarını Düzenle
              </Link>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">Önemli Bilgiler</h3>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• Ödeme sırasında kredi kartı sahibinin bilgileri gereklidir.</li>
              <li>• Rezervasyon onayı e-posta adresinize gönderilecektir.</li>
              <li>• Araç tesliminde kredi kartı ve ehliyet ibrazı zorunludur.</li>
              <li>• Depozito tutarı araç tesliminde tahsil edilecektir.</li>
            </ul>
          </div>
        </div>
        
        {/* Sağ Kolon - Ödeme Bilgileri */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">Ödeme Bilgileri</h2>
            
            {/* Ödeme Yöntemi Seçimi */}
            <div className="mb-8">
              <h3 className="font-bold mb-4">Ödeme Yöntemi</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 cursor-pointer bg-blue-50 border-blue-300">
                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Kredi Kartı</div>
                      <div className="text-xs text-gray-500">Visa, Mastercard, Troy</div>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-8 h-5 bg-gray-200 rounded"></span>
                      <span className="w-8 h-5 bg-gray-200 rounded"></span>
                      <span className="w-8 h-5 bg-gray-200 rounded"></span>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="h-5 w-5 border border-gray-300 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="font-medium">Havale / EFT</div>
                      <div className="text-xs text-gray-500">Banka havalesi ile ödeme</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kart Bilgileri Formu */}
            <div className="mb-8">
              <h3 className="font-bold mb-4">Kart Bilgileri</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Kart Üzerindeki İsim
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Kart sahibinin adı ve soyadı"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Kart Numarası
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Son Kullanma Tarihi
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <select className="p-3 border border-gray-300 rounded-lg">
                        <option value="">Ay</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                          <option key={month} value={month}>
                            {month.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <select className="p-3 border border-gray-300 rounded-lg">
                        <option value="">Yıl</option>
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Güvenlik Kodu (CVV)
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fatura Bilgileri */}
            <div className="mb-8">
              <h3 className="font-bold mb-4">Fatura Bilgileri</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="border rounded-lg p-4 cursor-pointer bg-blue-50 border-blue-300">
                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <div>Bireysel</div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="h-5 w-5 border border-gray-300 rounded-full mr-3"></div>
                    <div>Kurumsal</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Ad
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Soyad
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    TC Kimlik Numarası
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    maxLength={11}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Adres
                  </label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={3}
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      İl
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option value="">Seçiniz</option>
                      <option value="İstanbul">İstanbul</option>
                      <option value="Ankara">Ankara</option>
                      <option value="İzmir">İzmir</option>
                      <option value="Antalya">Antalya</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      İlçe
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Onay ve Şartlar */}
            <div className="mb-8">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-700">
                      <Link href="/sartlar" className="text-blue-600 hover:underline">Kiralama Şartları ve Koşullarını</Link> okudum ve kabul ediyorum.
                    </label>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-700">
                      <Link href="/gizlilik" className="text-blue-600 hover:underline">Gizlilik Politikasını</Link> okudum ve kabul ediyorum.
                    </label>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="marketing"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="marketing" className="text-gray-700">
                      Kampanya ve fırsatlardan haberdar olmak istiyorum.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ödeme Butonu */}
            <div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                {rezervasyon.fiyatlandirma.genelToplam} ₺ Ödeme Yap
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                Ödeme yaparken kiralama şartlarını ve koşullarını kabul etmiş olursunuz.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 