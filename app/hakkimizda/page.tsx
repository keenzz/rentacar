import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HakkimizdaPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">RentaCar Hakkında</h1>
            <p className="text-xl text-blue-100 mb-8">
              2010'dan beri Türkiye'nin her köşesinde kaliteli araç kiralama hizmeti sunuyoruz
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/araclar" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H12v-.5a1 1 0 00-1-1H9V4a1 1 0 00-1-1H3z" />
                </svg>
                Araçları İncele
              </Link>
              <Link href="/iletisim" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-4-3a1 1 0 100 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Şirket Tanıtımı */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">RentaCar Olarak</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  2010 yılında kurulan <span className="font-semibold text-blue-600">RentaCar</span>, Türkiye'nin önde gelen araç kiralama şirketlerinden biridir. 
                  Müşterilerimize en kaliteli hizmeti sunmak için sürekli olarak filomuzu yeniliyor ve 
                  hizmet kalitemizi artırıyoruz.
                </p>
                <p>
                  Türkiye'nin 30'dan fazla şehrinde hizmet veren RentaCar, 1000'den fazla araçlık filosu ile 
                  her türlü araç kiralama ihtiyacınızı karşılamak için hizmetinizdedir.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg text-blue-700 mb-2">Misyonumuz</h3>
                  <p className="text-gray-700">Müşterilerimize en iyi araç kiralama deneyimini sunmak ve beklentilerinin ötesinde bir hizmet vermektir.</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg text-blue-700 mb-2">Vizyonumuz</h3>
                  <p className="text-gray-700">Türkiye'nin en güvenilir ve tercih edilen araç kiralama markası olmaktır.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-gray-100 p-8 flex items-center justify-center">
              <div className="bg-white p-2 rounded-xl shadow-lg transform rotate-3 transition hover:rotate-0">
                <div className="bg-gray-200 h-64 w-full rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Neden Biz */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Neden RentaCar?</h2>
            <p className="text-gray-600 text-lg">Araç kiralama deneyiminizi farklılaştıran özelliklerimiz</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Hızlı ve Kolay</h3>
              <p className="text-gray-700 text-center">
                Online rezervasyon sistemimiz ile dakikalar içinde araç kiralayabilirsiniz. 
                Hızlı ve kolay arayüzümüz sayesinde tüm işlemlerinizi kolayca tamamlayabilirsiniz.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Güvenilir</h3>
              <p className="text-gray-700 text-center">
                Tüm araçlarımız düzenli bakımdan geçirilir ve tam sigortalıdır. 
                Güvenliğiniz bizim için en önemli önceliktir.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Ekonomik</h3>
              <p className="text-gray-700 text-center">
                Rekabetçi fiyatlarımız ve özel kampanyalarımız ile araç kiralama 
                bütçenize uygun hale gelir. Uzun dönem kiralamalarında özel indirimler sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Kiralama Süreci */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Kiralama Süreci</h2>
          <p className="text-gray-600 text-lg">Sadece dört adımda aracınızı kiralayın</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl shadow-xl p-8 md:p-10">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 -translate-y-1/2 z-0 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border-b-4 border-blue-500">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800 group-hover:text-blue-700 transition">Araç Seçimi</h3>
                <p className="text-gray-600 text-center">Filomuzdaki araçları inceleyin ve ihtiyacınıza en uygun aracı seçin.</p>
                <div className="hidden md:flex justify-center mt-4">
                  <div className="text-blue-600 bg-blue-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border-b-4 border-blue-500">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800 group-hover:text-blue-700 transition">Rezervasyon</h3>
                <p className="text-gray-600 text-center">Tarih ve lokasyon seçimi yaparak aracınızı kolayca rezerve edin.</p>
                <div className="hidden md:flex justify-center mt-4">
                  <div className="text-blue-600 bg-blue-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border-b-4 border-blue-500">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800 group-hover:text-blue-700 transition">Ödeme</h3>
                <p className="text-gray-600 text-center">Güvenli ödeme sistemi ile rezervasyonunuzu hızlıca tamamlayın.</p>
                <div className="hidden md:flex justify-center mt-4">
                  <div className="text-blue-600 bg-blue-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border-b-4 border-green-500">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800 group-hover:text-green-700 transition">Aracı Teslim Alın</h3>
                <p className="text-gray-600 text-center">Seçtiğiniz lokasyondan aracınızı teslim alın ve yolculuğun keyfini çıkarın.</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/araclar" className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H12v-.5a1 1 0 00-1-1H9V4a1 1 0 00-1-1H3z" />
                </svg>
                Hemen Kiralama Yapmaya Başlayın
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* İstatistikler */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Rakamlarla RentaCar</h2>
            <p className="text-blue-100 text-lg">13 yıllık deneyimimizle sektörde lider konumdayız</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition hover:scale-105">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl">Araç</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition hover:scale-105">
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-xl">Şehir</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition hover:scale-105">
              <div className="text-5xl font-bold mb-2">50.000+</div>
              <div className="text-xl">Mutlu Müşteri</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition hover:scale-105">
              <div className="text-5xl font-bold mb-2">13</div>
              <div className="text-xl">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Yönetim Ekibi */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Yönetim Ekibimiz</h2>
          <p className="text-gray-600 text-lg">Deneyimli ve uzman ekibimizle hizmetinizdeyiz</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ahmet Yılmaz",
              title: "Genel Müdür",
              bio: "20 yıllık sektör deneyimi ile RentaCar'ın kurucu ortağı ve Genel Müdürü."
            },
            {
              name: "Ayşe Kaya",
              title: "Operasyon Müdürü",
              bio: "Filo yönetimi ve operasyon süreçlerinde 15 yıllık deneyim sahibi."
            },
            {
              name: "Mehmet Demir",
              title: "Pazarlama Müdürü",
              bio: "Dijital pazarlama ve müşteri deneyimi alanında uzman."
            }
          ].map((person, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-24"></div>
              <div className="relative pt-12 px-6 pb-6 text-center">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                    <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-2xl font-bold">{person.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-800">{person.name}</h3>
                <p className="text-blue-600 mb-4 font-medium">{person.title}</p>
                <p className="text-gray-600">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ofislerimiz */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ofislerimiz</h2>
            <p className="text-gray-600 text-lg">Türkiye'nin dört bir yanında hizmetinizdeyiz</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">İstanbul (Merkez Ofis)</h3>
                </div>
                <div className="space-y-3 mb-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="font-semibold inline-block w-20">Adres:</span>
                    <span>Atatürk Cad. No:123, Şişli, İstanbul</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold inline-block w-20">Telefon:</span>
                    <span>+90 212 123 45 67</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold inline-block w-20">E-posta:</span>
                    <span>istanbul@rentacar.com</span>
                  </p>
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Ankara</h3>
                </div>
                <div className="space-y-3 mb-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="font-semibold inline-block w-20">Adres:</span>
                    <span>Kızılay Cad. No:456, Çankaya, Ankara</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold inline-block w-20">Telefon:</span>
                    <span>+90 312 456 78 90</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold inline-block w-20">E-posta:</span>
                    <span>ankara@rentacar.com</span>
                  </p>
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call-to-Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Hemen Rezervasyon Yapın</h2>
              <p className="text-blue-100 text-lg mb-6">
                Güvenilir, ekonomik ve konforlu araç kiralama deneyimi için RentaCar'ı tercih edin.
              </p>
              <Link 
                href="/araclar" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center transition duration-300 transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Araçları İncele
              </Link>
            </div>
            <div className="md:w-1/3 p-8 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white opacity-20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H12v-.5a1 1 0 00-1-1H9V4a1 1 0 00-1-1H3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 