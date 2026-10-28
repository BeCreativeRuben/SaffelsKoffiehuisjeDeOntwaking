import Image from "next/image";
import type { PhotoMeta } from "@/lib/photos";

type Variant = "default" | "hero" | "room";

const sizesFor: Record<Variant, string> = {
  default: "(max-width: 899px) calc(100vw - 3rem), 640px",
  hero: "100vw",
  room: "(max-width: 899px) calc(100vw - 2.5rem), 860px",
};

type Props = {
  photo: PhotoMeta;
  caption: string;
  variant?: Variant;
  preload?: boolean;
};

export function ShutterWindow({
  photo,
  caption,
  variant = "default",
  preload = false,
}: Props) {
  const hero = variant === "hero";

  return (
    <figure className={`window window-${variant}`}>
      <div className="window-inner">
        <span className="slat" aria-hidden="true" />
        <div className={hero ? "frame frame-hero" : "frame"}>
          {hero ? (
            // Sized mozjpeg files: the foliage photo stays heavy through the
            // Next optimizer, and a capped srcset keeps the phone hero small.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/photos/hoeve-hero-800.jpg"
              srcSet="/photos/hoeve-hero-800.jpg 800w, /photos/hoeve-hero-1500.jpg 1500w"
              sizes="(max-width: 900px) 400px, 1400px"
              alt={photo.alt}
              width={1500}
              height={1125}
              fetchPriority="high"
              decoding="async"
              className="hero-img"
            />
          ) : (
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={sizesFor[variant]}
              preload={preload}
              style={{ width: "100%", height: "auto" }}
            />
          )}
          {hero ? (
            <>
              <span className="grade" aria-hidden="true" />
              <span className="vignette" aria-hidden="true" />
            </>
          ) : null}
        </div>
        <span className="slat" aria-hidden="true" />
      </div>
      <figcaption className={hero ? "sr-only" : undefined}>{caption}</figcaption>
    </figure>
  );
}
