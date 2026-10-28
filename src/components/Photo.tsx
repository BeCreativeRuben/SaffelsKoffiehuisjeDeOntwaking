import Image from "next/image";
import type { PhotoMeta } from "@/lib/photos";

const sizesFor = {
  hero: "(max-width: 899px) 100vw, 560px",
  feature: "(max-width: 799px) 86vw, 520px",
  print: "(max-width: 719px) 46vw, 200px",
} as const;

type Props = {
  photo: PhotoMeta;
  caption?: string;
  tilt?: number;
  wash?: boolean;
  kind?: keyof typeof sizesFor;
  sizes?: string;
  preload?: boolean;
  className?: string;
};

export function Photo({
  photo,
  caption,
  tilt = -1.1,
  wash = false,
  kind = "print",
  sizes,
  preload = false,
  className,
}: Props) {
  return (
    <figure
      className={["print", wash ? "print-wash" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ ["--tilt" as string]: `${tilt}deg` }}
    >
      <div className="frame">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes ?? sizesFor[kind]}
          preload={preload}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
