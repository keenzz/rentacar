import React from 'react';

export default function SartlarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Şartlar ve Koşullar</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4 text-gray-700">
          Aşağıdaki Kiralama Şartları ve Koşulları ("Sözleşme"), RentaCar ("Kiralayan") ve araç kiralayan kişi ("Kiracı") arasındaki ilişkiyi düzenlemektedir. 
          Araç kiralamak için rezervasyon yaparken veya araç teslim alırken bu şartları kabul etmiş sayılırsınız.
        </p>
        
        <div className="mt-2 text-sm text-right italic text-gray-600">
          <p>Son güncelleme: 01.05.2023</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">1. Araç Kiralama Şartları</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">1.1 Yaş ve Ehliyet Şartları</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Araç kiralamak için minimum yaş sınırı 21'dir. Bazı araç grupları için minimum yaş sınırı 25 veya 30 olabilir.
              </li>
              <li>
                Kiracı, geçerli bir sürücü belgesi/ehliyete sahip olmalıdır. Ehliyetin alınış tarihinin üzerinden en az 1 yıl geçmiş olması gerekmektedir.
              </li>
              <li>
                Yabancı ülke ehliyetleri için Uluslararası Sürücü Belgesi veya Türkçe noter tasdikli tercüme talep edilebilir.
              </li>
              <li>
                21-25 yaş arası sürücülerden genç sürücü ücreti tahsil edilmektedir. Bu ücret, araç grubuna göre değişiklik gösterir.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">1.2 Kiralama Süresi</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Minimum kiralama süresi 24 saattir. 3 saatten fazla gecikmeler tam gün olarak ücretlendirilir.
              </li>
              <li>
                Rezervasyon sırasında belirtilen kiralama süresi, sözleşmede belirtilen süreyi aşamaz. Süre uzatımı için Kiralayan'ın önceden onayı alınmalıdır.
              </li>
              <li>
                Onay alınmadan kiralama süresinin aşılması durumunda, Kiralayan'ın yasal işlem başlatma hakkı saklıdır.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">1.3 Ödeme ve Depozito</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Kiralama bedeli, rezervasyon sırasında veya araç tesliminde peşin olarak ödenir. Uzun dönem kiralamalarda aylık veya haftalık ödeme düzenlenebilir.
              </li>
              <li>
                Tüm kiralamalarda depozito (teminat) alınır. Depozito miktarı araç grubuna göre değişmektedir. Depozito, aracın hasarsız ve zamanında teslim edilmesi durumunda iade edilir.
              </li>
              <li>
                Depozito, kredi kartı provizyon yöntemiyle alınır. Nakit depozito kabul edilmemektedir.
              </li>
              <li>
                Ekstra hizmetler, yakıt eksiği, trafik cezaları ve hasar bedelleri depozito tutarından düşülebilir.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">2. Araç Kullanım Koşulları</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">2.1 Sürücü Sınırlamaları</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Aracı yalnızca sözleşmede adı geçen kişiler kullanabilir. Ek sürücü hizmeti alınmadan aracın başka kişilerce kullanılması yasaktır.
              </li>
              <li>
                Ek sürücünün de aynı ehliyet ve yaş koşullarını karşılaması ve kimlik/ehliyet bilgilerinin sözleşmeye eklenmesi zorunludur.
              </li>
              <li>
                Alkol, uyuşturucu veya performansı etkileyecek ilaçların etkisi altında araç kullanmak kesinlikle yasaktır.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">2.2 Kullanım Sınırlamaları</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Aracın yurt dışına çıkarılması özel izne tabidir ve ek sigorta gerektirir. İzinsiz yurt dışına çıkarılması halinde tüm sorumluluk kiracıya aittir.
              </li>
              <li>
                Araçların yarış, hız testi, ralli veya benzeri etkinliklerde kullanılması yasaktır.
              </li>
              <li>
                Araçlar yasadışı faaliyetlerde, kamu düzenini bozacak şekilde veya başka bir aracı çekmek için kullanılamaz.
              </li>
              <li>
                Araçlar, izin verilen yolcu kapasitesinden fazla yolcu taşımak için kullanılamaz.
              </li>
              <li>
                Evcil hayvanların taşınması, önceden bildirilmesi ve taşıma kafesi kullanılması koşuluyla mümkündür.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">2.3 Aracın Bakımı ve Sorumluluk</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Kiracı, kiralama süresi boyunca aracın uygun şartlarda kullanılmasından ve korunmasından sorumludur.
              </li>
              <li>
                Araç teslim alındığında yakıt seviyesi tam dolu olup, aynı seviyede iade edilmelidir. Eksik yakıt durumunda, yakıt maliyetine ek olarak servis ücreti de tahsil edilir.
              </li>
              <li>
                Lastik patlaması, farların yanması gibi normal aşınma ve yıpranmadan kaynaklı olmayan hasarlardan kiracı sorumludur.
              </li>
              <li>
                Uzun süreli kiralamalarda (28 günden fazla), rutin bakımların yaptırılması kiracının sorumluluğundadır. Bakım öncesi Kiralayan'dan onay alınmalıdır.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">3. Sigorta ve Hasar Koşulları</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">3.1 Sigorta Kapsamı</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Tüm araçlar zorunlu trafik sigortası ve kasko ile kiralanmaktadır. Standart kasko belirli oranda muafiyet içerir.
              </li>
              <li>
                Tam güvence paketi satın alınması durumunda kaza hasarlarındaki muafiyet sıfırlanır.
              </li>
              <li>
                Aşağıdaki durumlar sigorta kapsamı dışındadır:
                <ul className="list-disc pl-6 mt-2">
                  <li>Kasıtlı yapılan hasarlar</li>
                  <li>Alkol veya uyuşturucu etkisi altında meydana gelen hasarlar</li>
                  <li>Yetkisiz sürücünün neden olduğu hasarlar</li>
                  <li>Araç içerisinde bırakılan kişisel eşyaların kaybolması veya zarar görmesi</li>
                  <li>Aracın altında meydana gelen hasarlar</li>
                  <li>Aracın uygun olmayan yol koşullarında kullanımından kaynaklanan hasarlar</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">3.2 Kaza ve Hasar Bildirimi</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Herhangi bir kaza, hırsızlık veya hasar durumunda, olayın derhal Kiralayan'a ve gerekli durumlarda polise bildirilmesi zorunludur.
              </li>
              <li>
                Kaza tutanağı tutulması ve hasarlı aracın fotoğraflarının çekilmesi gerekmektedir. Tutanakta karşı tarafın kimlik, iletişim ve sigorta bilgileri yer almalıdır.
              </li>
              <li>
                Kiracı, Kiralayan'a hasar ve olayla ilgili tüm belgeleri teslim etmelidir.
              </li>
              <li>
                Bildirim yapılmayan hasarların tüm sorumluluğu kiracıya aittir ve sigorta kapsamı dışında değerlendirilir.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">4. İptal ve Değişiklik Politikası</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">4.1 Rezervasyon İptali</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Kiralama başlangıç tarihinden 48 saat öncesine kadar yapılan iptallerde herhangi bir ücret alınmaz.
              </li>
              <li>
                24-48 saat arası yapılan iptallerde 1 günlük kiralama bedelinin %50'si tahsil edilir.
              </li>
              <li>
                24 saatten az bir süre kala yapılan iptallerde 1 günlük kiralama bedeli tahsil edilir.
              </li>
              <li>
                İptal talebi yazılı olarak (e-posta ile) yapılmalıdır.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">4.2 Değişiklik ve Erken İade</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Rezervasyon değişiklikleri, 48 saat öncesine kadar ücretsiz yapılabilir. Daha sonraki değişiklikler, müsaitlik durumuna göre değerlendirilir.
              </li>
              <li>
                Aracın erken iade edilmesi durumunda, kullanılmayan günler için iade yapılabilir. Ancak günlük kiralama oranları yeniden hesaplanır ve indirimli fiyat avantajları kaybedilebilir.
              </li>
              <li>
                Erken iade durumunda en az 24 saat önceden bilgi verilmelidir.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">5. Trafik ve Diğer Cezalar</h2>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Kiralama süresi boyunca araçla ilgili tüm trafik cezaları, otopark ücretleri, köprü/otoyol geçiş ücretleri ve diğer cezalar kiracının sorumluluğundadır.
          </li>
          <li>
            Elektronik sistemle tespit edilen cezalar (hız, kırmızı ışık, park, HGS/OGS) kiralama sonrasında Kiralayan'a bildirildiğinde, ceza tutarı ve işlem ücreti kiracının kredi kartından tahsil edilecektir.
          </li>
          <li>
            Kiracı, araç kiraladığı süre içerisinde işlenen trafik suçlarından dolayı resmi makamlarca talep edilebilecek her türlü bilgi ve belgeyi sağlamakla yükümlüdür.
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">6. Kişisel Verilerin Korunması</h2>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Kiracının kişisel bilgileri, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında işlenmekte ve korunmaktadır.
          </li>
          <li>
            Kiracının bilgileri, kiralama işlemi, yasal yükümlülükler, istatistiksel değerlendirmeler ve pazarlama amaçlarıyla kullanılabilir.
          </li>
          <li>
            Kiracı, kişisel verilerinin işlenmesine onay vermiş sayılır. Dilediği zaman bu onayı geri çekme hakkına sahiptir.
          </li>
          <li>
            Detaylı bilgi için <a href="/gizlilik" className="text-blue-600 hover:underline">Gizlilik Politikası</a> sayfasını inceleyebilirsiniz.
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">7. Genel Hükümler</h2>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Bu sözleşme Türkiye Cumhuriyeti kanunlarına tabidir.
          </li>
          <li>
            Sözleşmeden doğabilecek ihtilafların çözümünde İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
          </li>
          <li>
            Kiralayan, bu şartları ve koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar. Güncel şartlar web sitesinde yayınlanacaktır.
          </li>
          <li>
            Kiracı, araç teslim alırken bu şartları ve koşulları okuduğunu ve kabul ettiğini beyan etmiş sayılır.
          </li>
        </ul>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <p className="mb-4">
          Bu sayfa genel bilgilendirme amaçlıdır ve sözleşmenin yerini tutmaz. 
          Araç kiralamadan önce, sizinle firmamız arasında imzalanacak olan tam sözleşme metni geçerli olacaktır.
        </p>
        
        <div className="mt-4">
          <a 
            href="/iletisim" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sorularınız için İletişim
          </a>
        </div>
      </div>
    </div>
  );
} 