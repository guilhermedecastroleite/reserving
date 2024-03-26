import type { HotelImages } from "@/app/types";
import clsx from "clsx";
import Image from "next/image";

interface AlbumProps {
  images: HotelImages;
  className?: string;
}

const Album = ({ images, className }: AlbumProps) => {
  const { cover, album } = images;

  console.log({ cover });

  return (
    <div
      id="Album"
      className={clsx(
        "grid grid-areas-album md:grid-areas-album_mid lg:grid-areas-album_full gap-4",
        className
      )}
    >
      <Image
        src={cover.src}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        style={{ gridArea: "main" }}
        className={"rounded-md h-full w-full"}
      />
      {album.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          style={{ gridArea: `side-${index + 1}` }}
          className="hidden md:block rounded-md w-full h-auto"
        />
      ))}
    </div>
  );
};

export default Album;
