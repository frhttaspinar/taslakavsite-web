import { Inter } from "next/font/google";
import { siteData } from "@/config/siteData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

// Yerel SEO: başlık ve açıklama Amasya odaklı anahtar kelimeleri içerir.
// Açıklama 150-160 karakter aralığında tutulmalıdır (mevcut metin: 152).
const seoTitle = "Ova Hukuk ve Danışmanlık | Amasya Avukat & Hukuk Bürosu";
const seoDescription =
  "Amasya merkezli Ova Hukuk ve Danışmanlık; avukatlık, hukuki danışmanlık, arabuluculuk, ceza ve aile hukuku alanlarında özenli ve güvenilir hizmet sunar.";

export const metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "Amasya avukat",
    "Amasya hukuk bürosu",
    "hukuki danışmanlık",
    "arabuluculuk",
    "ceza hukuku",
    "aile hukuku",
  ],
  icons: { icon: siteData.media.logo },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    locale: "tr_TR",
    type: "website",
  },
};

// Google'ın ofisi yerel işletme olarak tanıması için LegalService şeması.
// NAP (name, address, telephone) bilgileri Google Business Profile ve
// sitedeki iletişim bölümüyle birebir aynı kalmalıdır.
const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Ova Hukuk ve Danışmanlık",
  description: seoDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Örnek Mahallesi, Adalet Caddesi, Hukuk Plaza Kat:5 No:10",
    postalCode: "05000",
    addressLocality: "Merkez",
    addressRegion: "Amasya",
    addressCountry: "TR",
  },
  telephone: "0505 505 05 05",
  email: "info@ovahukuk.com",
  foundingDate: siteData.founded,
  areaServed: {
    "@type": "City",
    name: "Amasya",
  },
  founder: siteData.lawyers.map((lawyer) => ({
    "@type": "Person",
    name: lawyer.name,
    jobTitle: "Avukat",
  })),
  knowsAbout: siteData.practiceAreas.map((area) => area.title),
  // Demo şablonu: gerçek sosyal medya profilleri eklendiğinde doldurun.
  sameAs: [],
};

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="dynamic-min-screen min-h-screen min-h-[100dvh] overflow-x-hidden bg-night font-sans text-mist antialiased subpixel-antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
        <a href="#ana-icerik" className="skip-link">
          Ana içeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
