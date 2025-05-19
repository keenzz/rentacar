import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Örnek araç verileri
const araclar = [
  {
    id: 1,
    marka: 'Volkswagen',
    model: 'Passat',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Dizel',
    koltuk: 5,
    bavul: 2,
    fiyat: 750,
    resim: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg',
    sinif: 'Üst Segment'
  },
  {
    id: 2,
    marka: 'BMW',
    model: '3 Serisi',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Benzin',
    koltuk: 5,
    bavul: 2,
    fiyat: 950,
    resim: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg',
    sinif: 'Premium'
  },
  {
    id: 3,
    marka: 'Mercedes',
    model: 'E Serisi',
    yil: 2023,
    vites: 'Otomatik',
    yakit: 'Dizel',
    koltuk: 5,
    bavul: 3,
    fiyat: 1200,
    resim: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
    sinif: 'Premium'
  },
  {
    id: 4,
    marka: 'Audi',
    model: 'A4',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Benzin',
    koltuk: 5,
    bavul: 2,
    fiyat: 950,
    resim: 'https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg',
    sinif: 'Premium'
  },
  {
    id: 5,
    marka: 'Renault',
    model: 'Clio',
    yil: 2022,
    vites: 'Manuel',
    yakit: 'Benzin',
    koltuk: 5,
    bavul: 1,
    fiyat: 450,
    resim: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg',
    sinif: 'Ekonomik'
  },
  {
    id: 6,
    marka: 'Toyota',
    model: 'Corolla',
    yil: 2022,
    vites: 'Otomatik',
    yakit: 'Hibrit',
    koltuk: 5,
    bavul: 2,
    fiyat: 650,
    resim: 'https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg',
    sinif: 'Orta Segment'
  }
];

// Özellik ikonları
const FeatureIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'vites':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
          <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
        </svg>
      );
    case 'yakit':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
        </svg>
      );
    case 'koltuk':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>
      );
    case 'bavul':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
          <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.75h1.5a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3H6v-.75Zm6 0v.75h-3v-.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75ZM7.5 9.75a.75.75 0 0 0-.75.75V15a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75Zm9 0a.75.75 0 0 0-.75.75V15a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
};

export default function AraclarPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Araç Filomuzu Keşfedin</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            İhtiyaçlarınıza en uygun aracı seçin, avantajlı fiyatlarla kiralayın, güvenle seyahat edin.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Alış Tarihi</label>
                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Dönüş Tarihi</label>
                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      Araçları Göster
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtreler */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-blue-600">
              <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clipRule="evenodd" />
            </svg>
            Filtreler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Marka</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                <option value="">Tümü</option>
                <option>Volkswagen</option>
                <option>BMW</option>
                <option>Mercedes</option>
                <option>Audi</option>
                <option>Renault</option>
                <option>Toyota</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Araç Sınıfı</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                <option value="">Tümü</option>
                <option>Ekonomik</option>
                <option>Orta Segment</option>
                <option>Üst Segment</option>
                <option>Premium</option>
                <option>SUV</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Vites</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                <option value="">Tümü</option>
                <option>Otomatik</option>
                <option>Manuel</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Yakıt</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                <option value="">Tümü</option>
                <option>Benzin</option>
                <option>Dizel</option>
                <option>Hibrit</option>
                <option>Elektrik</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Fiyat Aralığı</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                <option value="">Tümü</option>
                <option>0-500 ₺</option>
                <option>500-750 ₺</option>
                <option>750-1000 ₺</option>
                <option>1000+ ₺</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
              Araçları Filtrele
            </button>
          </div>
        </div>

        {/* Araç Sayısı Bilgisi */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Toplam <span className="text-blue-600">{araclar.length}</span> araç bulundu
          </h2>
          <div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
              <option>Fiyat: Artan</option>
              <option>Fiyat: Azalan</option>
              <option>İsim: A-Z</option>
              <option>İsim: Z-A</option>
              <option>Popülerlik</option>
            </select>
          </div>
        </div>

        {/* Araç Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {araclar.map((arac) => (
            <div key={arac.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="relative h-56 bg-gray-200">
                {/* Gerçek implementasyonda burada araç resmi olacak */}
                <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-br-lg">
                  {arac.sinif}
                </div>
                <div className="h-full w-full">
                  <Image 
                    src={arac.resim}
                    alt={`${arac.marka} ${arac.model}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-2xl text-gray-800">{arac.marka} {arac.model}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">{arac.yil}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <FeatureIcon name="vites" />
                    <span className="ml-2 text-gray-700">{arac.vites}</span>
                  </div>
                  <div className="flex items-center">
                    <FeatureIcon name="yakit" />
                    <span className="ml-2 text-gray-700">{arac.yakit}</span>
                  </div>
                  <div className="flex items-center">
                    <FeatureIcon name="koltuk" />
                    <span className="ml-2 text-gray-700">{arac.koltuk} Kişilik</span>
                  </div>
                  <div className="flex items-center">
                    <FeatureIcon name="bavul" />
                    <span className="ml-2 text-gray-700">{arac.bavul} Bavul</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-2xl text-blue-600">₺{arac.fiyat}</span>
                      <span className="text-gray-600 text-sm"> / günlük</span>
                    </div>
                    <Link 
                      href={`/araclar/${arac.id}`}
                      className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center font-medium"
                    >
                      İncele
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 