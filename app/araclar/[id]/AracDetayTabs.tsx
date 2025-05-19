"use client";

import React, { useState } from 'react';

type AracDetayTabsProps = {
  arac: any; // Gerçek projede bu tip daha spesifik olacak
};

export default function AracDetayTabs({ arac }: AracDetayTabsProps) {
  // Sekme yönetimi için state
  const [activeTab, setActiveTab] = useState("ozellikler");

  return (
    <div className="mt-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex" aria-label="Tabs">
            <button 
              onClick={() => setActiveTab("ozellikler")}
              className={`relative w-full py-4 px-1 text-center border-b-2 ${activeTab === "ozellikler" ? "border-blue-500 font-medium text-blue-600" : "border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"} focus:outline-none`}
            >
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Teknik Özellikler
              </span>
              {activeTab === "ozellikler" && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab("kosullar")}
              className={`relative w-full py-4 px-1 text-center border-b-2 ${activeTab === "kosullar" ? "border-blue-500 font-medium text-blue-600" : "border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"} focus:outline-none`}
            >
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kiralama Koşulları
              </span>
              {activeTab === "kosullar" && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500"></span>}
            </button>
            <button 
              onClick={() => setActiveTab("yorumlar")}
              className={`relative w-full py-4 px-1 text-center border-b-2 ${activeTab === "yorumlar" ? "border-blue-500 font-medium text-blue-600" : "border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"} focus:outline-none`}
            >
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Yorumlar
              </span>
              {activeTab === "yorumlar" && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-500"></span>}
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {/* Teknik Özellikler İçeriği */}
          {activeTab === "ozellikler" && (
            <>
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Teknik Özellikler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
                    <h4 className="font-bold text-white text-lg flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Motor ve Performans
                    </h4>
                  </div>
                  <div className="p-4">
                    <ul className="divide-y divide-gray-200">
                      <li className="py-3 flex justify-between">
                        <span className="text-gray-600 font-medium">Motor Hacmi:</span>
                        <span className="font-semibold">1.6 Lt</span>
                      </li>
                      <li className="py-3 flex justify-between">
                        <span className="text-gray-600 font-medium">Beygir Gücü:</span>
                        <span className="font-semibold">150 HP</span>
                      </li>
                      <li className="py-3 flex justify-between">
                        <span className="text-gray-600 font-medium">Maksimum Tork:</span>
                        <span className="font-semibold">320 Nm</span>
                      </li>
                      <li className="py-3 flex justify-between">
                        <span className="text-gray-600 font-medium">0-100 km/s:</span>
                        <span className="font-semibold">9.1 sn</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-3">
                    <h4 className="font-bold text-white text-lg flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Yakıt Tüketimi
                    </h4>
                  </div>
                  <div className="p-4">
                    <ul className="divide-y divide-gray-200">
                      <li className="py-3 flex justify-between">
                        <span className="text-gray-600 font-medium">Şehir İçi:</span>
                        <span className="font-semibold">6.5 lt/100km</span>
                      </li>
                      <li className="py-3 flex justify-between">
                        <span className="text-gray-600 font-medium">Şehir Dışı:</span>
                        <span className="font-semibold">4.8 lt/100km</span>
                      </li>
                      <li className="py-3 flex justify-between">
                        <span className="text-gray-600 font-medium">Ortalama:</span>
                        <span className="font-semibold">5.4 lt/100km</span>
                      </li>
                      <li className="py-3 flex justify-between">
                        <span className="text-gray-600 font-medium">Yakıt Deposu:</span>
                        <span className="font-semibold">66 lt</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {/* Kiralama Koşulları İçeriği */}
          {activeTab === "kosullar" && (
            <>
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kiralama Koşulları
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
                    <h4 className="font-bold text-white text-lg">Genel Kiralama Koşulları</h4>
                  </div>
                  <div className="p-5 space-y-4">
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-700">Minimum Kiralama Süresi:</span> 1 gün
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-700">Minimum Yaş:</span> 21 (25 yaş altı sürücüler için genç sürücü ücreti uygulanır)
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-700">Ehliyet Gerekliliği:</span> En az 1 yıllık geçerli ehliyet
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-700">Depozito:</span> Araç sınıfına göre 1.500₺ - 5.000₺ arası (kredi kartı ile)
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-700">Kilometre Sınırı:</span> Günde 300 km (aşım durumunda km başına 1.5₺ ücret uygulanır)
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3">
                    <h4 className="font-bold text-white text-lg">İptal ve Değişiklik Koşulları</h4>
                  </div>
                  <div className="p-5 space-y-4">
                    <p className="text-gray-700">
                      <span className="font-semibold text-orange-600">48 Saatten Fazla İptal:</span> Ücretsiz iptal
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-orange-600">24-48 Saat Arası İptal:</span> 1 günlük kiralama bedeli
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-orange-600">24 Saatten Az İptal:</span> 2 günlük kiralama bedeli
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-orange-600">Rezervasyon Değişikliği:</span> Müsaitlik durumuna göre 48 saat öncesine kadar ücretsiz
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-3">
                    <h4 className="font-bold text-white text-lg">Sigorta ve Güvenlik</h4>
                  </div>
                  <div className="p-5 space-y-4">
                    <p className="text-gray-700">
                      <span className="font-semibold text-green-600">Temel Sigorta:</span> Kiralama ücretine dahil (1.500₺ muafiyet ile)
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-green-600">Tam Kasko:</span> Günlük 100₺ ek ücret (muafiyet olmadan)
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-green-600">Lastik ve Cam Hasarları:</span> Temel sigortaya dahil değildir
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-green-600">24/7 Yol Yardımı:</span> Kiralama ücretine dahil
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {/* Yorumlar İçeriği */}
          {activeTab === "yorumlar" && (
            <>
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Müşteri Yorumları
              </h3>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="ml-2 text-gray-600 text-sm">(4.9/5 - 128 değerlendirme)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    name: "Ahmet Yılmaz",
                    date: "15.08.2023",
                    rating: 5,
                    comment: "Harika bir araç, çok temiz ve bakımlıydı. Performansı ve yakıt tüketimi beklediğimden daha iyiydi. Kesinlikle tekrar kiralamak isterim."
                  },
                  {
                    id: 2,
                    name: "Mehmet Kaya",
                    date: "02.07.2023",
                    rating: 4,
                    comment: "Araç genel olarak iyiydi, konforlu ve yol tutuşu güzeldi. Sadece teslim alırken biraz gecikme yaşadık, onun dışında her şey harikaydı."
                  },
                  {
                    id: 3,
                    name: "Ayşe Demir",
                    date: "12.06.2023",
                    rating: 5,
                    comment: "Tatilimiz için kiraladığımız araç mükemmeldi. Uzun yolda çok rahat ettik, yakıt tüketimi de ekonomikti. Şirketin ilgisi ve profesyonelliğinden çok memnun kaldık."
                  }
                ].map((yorum) => (
                  <div key={yorum.id} className="bg-white rounded-xl border border-gray-200 p-5">
                    <div className="flex justify-between mb-4">
                      <div>
                        <div className="font-bold text-gray-800">{yorum.name}</div>
                        <div className="text-sm text-gray-500">{yorum.date}</div>
                      </div>
                      <div className="flex">
                        {[...Array(yorum.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                        {[...Array(5 - yorum.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{yorum.comment}</p>
                  </div>
                ))}
                
                <div className="mt-4 text-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                    Tüm Değerlendirmeleri Görüntüle
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 