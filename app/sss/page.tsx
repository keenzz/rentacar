import React from 'react';

export default function SSSPage() {
  // SSS kategorileri ve içerikleri
  const sssKategoriler = [
    {
      id: "kiralama-sureci",
      baslik: "Kiralama Süreci",
      sorular: [
        {
          soru: "Araç kiralamak için hangi belgeler gereklidir?",
          cevap: "Araç kiralamak için geçerli bir ehliyet, kimlik veya pasaport ve kredi kartı gerekmektedir. Ehliyetinizin en az 1 yıllık olması ve kiralama süresince geçerli olması şarttır. Yabancı ülke ehliyetleri için uluslararası sürüş belgesi talep edilebilir."
        },
        {
          soru: "Araç kiralama yaşı sınırı nedir?",
          cevap: "Araç kiralamak için minimum yaş sınırı 21'dir. Ancak bazı araç grupları (lüks, spor, vb.) için minimum yaş sınırı 25 veya 30 olabilir. 21-25 yaş arası sürücülerden genç sürücü ücreti tahsil edilmektedir."
        },
        {
          soru: "Araç kiralarken depozito alınıyor mu?",
          cevap: "Evet, araç tesliminde araç grubuna göre değişen miktarlarda depozito (teminat) alınmaktadır. Bu depozito, aracın hasarsız ve zamanında teslim edilmesi durumunda iade edilir. Depozito tutarları ekonomik araçlarda 1.500 TL'den başlayıp, lüks araçlarda 5.000 TL'ye kadar çıkabilmektedir."
        },
        {
          soru: "Rezervasyon yaptırdığım aracı değiştirebilir miyim?",
          cevap: "Rezervasyon yaptığınız aracı, müsaitlik durumuna göre değiştirebilirsiniz. Araç tesliminden 48 saat öncesine kadar yapılan değişikliklerde herhangi bir ücret alınmaz. Daha üst sınıf bir araca geçiş yapmak isterseniz fiyat farkını ödemeniz gerekecektir."
        },
        {
          soru: "Kiraladığım aracı farklı bir şehirde teslim edebilir miyim?",
          cevap: "Evet, farklı şehir teslimi mümkündür. Ancak bu durumda tek yön ücreti uygulanır. Bu ücret mesafeye ve araç sınıfına göre değişiklik gösterir. Rezervasyon sırasında teslim lokasyonunu belirtmeniz ve onay almanız gerekmektedir."
        }
      ]
    },
    {
      id: "odeme-sartlari",
      baslik: "Ödeme ve Fiyatlandırma",
      sorular: [
        {
          soru: "Ödeme seçenekleri nelerdir?",
          cevap: "Ödemelerinizi kredi kartı, banka kartı veya nakit olarak yapabilirsiniz. Online rezervasyonlarda genellikle kredi kartı ile ödeme tercih edilir. Kurumsal müşterilerimiz için havale/EFT seçeneğimiz de mevcuttur. Tüm ödemelerde fatura düzenlenmektedir."
        },
        {
          soru: "Fiyatlara neler dahildir?",
          cevap: "Standart kiralama fiyatlarına KDV, zorunlu trafik sigortası ve kasko dahildir. Yakıt, ek sürücü, navigasyon, bebek koltuğu gibi ekstra hizmetler ayrıca ücretlendirilir. Kilometre sınırı, araç sınıfına ve kiralama süresine göre değişiklik gösterebilir."
        },
        {
          soru: "Ekstra ücretli hizmetleriniz nelerdir?",
          cevap: "Ekstra ücretli hizmetlerimiz arasında tam sigorta paketi, cam-lastik sigortası, ek sürücü, bebek/çocuk koltuğu, navigasyon cihazı, Wi-Fi, zincir-takoz seti (kış aylarında), 24 saat yol yardım paketi ve sınırsız kilometre hizmeti bulunmaktadır."
        },
        {
          soru: "İndirim kampanyalarınız var mı?",
          cevap: "Düzenli olarak sezonluk kampanyalar, hafta sonu indirimleri ve uzun dönem kiralama indirimleri sunuyoruz. 7 gün ve üzeri kiralamalarda %10, 30 gün ve üzeri kiralamalarda %20'ye varan indirimler uygulanmaktadır. Ayrıca kurumsal müşterilerimize özel fiyatlandırma politikamız bulunmaktadır."
        },
        {
          soru: "Ekstra kilometre ücreti ne kadardır?",
          cevap: "Kiralama süresince aşılabilecek kilometre limiti araç sınıfına göre günlük 300-500 km arasındadır. Bu limiti aşmanız durumunda ekstra kilometre ücreti, ekonomik araçlarda km başına 1,50 TL, orta sınıf araçlarda 2 TL, lüks araçlarda ise 3 TL'dir."
        }
      ]
    },
    {
      id: "iptal-kosullari",
      baslik: "İptal ve Değişiklik Koşulları",
      sorular: [
        {
          soru: "Rezervasyon iptal koşulları nelerdir?",
          cevap: "Kiralama başlangıç tarihinden 48 saat öncesine kadar yapılan iptallerde herhangi bir ücret alınmaz. 24-48 saat arası yapılan iptallerde 1 günlük kiralama bedelinin %50'si, 24 saatten az bir süre kala yapılan iptallerde ise 1 günlük kiralama bedeli tahsil edilir."
        },
        {
          soru: "Kiralamayı erken sonlandırırsam iade alabilir miyim?",
          cevap: "Araç kiralama süresini erken sonlandırmanız durumunda, kullanılmayan günler için iade yapılabilir. Ancak bu durumda günlük kiralama fiyatları yeniden hesaplanır ve indirimli fiyat avantajları kaybedilebilir. Erken iade durumlarında en az 24 saat önceden bilgi vermeniz gerekmektedir."
        },
        {
          soru: "Kiralama süresini uzatmak istersem ne yapmalıyım?",
          cevap: "Kiralama süresini uzatmak için mevcut kiralama süreniz bitmeden en az 24 saat önce müşteri hizmetlerimizi aramanız yeterlidir. Aracın müsaitlik durumuna göre uzatma işlemi yapılabilir. Onay almadan kiralama süresini aşmanız durumunda cezai işlem uygulanacağını unutmayın."
        },
        {
          soru: "Aracı geç teslim edersem ne olur?",
          cevap: "Araç teslim saatinden itibaren 1 saate kadar olan gecikmelerde ek ücret alınmaz. 1-3 saat arası gecikmelerde yarım günlük, 3 saatten fazla gecikmelerde ise tam günlük kiralama ücreti tahsil edilir. Gecikeceğiniz durumlarda mutlaka ofisimize haber vermenizi rica ederiz."
        }
      ]
    },
    {
      id: "sigorta-guvenlik",
      baslik: "Sigorta ve Güvenlik",
      sorular: [
        {
          soru: "Araçlar hangi sigortaları içeriyor?",
          cevap: "Tüm araçlarımız zorunlu trafik sigortası ve kasko ile kiralanmaktadır. Standart kasko, belirli oranda muafiyet içerir. Tam güvence paketi ile muafiyeti sıfırlayabilir, cam-far-lastik hasarlarını ve kişisel eşya güvencesini dahil edebilirsiniz."
        },
        {
          soru: "Kaza durumunda ne yapmalıyım?",
          cevap: "Kaza durumunda öncelikle 112'yi aramalı ve gerekiyorsa trafik polisine haber vermelisiniz. Ardından 7/24 hizmet veren acil yardım hattımızı aramalısınız. Kaza tutanağı tutulması ve fotoğraf çekilmesi çok önemlidir. Sigorta işlemlerinin doğru ilerleyebilmesi için kaza sonrası prosedürleri eksiksiz takip etmeniz gerekmektedir."
        },
        {
          soru: "Araç arızalanırsa ne yapmalıyım?",
          cevap: "Araç arızası durumunda lütfen hemen müşteri hizmetlerimizi arayın. 24 saat yol yardım hizmetimiz ile bulunduğunuz yere en yakın servis noktasından destek sağlanacaktır. Büyük arızalarda size yeni bir araç temin edilecektir. Yol yardım hizmetimiz tüm Türkiye genelinde geçerlidir."
        },
        {
          soru: "Araç çalınırsa nasıl bir süreç işleyecek?",
          cevap: "Aracın çalınması durumunda hemen polise ve şirketimize haber vermeniz gerekmektedir. Polis tutanağının bir kopyasını ofisimize iletmeniz ve çalınma koşullarını açıklayan bir tutanak imzalamanız istenecektir. Tam güvence paketi satın almış olmanız durumunda herhangi bir sorumluluk taşımazsınız."
        }
      ]
    },
    {
      id: "arac-kullanimi",
      baslik: "Araç Kullanımı ve Kurallar",
      sorular: [
        {
          soru: "Araçlarınızı yurt dışına çıkarabilir miyim?",
          cevap: "Araçlarımızın yurt dışına çıkarılması özel izne tabidir ve ek sigorta gerektirir. Minimum 30 gün önceden başvuru yapılması, gerekli evrakların tamamlanması ve ek ücret ödenmesi gerekmektedir. Yeşil kart (uluslararası sigorta) ücreti müşteri tarafından karşılanır."
        },
        {
          soru: "Kiralık araçla trafik cezası alırsam ne olur?",
          cevap: "Kiralama süresince alınan tüm trafik cezaları kiracıya aittir. Cezalar doğrudan sizin adınıza düzenlenir. Elektronik sistemle tespit edilen cezalar (hız, park, HGS/OGS) daha sonra tarafımıza bildirildiğinde, ceza tutarı ve 50 TL işlem ücreti kredi kartınızdan tahsil edilecektir."
        },
        {
          soru: "Aracı farklı bir kişi kullanabilir mi?",
          cevap: "Aracı, kiralama sözleşmesinde belirtilen kişiler dışında birinin kullanması yasaktır. Ek sürücü hizmeti satın alarak istediğiniz kişileri (ehliyet ve yaş şartlarını karşılamak koşuluyla) sözleşmeye ekletebilirsiniz. Her ek sürücü için günlük 50 TL ücret alınmaktadır."
        },
        {
          soru: "Köpeğimle araç kiralayabilir miyim?",
          cevap: "Evcil hayvanlarla seyahat etmek mümkündür, ancak araç içinde taşıma kafesi kullanmanız zorunludur. Araçtaki tüm kıl, koku ve diğer izlerin temizliğinden siz sorumlu olursunuz. Temizlik gerektiren durumlarda ekstra temizlik ücreti alınabilir."
        },
        {
          soru: "Aracı teslim ederken yakıt durumu ne olmalı?",
          cevap: "Araçlarımız genellikle dolu yakıt deposu ile teslim edilir ve dolu yakıt deposu ile iade edilmelidir. Yakıt eksiği ile teslim etmeniz durumunda, eksik yakıt miktarı ve servis ücreti hesaplanarak kredi kartınızdan tahsil edilecektir. Alternatif olarak yakıt dahil paket de tercih edebilirsiniz."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Sık Sorulan Sorular</h1>
      
      {/* Kategoriler Navigasyonu */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {sssKategoriler.map((kategori) => (
          <a 
            key={kategori.id} 
            href={`#${kategori.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {kategori.baslik}
          </a>
        ))}
      </div>
      
      {/* SSS İçeriği */}
      {sssKategoriler.map((kategori) => (
        <section key={kategori.id} id={kategori.id} className="mb-10">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">{kategori.baslik}</h2>
          
          <div className="space-y-6">
            {kategori.sorular.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-blue-700">{item.soru}</h3>
                <p className="text-gray-700">{item.cevap}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
      
      {/* İletişim Bilgileri */}
      <div className="bg-blue-50 p-6 rounded-lg mt-10">
        <h2 className="text-xl font-bold mb-4 text-center">Başka Sorularınız mı Var?</h2>
        <p className="text-center mb-6">
          Sorunuzun cevabını bulamadıysanız, müşteri hizmetlerimiz size yardımcı olmaktan memnuniyet duyacaktır.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+90 212 123 45 67</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>bilgi@rentacar.com</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>Canlı Destek</span>
          </div>
        </div>
        <div className="text-center mt-6">
          <a 
            href="/iletisim" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            İletişim Sayfasına Git
          </a>
        </div>
      </div>
    </div>
  );
} 