import Image from "next/image";
import type { PhotoMeta } from "@/lib/photos";

type Props = {
  photo: PhotoMeta;
  caption: string;
};

export function ShutterWindow({ photo, caption }: Props) {
  return (
    <figure className="window">
      <div className="window-inner">
        <span className="slat" aria-hidden="true" />
        <div className="frame frame-hero">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 899px) calc(100vw - 3rem), 640px"
            preload
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <span className="slat" aria-hidden="true" />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
