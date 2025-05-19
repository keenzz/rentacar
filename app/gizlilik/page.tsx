import React from 'react';
import Link from 'next/link';

export default function GizlilikPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Gizlilik Politikası</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4 text-gray-700">
          RentaCar ("biz", "şirketimiz" veya "firmamız") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında "Veri Sorumlusu" sıfatıyla, 
          sizlerin kişisel verilerinin gizliliğini ve güvenliğini önemsiyoruz. Bu Gizlilik Politikası, web sitemizi ve hizmetlerimizi kullanırken toplanan, 
          işlenen ve saklanan kişisel verilerinize ilişkin uygulamalarımızı açıklamaktadır.
        </p>
        
        <div className="mt-2 text-sm text-right italic text-gray-600">
          <p>Son güncelleme: 01.05.2023</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">1. Toplanan Kişisel Veriler</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">1.1 Sizin Tarafınızdan Sağlanan Veriler</h3>
            <p className="mb-2 text-gray-700">
              Aşağıdaki durumlarda sizden kişisel verilerinizi paylaşmanızı isteyebiliriz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hesap oluşturma ve yönetme sürecinde</li>
              <li>Araç rezervasyonu yaparken</li>
              <li>İletişim formunu doldururken</li>
              <li>Müşteri hizmetleriyle iletişime geçtiğinizde</li>
              <li>Anketlerimize katıldığınızda</li>
              <li>Bültenlerimize abone olduğunuzda</li>
            </ul>
            
            <p className="mt-4 mb-2 text-gray-700">
              Bu kapsamda topladığımız kişisel veriler şunları içerebilir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ad, soyad ve doğum tarihi</li>
              <li>İletişim bilgileri (e-posta adresi, telefon numarası, adres)</li>
              <li>Ehliyet bilgileri (ehliyet numarası, alınış ve bitiş tarihi, sınıfı)</li>
              <li>Kimlik/pasaport bilgileri (TC kimlik numarası veya pasaport numarası)</li>
              <li>Ödeme bilgileri (kredi kartı bilgileri, fatura adresi)</li>
              <li>Rezervasyon tercihleri ve geçmiş kiralama bilgileri</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">1.2 Otomatik Olarak Toplanan Veriler</h3>
            <p className="mb-2 text-gray-700">
              Web sitemizi ziyaret ettiğinizde veya mobil uygulamamızı kullandığınızda, aşağıdaki bilgileri otomatik olarak toplarız:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP adresi ve konum bilgileri</li>
              <li>Tarayıcı türü ve sürümü</li>
              <li>İşletim sistemi</li>
              <li>Ziyaret tarihi ve saati</li>
              <li>Tıklama davranışları ve gezinme bilgileri</li>
              <li>Cihaz bilgileri (mobil cihaz ID, model ve üretici)</li>
            </ul>
            
            <p className="mt-4 text-gray-700">
              Bu bilgileri toplamak için çerezler ve benzer teknolojiler kullanırız. Çerez politikamız hakkında daha fazla bilgi için "Çerez Politikası" bölümünü inceleyebilirsiniz.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">2. Kişisel Verilerin Kullanım Amaçları</h2>
        
        <p className="mb-4 text-gray-700">
          Topladığımız kişisel verileri aşağıdaki amaçlar doğrultusunda kullanırız:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Sözleşmesel Yükümlülüklerimizi Yerine Getirmek:</span> Araç kiralama hizmetimizi sunmak, rezervasyonunuzu gerçekleştirmek, ödeme işlemlerini tamamlamak ve müşteri hizmetleri sağlamak.
          </li>
          <li>
            <span className="font-medium">Hizmetlerimizi Geliştirmek:</span> Müşteri deneyimini iyileştirmek, hizmet kalitemizi artırmak ve yeni hizmetler geliştirmek.
          </li>
          <li>
            <span className="font-medium">İletişim:</span> Rezervasyon onayları, değişiklik bildirimleri, hatırlatmalar ve müşteri hizmetleri konularında sizinle iletişim kurmak.
          </li>
          <li>
            <span className="font-medium">Pazarlama Faaliyetleri:</span> İzniniz olması halinde, özel teklifler, promosyonlar ve yeni hizmetler hakkında sizi bilgilendirmek.
          </li>
          <li>
            <span className="font-medium">Yasal Yükümlülükler:</span> Trafik cezaları, yasal uyuşmazlıklar ve vergi düzenlemeleri gibi yasal yükümlülüklerimizi yerine getirmek.
          </li>
          <li>
            <span className="font-medium">Güvenlik:</span> Dolandırıcılık ve diğer yasadışı faaliyetleri önlemek, tespit etmek ve araştırmak; hesap ve network güvenliğini sağlamak.
          </li>
          <li>
            <span className="font-medium">İstatistiksel Analiz:</span> Hizmetlerimizin kullanımına ilişkin eğilimleri analiz etmek ve istatistiksel çalışmalar yapmak.
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">3. Kişisel Verilerin Paylaşılması</h2>
        
        <p className="mb-4 text-gray-700">
          Kişisel verileriniz, aşağıdaki durumlarda ve amaçlarla üçüncü taraflarla paylaşılabilir:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Hizmet Sağlayıcılar:</span> Ödeme işlemcileri, müşteri hizmetleri, e-posta gönderim servisleri, veri depolama hizmetleri gibi hizmetleri sağlayan üçüncü taraf tedarikçiler.
          </li>
          <li>
            <span className="font-medium">İş Ortakları:</span> Size daha iyi hizmet sunabilmek için işbirliği yaptığımız şirketler (örneğin, sigorta şirketleri, araç servisleri).
          </li>
          <li>
            <span className="font-medium">Yetkili Makamlar:</span> Yasal bir yükümlülük olması durumunda, mahkeme kararı veya yasal bir süreç gereği, kamu kurumları ve kolluk kuvvetleri ile bilgi paylaşımı yapabiliriz.
          </li>
          <li>
            <span className="font-medium">Kurumsal İşlemler:</span> Şirketimizin tamamının veya bir kısmının satışı, birleşmesi, devri veya yeniden yapılandırılması durumunda, kişisel veriler ilgili taraflara aktarılabilir.
          </li>
        </ul>
        
        <p className="mt-4 text-gray-700">
          Üçüncü taraflarla veri paylaşımı yaparken, bu tarafların da yeterli veri güvenliği önlemlerini aldığından emin olmak için gerekli tedbirleri alırız.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">4. Kişisel Verilerin Saklanması ve Güvenliği</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">4.1 Saklama Süresi</h3>
            <p className="mb-2 text-gray-700">
              Kişisel verilerinizi, hizmetlerimizi sağlamak, yasal yükümlülüklerimizi yerine getirmek ve meşru iş çıkarlarımızı korumak için gerekli olan süre boyunca saklarız. Saklama süresi şu kriterlere göre belirlenir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sizinle olan iş ilişkimizin süresi</li>
              <li>Yasal yükümlülüklerimiz ve saklama yükümlülükleri</li>
              <li>Olası yasal anlaşmazlıklar için zaman aşımı süreleri</li>
              <li>İş operasyonlarımızın gereklilikleri</li>
            </ul>
            
            <p className="mt-4 text-gray-700">
              Saklama süresi sona erdiğinde, kişisel verileriniz güvenli bir şekilde silinir veya anonimleştirilir.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">4.2 Veri Güvenliği</h3>
            <p className="mb-2 text-gray-700">
              Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki önlemleri alırız:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Veri şifreleme teknolojileri kullanımı</li>
              <li>Güvenlik duvarları ve güncel anti-virüs yazılımları</li>
              <li>Düzenli güvenlik değerlendirmeleri ve testleri</li>
              <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
              <li>Çalışanlara veri güvenliği eğitimi verilmesi</li>
              <li>Fiziksel güvenlik önlemleri</li>
            </ul>
            
            <p className="mt-4 text-gray-700">
              Tüm bu önlemlere rağmen, hiçbir veri aktarımı veya saklama yöntemi %100 güvenli değildir. Kişisel verilerinizin güvenliğini tehdit eden bir durum ortaya çıkarsa, yasal yükümlülüklerimiz doğrultusunda sizi en kısa sürede bilgilendireceğiz.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">5. Çerez Politikası</h2>
        
        <p className="mb-4 text-gray-700">
          Web sitemizde, kullanıcı deneyimini iyileştirmek ve site işlevselliğini artırmak amacıyla çerezler (cookies) kullanmaktayız.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">5.1 Çerez Türleri</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Zorunlu Çerezler:</span> Sitemizin doğru çalışması için gereklidir. Oturum yönetimi, alışveriş sepeti gibi temel işlevleri sağlar.
              </li>
              <li>
                <span className="font-medium">Performans Çerezleri:</span> Ziyaretçilerin siteyi nasıl kullandığı hakkında bilgi toplar, site performansını değerlendirmemize yardımcı olur.
              </li>
              <li>
                <span className="font-medium">İşlevsellik Çerezleri:</span> Tercihlerinizi hatırlamamızı sağlar (dil seçimi, konum gibi).
              </li>
              <li>
                <span className="font-medium">Hedefleme/Reklam Çerezleri:</span> Sizi ilgilendirebilecek reklamları göstermek için kullanılır.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-700 mb-2">5.2 Çerez Yönetimi</h3>
            <p className="text-gray-700">
              Çoğu web tarayıcısı, çerezleri kabul etmeyi varsayılan olarak ayarlamıştır. Ancak tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerezler cihazınıza yerleştirildiğinde tarayıcınızın sizi uyarmasını sağlayabilirsiniz. Çerezleri devre dışı bırakmak, sitemizin bazı özelliklerinin düzgün çalışmamasına neden olabilir.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">6. Yasal Haklarınız</h2>
        
        <p className="mb-4 text-gray-700">
          KVKK kapsamında, kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
          <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
          <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
          <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
          <li>Kişisel verilerinizin aktarıldığı üçüncü kişilere yukarıda belirtilen düzeltme, silme veya yok etme işlemlerinin bildirilmesini isteme</li>
          <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
          <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
        </ul>
        
        <p className="mt-4 text-gray-700">
          Bu haklarınızı kullanmak için aşağıdaki "İletişim" bölümünde belirtilen yöntemlerle bizimle iletişime geçebilirsiniz.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">7. Çocukların Gizliliği</h2>
        
        <p className="text-gray-700">
          Hizmetlerimiz 18 yaş ve üzeri kişilere yöneliktir. 18 yaşından küçük bireylerin kişisel bilgilerini bilerek toplamayız. 18 yaşından küçük bir bireyin kişisel verilerini topladığımızı fark edersek, bu verileri en kısa sürede silmek için gerekli adımları atacağız. Eğer 18 yaşından küçük bir bireye ait kişisel verileri topladığımızı düşünüyorsanız, lütfen bizimle iletişime geçin.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">8. Gizlilik Politikasında Değişiklikler</h2>
        
        <p className="text-gray-700">
          Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik olması durumunda, güncel politikayı web sitemizde yayınlayarak ve/veya e-posta ile bildirimde bulunarak sizi bilgilendireceğiz. Değişikliklerin yürürlüğe girme tarihi, politikanın güncellendiği tarih olacaktır. Değişikliklerden sonra hizmetlerimizi kullanmaya devam etmeniz, güncellenmiş Gizlilik Politikasını kabul ettiğiniz anlamına gelecektir.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">9. İletişim</h2>
        
        <p className="mb-4 text-gray-700">
          Gizlilik Politikamız veya kişisel verilerinizin işlenmesi hakkında sorularınız, talepleriniz veya endişeleriniz varsa, aşağıdaki yöntemlerle bizimle iletişime geçebilirsiniz:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold mb-2">E-posta ile İletişim</h3>
            <p><a href="mailto:kvkk@rentacar.com" className="text-blue-600 hover:underline">kvkk@rentacar.com</a></p>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold mb-2">Posta ile İletişim</h3>
            <p className="text-gray-700">
              RentaCar A.Ş. <br />
              Veri Koruma Birimi <br />
              Bağdat Caddesi No:123 <br />
              Kadıköy, İstanbul <br />
              Türkiye
            </p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-700">
          Veri Sorumlusu: RentaCar Araç Kiralama A.Ş.
        </p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <p className="mb-4">
          Bu sayfa bilgilendirme amaçlıdır ve yasal tavsiye niteliği taşımamaktadır. 
          Gizlilik politikamız hakkında daha fazla bilgi edinmek veya haklarınızı kullanmak için lütfen bizimle iletişime geçin.
        </p>
        
        <div className="mt-4">
          <Link 
            href="/iletisim" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            İletişim Sayfası
          </Link>
        </div>
      </div>
    </div>
  );
} 