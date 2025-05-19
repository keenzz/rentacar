import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AracDetayTabs from './AracDetayTabs';

// Örnek araç verileri (gerçek uygulamada bir API'den gelecek)
const araclar = [
  {
    id: 1,
    marka: 'Volkswagen',
    model: 'Passat',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Dizel',
    motor: '1.6 TDI',
    koltuk: 5,
    bavul: 2,
    klima: true,
    bluetooth: true,
    navigasyon: true,
    fiyat: 750,
    resim: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg',
    aciklama: 'Passat şık tasarımı, güçlü motoru ve ekonomik yakıt tüketimi ile konforlu bir sürüş deneyimi sunar. Geniş iç hacmi ile hem şehir içi kullanım hem de uzun yolculuklar için idealdir.'
  },
  {
    id: 2,
    marka: 'BMW',
    model: '3 Serisi',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Benzin',
    motor: '2.0',
    koltuk: 5,
    bavul: 2,
    klima: true,
    bluetooth: true,
    navigasyon: true,
    fiyat: 950,
    resim: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg',
    aciklama: 'BMW 3 Serisi sportif tasarımı, lüks iç mekanı ve yol tutuşuyla premium bir sürüş deneyimi sunar. Modern teknoloji özellikleri ve yüksek performansıyla öne çıkar.'
  },
  {
    id: 3,
    marka: 'Mercedes',
    model: 'E Serisi',
    yil: 2023,
    vites: 'Otomatik',
    yakit: 'Dizel',
    motor: '2.0 TDI',
    koltuk: 5,
    bavul: 3,
    klima: true,
    bluetooth: true,
    navigasyon: true,
    fiyat: 1200,
    resim: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
    aciklama: 'Mercedes E Serisi lüks bir sedan olarak konfor, teknoloji ve şıklığı bir arada sunar. Yüksek kaliteli malzemeler, geniş iç mekan ve üstün sürüş deneyimi sunar.'
  },
  {
    id: 4,
    marka: 'Audi',
    model: 'A4',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Benzin',
    motor: '2.0 TFSI',
    koltuk: 5,
    bavul: 2,
    klima: true,
    bluetooth: true,
    navigasyon: true,
    fiyat: 950,
    resim: 'https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg',
    aciklama: 'Audi A4, Alman mühendisliğinin en iyi örneklerinden biridir. Şık tasarımı, yüksek teknolojili özellikleri ve güçlü motoru ile üst düzey bir sürüş deneyimi sunar.'
  },
  {
    id: 5,
    marka: 'Renault',
    model: 'Clio',
    yil: 2022,
    vites: 'Manuel',
    yakit: 'Benzin',
    motor: '1.0 TCe',
    koltuk: 5,
    bavul: 1,
    klima: true,
    bluetooth: true,
    navigasyon: true,
    fiyat: 450,
    resim: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg',
    aciklama: 'Renault Clio ekonomik yakıt tüketimi, kompakt boyutları ve modern tasarımıyla şehir içi kullanım için idealdir. Gençlere ve ilk araç alacaklara mükemmel bir tercih sunar.'
  },
  {
    id: 6,
    marka: 'Toyota',
    model: 'Corolla',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Hibrit',
    motor: '1.8 Hybrid',
    koltuk: 5,
    bavul: 2,
    klima: true,
    bluetooth: true,
    navigasyon: true,
    fiyat: 650,
    resim: 'https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg',
    aciklama: 'Toyota Corolla Hybrid düşük yakıt tüketimi, güvenilirliği ve çevre dostu yapısıyla öne çıkar. Hibrit teknolojisiyle hem performans hem de ekonomi sunar.'
  }
];

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function AracDetay({ params, searchParams }: Props) {
  const aracId = parseInt(params.id);
  const arac = araclar.find(a => a.id === aracId) || araclar[0]; // Gerçek uygulamada bulunamazsa 404 sayfasına yönlendirilecek
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="hover:underline">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/araclar" className="hover:underline">Araçlar</Link>
            <span>/</span>
            <span className="font-medium">{arac.marka} {arac.model}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{arac.marka} {arac.model}</h1>
          <p className="text-blue-100 mb-4">Premium sınıf araç kiralama deneyimi</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/araclar" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Araç Listesine Dön
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-72 md:h-full relative bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {arac.yil} Model
                </div>
                <div className="relative h-full w-full">
                  <Image 
                    src={arac.resim}
                    alt={`${arac.marka} ${arac.model}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{arac.marka} {arac.model}</h1>
                <div className="ml-auto bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {arac.yil}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H12v-.5a1 1 0 00-1-1H9V4a1 1 0 00-1-1H3z" />
                  </svg>
                  <span className="text-sm text-gray-500">Motor</span>
                  <span className="font-medium">{arac.motor}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500">Yakıt</span>
                  <span className="font-medium">{arac.yakit}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 7H7v6h6V7z" />
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500">Vites</span>
                  <span className="font-medium">{arac.vites}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM13 14a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-gray-500">Kapasite</span>
                  <span className="font-medium">{arac.koltuk} Kişilik</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Öne Çıkan Özellikler
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Klima</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Bluetooth</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Navigasyon</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">ABS</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Araç Hakkında
                </h2>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">{arac.aciklama}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="text-gray-600 text-sm mb-1">Günlük Fiyat</div>
                  <div>
                    <span className="font-bold text-3xl text-blue-600">₺{arac.fiyat}</span>
                    <span className="text-gray-600"> / günlük</span>
                  </div>
                </div>
                <Link 
                  href={`/rezervasyon?aracId=${arac.id}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 font-bold flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Hemen Rezervasyon Yap
                </Link>
              </div>
            </div>
          </div>
          
          {/* Sekme yönetimi ve içeriğini client component'e taşıdık */}
          <AracDetayTabs arac={arac} />
        </div>
        
        {/* Benzer Araçlar */}
        <div className="mt-12 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Benzer Araçlar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {araclar.map((benzerArac) => (
              benzerArac.id !== aracId && (
                <div key={benzerArac.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      {benzerArac.yil} Model
                    </div>
                    <div className="relative h-full w-full">
                      <Image 
                        src={benzerArac.resim}
                        alt={`${benzerArac.marka} ${benzerArac.model}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-3 text-gray-800">{benzerArac.marka} {benzerArac.model}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {benzerArac.vites}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {benzerArac.yakit}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {benzerArac.koltuk} Kişilik
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-2xl text-blue-600">₺{benzerArac.fiyat}</span>
                        <span className="text-gray-600 text-sm"> / günlük</span>
                      </div>
                      <Link 
                        href={`/araclar/${benzerArac.id}`}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition flex items-center font-medium"
                      >
                        İncele
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 