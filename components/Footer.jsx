"use client";

import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { siteData } from "@/config/siteData";
import FadeIn from "@/components/FadeIn";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  const { contact, footer, lawyers } = siteData;
  const year = new Date().getFullYear();

  return (
    <footer
      id="iletisim"
      className="border-t border-white/[0.08] bg-night-800/70"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <FadeIn className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.8fr] lg:gap-12">
          {/* Marka */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <BrandMark className="h-16 sm:h-20" />
              <div>
                <p className="max-w-xs text-balance font-sans text-xl font-semibold leading-tight tracking-tight text-mist sm:text-2xl">
                  {siteData.officeName}
                </p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                  Kuruluş {siteData.founded} — {siteData.city}
                </p>
              </div>
            </div>
            <p className="max-w-xs font-sans text-base font-light italic leading-relaxed text-mist-400">
              {siteData.slogan}
            </p>
            <ul className="flex flex-col gap-1.5 text-[13px] font-normal text-mist-500">
              {lawyers.map((l) => (
                <li key={l.name}>
                  {l.name}
                  <span aria-hidden="true" className="mx-1.5 text-gold/50">
                    ·
                  </span>
                  {l.bar} — {l.registryNo}
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              İletişim
            </h3>
            <p className="flex max-w-xs items-start gap-3 text-[15px] font-normal leading-7 text-mist-400">
              <MapPin
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className="mt-1 shrink-0 text-gold/70"
              />
              {contact.address}
            </p>
            <ul className="flex flex-col gap-3">
              {contact.phones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="flex min-h-11 items-center gap-3 text-[15px] font-normal text-mist-400 transition-colors duration-200 hover-fine:hover:text-gold"
                  >
                    <Phone
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="text-gold/70"
                    />
                    {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-3 text-[15px] font-normal text-mist-400 transition-colors duration-200 hover-fine:hover:text-gold"
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-gold/70"
                  />
                  WhatsApp ile yazın
                </a>
              </li>
            </ul>
          </div>

          {/* Harita */}
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Ofisimiz
            </h3>
            <p className="max-w-xs text-sm font-normal leading-6 text-mist-500">
              Randevu için önceden arayabilir ya da WhatsApp üzerinden bize
              ulaşabilirsiniz.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
              <iframe
                title={`${siteData.officeNameShort} ofis konumu — Google Haritalar`}
                src={contact.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-52 w-full border-0 sm:h-56"
              />
            </div>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-secondary w-fit gap-2.5 border-gold/50 text-gold"
            >
              <MapPin size={16} strokeWidth={1.75} aria-hidden="true" />
              Haritada Gör
              <ExternalLink size={13} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Alt şerit */}
      <div className="border-t border-white/[0.06]">
        <div className="site-container flex flex-col gap-3 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-6 text-center text-[12px] font-normal leading-relaxed text-mist-500 sm:flex-row sm:items-center sm:justify-between sm:py-6 sm:text-left">
          <p>
            © {year} {siteData.officeName} — Tüm hakları saklıdır.
          </p>
          <p className="max-w-md sm:text-right">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
