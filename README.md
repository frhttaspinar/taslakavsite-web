# OVA HUKUK ve DANIŞMANLIK — Avukatlık Ofisi One-Pager Şablonu

Lüks, koyu tonlu ve %100 mobil uyumlu tek sayfalık avukatlık ofisi sitesi.
**Next.js (App Router) + Tailwind CSS + Framer Motion + lucide-react**

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production derlemesi
npm start        # production sunucusu
```

## Başka bir avukat/ofis için özelleştirme

Tüm içerik tek dosyadan yönetilir: **`config/siteData.js`**

- Ofis adı, slogan, kuruluş yılı, şehir
- Avukatlar (isim, baro, sicil no)
- Uzmanlık alanları (ikon adları `components/PracticeAreas.jsx` içindeki
  `ICONS` haritasından seçilir; yeni bir lucide ikonu gerekirse önce oraya ekleyin)
- Resmî bağlantılar ve sosyal medya (demo şablonunda `#` olan Instagram adreslerini gerçek hesaplarla güncelleyin)
- Müvekkil yorumları, makaleler, iletişim ve adres bilgileri

Medya dosyaları `public/` klasöründedir ve yolları `siteData.media`
altında tanımlıdır:

| Dosya | Kullanım yeri |
| --- | --- |
| `logo.png` | Navbar + footer logosu, favicon |
| `hero.mp4` | Hero arka plan videosu |
| `ornek.png` | Hakkımızda bölümü fotoğrafı (jenerik yer tutucu görsel) |
| `terazi.jpeg` | İlk makale kartının görseli |

## Tasarım sistemi

Renkler ve fontlar `tailwind.config.js` içinde token olarak tanımlıdır:

- `night` (#0C142E) — gece mavisi/antrasit zemin tonları
- `mist` (#F2F0EA) — sıcak kırık beyaz metin tonları
- `gold` (#D8B878) — soft antika altın vurgular
- Tüm arayüz fontu: Inter (`app/layout.js`, Türkçe karakterler için
  `latin-ext` alt kümesiyle yüklenir)

Ortak kart yüzeyi, container, bölüm boşluğu, CTA ve ikon butonu stilleri
`app/globals.css` içinde merkezi olarak yönetilir.

## Bileşen yapısı

```
app/
  layout.js        # fontlar, metadata, tema rengi
  page.js          # bölümlerin sıralaması
  globals.css      # tasarım tabanı, ortak yüzey ve kontrol stilleri
components/
  Navbar.jsx       # scroll'da cam efektli sabit menü + mobil hamburger
  Hero.jsx         # tam ekran video + yüklenme animasyonlu başlık
  About.jsx        # fotoğraf + 10 yıllık tecrübe + avukat listesi
  PracticeAreas.jsx# ana alan (Arabuluculuk) geniş kart + 6'lı grid
  QuickLinks.jsx   # resmî kurum ve sosyal medya pilleri
  Testimonials.jsx # kaydırmalı müvekkil yorumları carousel'i
  Blog.jsx         # 3 makale kartı (görselsizler § kapaklı)
  Footer.jsx       # adres, telefonlar, Haritada Gör butonu
  WhatsAppButton.jsx # nabız animasyonlu sabit buton
  SectionHeading.jsx / FadeIn.jsx # ortak başlık ve animasyon sarmalayıcıları
config/
  siteData.js      # TÜM içerik burada
```
