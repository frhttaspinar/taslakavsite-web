import Image from "next/image";
import { siteData } from "@/config/siteData";

/** Logoyu kırpmadan ve en-boy oranını değiştirmeden gösterir. */
export default function BrandMark({ className = "h-14", priority = false }) {
  return (
    <span
      className={`inline-flex w-auto shrink-0 items-center justify-center overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        src={siteData.media.logo}
        alt=""
        width={1254}
        height={1254}
        priority={priority}
        sizes="(min-width: 640px) 80px, 64px"
        className="h-full w-auto object-contain"
        style={{ objectFit: "contain" }}
      />
    </span>
  );
}
