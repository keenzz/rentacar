"use client";

import { useState, useEffect } from 'react';

export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Sayfa yüklendiğinde modalı göster
  useEffect(() => {
    // 1 saniye gecikmeli olarak modal açılacak (daha iyi kullanıcı deneyimi için)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    // Component unmount edildiğinde timer'ı temizle
    return () => clearTimeout(timer);
  }, []);

  // Modalı kapat
  const closeModal = () => {
    setIsOpen(false);
  };

  // Modal kapalıysa hiçbir şey render etme
  if (!isOpen) return null;

  // WhatsApp mesaj metni
  const whatsappMessage = "Merhaba, RentaCar web sitesi üzerinden bilgi almak istiyorum.";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md transform transition-all pointer-events-auto">
        {/* Modal header */}
        <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Önemli Bilgilendirme
          </h3>
          <button 
            onClick={closeModal}
            className="text-white hover:text-gray-200 transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal content */}
        <div className="px-6 py-4 space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <span className="text-2xl">🚧</span>
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">Demo Sürüm</h4>
              <p className="mt-1 text-sm text-gray-500">
                Bu site bir demo çalışmasıdır. Gerçek bir araç kiralama hizmeti bulunmamaktadır.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <span className="text-2xl">🖼️</span>
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">Görseller</h4>
              <p className="mt-1 text-sm text-gray-500">
                Kullanılan tüm görseller stok fotoğraflardır. Uygun görseller telif hakları gereği nihai sürümde değiştirilecektir.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <span className="text-2xl">📋</span>
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">KVKK ve Yasal Bilgiler</h4>
              <p className="mt-1 text-sm text-gray-500">
                KVKK ve telif hakları nedeniyle bu sitede yer alan içerikler nihai sürümü temsil etmemektedir.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <span className="text-2xl">📱</span>
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">İletişim</h4>
              <p className="mt-1 text-sm text-gray-500">
                Daha fazla bilgi ve sorularınız için WhatsApp üzerinden iletişime geçebilirsiniz:
              </p>
              <a 
                href={`https://wa.me/905401001080?text=${encodedMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp ile İletişim
              </a>
              <p className="mt-2 text-xs text-gray-500">

              </p>
            </div>
          </div>
        </div>
        
        {/* Modal footer */}
        <div className="px-6 py-3 bg-gray-50 rounded-b-lg flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Anladım, Devam Et
          </button>
        </div>
      </div>
    </div>
  );
} 