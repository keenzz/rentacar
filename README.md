# RentaCar - Araç Kiralama Platformu

![RentaCar Logo](https://rentacar-zeta.vercel.app/logo.png)

## 🚗 Proje Hakkında

RentaCar, kullanıcıların kolayca araç kiralayabilmesini sağlayan modern bir web platformudur. Kullanıcı dostu arayüzü ve zengin özellikleriyle araç kiralama sürecini basitleştirmeyi amaçlamaktadır.

**Demo:** [https://rentacar-zeta.vercel.app](https://rentacar-zeta.vercel.app)

> **Not:** Bu proje bir demo çalışmasıdır. Gerçek bir araç kiralama hizmeti sunmamaktadır.

## ✨ Özellikler

- 🌐 Responsive tasarım (Mobil ve Masaüstü uyumlu)
- 📱 Mobil cihazlar için alt navigasyon barı
- 🚙 Detaylı araç listeleme ve arama
- 📅 Rezervasyon sistemi
- 🔍 Araç detay sayfaları
- ℹ️ Bilgilendirme modali
- 📲 WhatsApp üzerinden iletişim entegrasyonu

## 🛠️ Kullanılan Teknolojiler

- **Frontend/Backend:**
  - [Next.js 15](https://nextjs.org/) - React framework
  - [React 19](https://reactjs.org/) - UI kütüphanesi
  - [TypeScript](https://www.typescriptlang.org/) - Tip güvenli JavaScript

- **Styling:**
  - [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework

- **Deployment:**
  - [Vercel](https://vercel.com/) - Hosting platformu

## 🚀 Kurulum

Bu projeyi lokal ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Repoyu klonlayın:

```bash
git clone https://github.com/kullaniciadi/rentacar.git
cd rentacar
```

2. Bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
# veya
yarn dev
```

4. Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

## 📊 Proje Yapısı

```
rentacar/
├── app/                    # Next.js App Router
│   ├── components/         # Paylaşılan bileşenler
│   │   ├── InfoModal.tsx   # Bilgilendirme modali
│   │   └── MobileBottomNavbar.tsx  # Mobil navigasyon barı
│   ├── araclar/            # Araçlar sayfaları
│   │   └── [id]/           # Araç detay sayfası
│   ├── globals.css         # Global CSS
│   ├── layout.tsx          # Ana layout
│   └── page.tsx            # Ana sayfa
├── public/                 # Statik dosyalar
├── next.config.ts          # Next.js yapılandırması
├── package.json            # Proje bağımlılıkları
└── tsconfig.json           # TypeScript yapılandırması
```

## 📱 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](https://rentacar-zeta.vercel.app/screenshots/anasayfa.png)

### Araç Listesi
![Araç Listesi](https://rentacar-zeta.vercel.app/screenshots/araclar.png)

### Araç Detay
![Araç Detay](https://rentacar-zeta.vercel.app/screenshots/arac-detay.png)

### Mobil Görünüm
![Mobil Görünüm](https://rentacar-zeta.vercel.app/screenshots/mobil.png)

## 🌐 Vercel Deployment

Proje [Vercel](https://vercel.com) üzerinde barındırılmaktadır. Yeni bir deployment yapmak için:

```bash
vercel
# veya
vercel --prod
```

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## 📞 İletişim

Sorularınız veya geri bildirimleriniz için:

- **WhatsApp:** [0540 100 10 80](https://wa.me/905401001080?text=Merhaba,%20RentaCar%20web%20sitesi%20üzerinden%20bilgi%20almak%20istiyorum.)
- **E-posta:** info@rentacar.com

---

Geliştirici tarafından ❤️ ile yapılmıştır.
