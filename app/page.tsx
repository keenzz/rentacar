import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  // Popüler araçlar için örnek veri
  const populerAraclar = [
    {
      id: 1,
      marka: 'Volkswagen',
      model: 'Passat',
      resim: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg',
      fiyat: 1200,
      vites: 'Otomatik',
      yakit: 'Dizel'
    },
    {
      id: 2,
      marka: 'BMW',
      model: '3 Serisi',
      resim: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg',
      fiyat: 1500,
      vites: 'Otomatik',
      yakit: 'Benzin'
    },
    {
      id: 3,
      marka: 'Mercedes',
      model: 'C Serisi',
      resim: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
      fiyat: 1600,
      vites: 'Otomatik',
      yakit: 'Dizel'
    },
    {
      id: 4,
      marka: 'Fiat',
      model: 'Egea',
      resim: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg',
      fiyat: 700,
      vites: 'Manuel',
      yakit: 'Benzin'
    }
  ];

  // Kampanyalar için örnek veri
  const kampanyalar = [
    {
      id: 1,
      baslik: 'Hafta Sonu Özel',
      aciklama: 'Cuma-Pazartesi arası kiralamalarınızda %15 indirim',
      resim: '/images/kampanyalar/hafta-sonu.jpg',
      kod: 'HAFTASONU15'
    },
    {
      id: 2,
      baslik: 'Uzun Dönem Avantajı',
      aciklama: '7 gün ve üzeri kiralamalarda %20 indirim fırsatı',
      resim: '/images/kampanyalar/uzun-donem.jpg',
      kod: 'UZUN20'
    },
    {
      id: 3,
      baslik: 'İlk Kiralama Özel',
      aciklama: 'İlk kez kiralama yapacaklar için %10 indirim',
      resim: '/images/kampanyalar/ilk-kiralama.jpg',
      kod: 'HOSGELDIN10'
    }
  ];

  // Avantajlar için örnek veri
  const avantajlar = [
    {
      id: 1,
      baslik: 'Geniş Araç Filosu',
      aciklama: '50+ farklı model araç ile ihtiyacınıza uygun seçenekler',
      ikon: 'M4 16v-2a4 4 0 0 1 4-4h9.5a5.5 5.5 0 0 0 0-11H13V9h4.5a1.5 1.5 0 0 1 0 3H8a8 8 0 0 0-8 8v2h4zm3.5-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
    },
    {
      id: 2,
      baslik: 'Esnek Kiralama',
      aciklama: 'Günlük, haftalık ve aylık esnek kiralama seçenekleri',
      ikon: 'M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm-1-5a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm1 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm5-13a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm1 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm-14-7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm0 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm0 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0z'
    },
    {
      id: 3,
      baslik: '7/24 Destek',
      aciklama: 'Nerede olursanız olun, her zaman destek hizmetimiz yanınızda',
      ikon: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
    },
    {
      id: 4,
      baslik: 'Temiz ve Bakımlı Araçlar',
      aciklama: 'Her kiralama öncesi detaylı temizlik ve teknik kontrol',
      ikon: 'M2 10v1c0 1.763.843 3.34 2.153 4.327C4.113 15.13 4 14.584 4 14c0-2.21 1.79-4 4-4 .836 0 1.606.258 2.25.683C11.5 9.27 13.363 8 15.5 8a4.5 4.5 0 0 1 4.5 4.5v1.102a1.75 1.75 0 0 1-1.5 1.734V10.5A3 3 0 0 0 15.5 7.5c-1.578 0-2.95.858-3.684 2.128A5.027 5.027 0 0 0 8 9c-2.757 0-5 2.243-5 5 0 .525.086 1.03.242 1.5H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z M14.597 13.003c-.05 2.143-1.823 3.85-3.967 3.85a4.038 4.038 0 0 1-3.971-3.848A.735.735 0 0 1 7.39 12.3a.716.716 0 0 1 .716.7 2.584 2.584 0 0 0 2.523 2.456c1.384 0 2.513-1.116 2.553-2.5a.707.707 0 0 1 .7-.703.715.715 0 0 1 .716.75zm-7.5-2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm5.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z'
    }
  ];

  // Müşteri yorumları için örnek veri
  const yorumlar = [
    {
      id: 1,
      ad: 'Ahmet Yılmaz',
      yorum: 'Çok temiz ve bakımlı araçlar. Kiralama süreci son derece hızlı ve kolay. Kesinlikle tavsiye ediyorum.',
      tarih: '15 Nisan 2023',
      puan: 5
    },
    {
      id: 2,
      ad: 'Ayşe Demir',
      yorum: 'Geçen ay bir haftalığına araç kiraladım. Araç tam zamanında teslim edildi ve hiçbir sorun yaşamadım. Fiyatlar da gayet uygun.',
      tarih: '23 Mart 2023',
      puan: 4
    },
    {
      id: 3,
      ad: 'Mehmet Kaya',
      yorum: 'İş seyahatlerimde sürekli RentaCar tercih ediyorum. Araçlar her zaman temiz ve bakımlı. Müşteri hizmetleri de çok ilgili.',
      tarih: '7 Şubat 2023',
      puan: 5
    }
  ];

  // Premium araç filosu için örnek veri
  const premiumAraba = {
    marka: 'Mercedes',
    model: 'E-Class',
    resim: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
    ozellik: 'Premium Sedan'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 min-h-[700px] relative">
          {/* Dekoratif Elementler */}
          <div className="absolute top-0 right-0 w-2/3 h-full opacity-10">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="text-white fill-current">
              <path d="M488.5,274.5Q470,299,454.5,323.5Q439,348,414,348Q389,348,364,373.5Q339,399,316.5,423.5Q294,448,253.5,475Q213,502,175,465.5Q137,429,128.5,393Q120,357,88,333.5Q56,310,74,274.5Q92,239,56.5,193.5Q21,148,60,120Q99,92,137,70.5Q175,49,224,37Q273,25,310.5,60Q348,95,354,150Q360,205,390,239Q420,273,488.5,274.5Z" />
            </svg>
          </div>
          
          {/* Tek sabit araç görseli */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={premiumAraba.resim}
              alt={`${premiumAraba.marka} ${premiumAraba.model}`}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/50 to-blue-900/40">
              {/* Gradient overlay */}
            </div>
            <div className="absolute bottom-16 left-auto right-16 z-30">
              <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">{premiumAraba.ozellik}</span>
              <h3 className="text-3xl font-bold text-white mt-3">{premiumAraba.marka} {premiumAraba.model}</h3>
            </div>
          </div>
          
          {/* İçerik */}
          <div className="container mx-auto px-4 z-20 relative flex justify-center items-center h-full">
            <div className="max-w-3xl py-20 md:py-32 text-center">
              <div className="bg-blue-600/30 text-yellow-400 font-semibold px-4 py-2 rounded-full inline-block mb-4 backdrop-blur-sm">
                Kusursuz Sürüş Deneyimi
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Araç Filomuzla<br />
                <span className="text-yellow-400">Fark Yaratın</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 mx-auto">
                En son model, bakımlı ve lüks araçlardan oluşan geniş filomuzu keşfedin. 
                Her ihtiyaca uygun seçeneklerle seyahatlerinizi unutulmaz kılıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/araclar" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg text-center transform transition-transform hover:scale-105 shadow-lg"
                >
                  Araçları İncele
                </Link>
                <Link 
                  href="/iletisim" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 font-bold py-4 px-8 rounded-lg text-center transform transition-transform hover:scale-105"
                >
                  Bize Ulaşın
                </Link>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                  <span className="text-white text-3xl font-bold">25+</span>
                  <span className="text-blue-100 text-sm">Farklı Marka</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                  <span className="text-white text-3xl font-bold">100+</span>
                  <span className="text-blue-100 text-sm">Premium Araç</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                  <span className="text-white text-3xl font-bold">%99</span>
                  <span className="text-blue-100 text-sm">Müşteri Memnuniyeti</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arka plan yarı saydamlık katmanı */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-blue-900/30 z-0"></div>
        </div>
        
        {/* Hızlı Arama Formu */}
        <div className="w-full relative -mt-28 z-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-600">
              <div className="p-8 pb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H12v-.5a1 1 0 00-1-1H9V4a1 1 0 00-1-1H3z" />
                  </svg>
                  <span>Hemen <span className="text-blue-600">Premium Araç</span> Kiralayın</span>
                </h2>
                
                {/* Araç Sınıfı Seçimi */}
                <div className="flex flex-wrap gap-2 mb-8 items-center">
                  <span className="text-gray-700 font-medium">Araç Sınıfı:</span>
                  <div className="flex space-x-2 flex-wrap">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Tüm Araçlar</button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">Ekonomik</button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">Orta Sınıf</button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">SUV</button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">Premium</button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">Elektrikli</button>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <form className="p-8 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Alış Yeri</label>
                    <div className="relative">
                      <select className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all group-hover:border-blue-400">
                        <option value="">Alış Noktası Seçin</option>
                        <option>İstanbul Havalimanı</option>
                        <option>İstanbul Sabiha Gökçen</option>
                        <option>Ankara Esenboğa</option>
                        <option>İzmir Adnan Menderes</option>
                        <option>Antalya Havalimanı</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Alış Tarihi</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all group-hover:border-blue-400"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">İade Tarihi</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all group-hover:border-blue-400"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Vites Tipi</label>
                    <div className="relative">
                      <select className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all group-hover:border-blue-400">
                        <option value="">Vites Tipi Seçin</option>
                        <option>Otomatik</option>
                        <option>Manuel</option>
                        <option>Yarı Otomatik</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Gelişmiş Seçenekler */}
                <div className="mt-6 mb-6">
                  <div className="flex flex-wrap gap-6">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-700">Navigasyon</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-700">Bluetooth</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-700">Bebek Koltuğu</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-700">Tam Kasko</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Uygun Araçları Göster
                  </button>
                  
                  <button 
                    type="button" 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Fiyat Teklifi Al
                  </button>
                </div>
              </form>
              
              {/* Avantaj Bantı */}
              <div className="bg-blue-50 py-4 px-8 flex flex-wrap gap-6 justify-center">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm">%25'e Varan İndirimler</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm">Ücretsiz İptal</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm">7/24 Müşteri Desteği</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm">Güvenli Ödeme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Avantajlar Section */}
      <section className="pt-0 pb-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-blue-600 font-medium bg-blue-100 rounded-full px-4 py-1 mb-4">Neden Bizi Seçmelisiniz?</div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Araç Kiralama'da RentaCar Farkı</h2>
            <p className="text-gray-600 text-lg">Sektörde 13 yıllık deneyimimizle, müşteri memnuniyetini her zaman ön planda tutuyoruz</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantajlar.map((avantaj, index) => (
              <div 
                key={avantaj.id} 
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-blue-500"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={avantaj.ikon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">{avantaj.baslik}</h3>
                <p className="text-gray-600 text-center">{avantaj.aciklama}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/hakkimizda" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
            >
              <span>Tüm Avantajları Keşfedin</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Popüler Araçlar Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-block text-blue-600 font-medium bg-blue-100 rounded-full px-4 py-1 mb-4">Araç Filomuz</div>
              <h2 className="text-4xl font-bold text-gray-800">Popüler Araçlarımız</h2>
            </div>
            <Link 
              href="/araclar" 
              className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
            >
              <span>Tümünü Görüntüle</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {populerAraclar.map((arac) => (
              <div key={arac.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden">
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Popüler
                  </div>
                  <Image 
                    src={arac.resim}
                    alt={`${arac.marka} ${arac.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                    priority={arac.id === 1}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{arac.marka} {arac.model}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      {arac.vites}
                    </span>
                    <span className="inline-flex items-center bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {arac.yakit}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-gray-800">
                      <span className="font-bold text-2xl text-blue-600">{arac.fiyat} ₺</span>
                      <span className="text-sm text-gray-600"> / gün</span>
                    </div>
                    <Link 
                      href={`/araclar/${arac.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center"
                    >
                      Kirala
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Kampanyalar Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-blue-600 font-medium bg-blue-100 rounded-full px-4 py-1 mb-4">Fırsatları Kaçırma</div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Güncel Kampanyalar</h2>
            <p className="text-gray-600 text-lg">Özel indirimler ve avantajlı fırsatlarla kaliteli araç kiralama deneyimi yaşayın</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kampanyalar.map((kampanya, index) => (
              <div 
                key={kampanya.id} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-52 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 relative overflow-hidden p-6 flex flex-col justify-between">
                  <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-white/10"></div>
                  <div className="absolute right-4 bottom-4 w-24 h-24 rounded-full bg-white/10"></div>
                  
                  <div className="inline-block bg-yellow-400 text-blue-800 px-3 py-1 rounded-full text-sm font-medium self-start">
                    Sınırlı Süre
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mt-auto">{kampanya.baslik}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{kampanya.aciklama}</p>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-yellow-800 font-medium mb-1">İndirim Kodu</div>
                      <span className="text-lg font-bold text-blue-800">{kampanya.kod}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold bg-white px-3 py-1 rounded-lg text-sm shadow transition-colors flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Kopyala
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/kampanyalar" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Tüm Kampanyaları Görüntüle
            </Link>
          </div>
        </div>
      </section>
      
      {/* Müşteri Yorumları Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-blue-600 font-medium bg-blue-100 rounded-full px-4 py-1 mb-4">Müşteri Deneyimleri</div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-gray-600 text-lg">Kaliteli hizmetimiz ve güvenilir araçlarımızla müşterilerimizin memnuniyeti bizim için önceliklidir</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yorumlar.map((yorum, index) => (
              <div key={yorum.id} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 -right-2 w-16 h-16 bg-blue-600 text-white flex items-center justify-center text-3xl font-serif rounded-xl z-10 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <span className="transform -translate-y-1">"</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                    {yorum.ad.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{yorum.ad}</h3>
                    <p className="text-sm text-gray-500">{yorum.tarih}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < yorum.puan ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-4">"{yorum.yorum}"</p>
                
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-blue-600 text-sm font-medium">Doğrulanmış Müşteri</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/yorumlar" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
            >
              <span>Tüm Müşteri Yorumlarını Görüntüle</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 skew-y-2 transform origin-top-right"></div>
        <div className="container mx-auto px-4 relative z-10 text-white pt-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex md:items-center">
              <div className="md:w-2/3 p-10 md:p-12">
                <div className="inline-block bg-blue-500/30 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
                  RentaCar Premium Deneyimi
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Lüks ve Konfor Bir Arada, <br />Hayalinizdeki Aracı Hemen Kiralayın</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-lg">
                  RentaCar'ın ayrıcalıklı hizmetlerinden yararlanmak, güvenli ve konforlu bir yolculuk deneyimi yaşamak için hemen araç kiralamanızı yapın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/araclar" 
                    className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg inline-flex items-center justify-center shadow-lg transform transition-transform hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H12v-.5a1 1 0 00-1-1H9V4a1 1 0 00-1-1H3z" />
                    </svg>
                    Hemen Araç Kirala
                  </Link>
                  <Link 
                    href="/iletisim" 
                    className="bg-transparent border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg inline-flex items-center justify-center transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                    Bilgi Al
                  </Link>
                </div>
              </div>
              <div className="hidden md:block md:w-1/3 relative">
                <div className="absolute inset-0 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H12v-.5a1 1 0 00-1-1H9V4a1 1 0 00-1-1H3z" />
                  </svg>
                </div>
                <div className="absolute right-0 bottom-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mb-20"></div>
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
