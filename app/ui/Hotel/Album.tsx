import Image from "next/image";

interface AlbumProps {
  className?: string;
}

const Album = ({ className }: AlbumProps) => {
  return (
    <div
      id="Album"
      className={`grid grid-areas-album md:grid-areas-album_mid lg:grid-areas-album_full gap-4 ${className}`}
    >
      <Image
        src="https://placehold.co/820x452/webp"
        width={0}
        height={0}
        sizes="100vw"
        alt="Main hotel picture"
        style={{ gridArea: "main", width: "100%", height: "auto" }}
      />
      <Image
        src="https://placehold.co/400x218/webp"
        width={0}
        height={0}
        sizes="100vw"
        alt="Main hotel picture"
        style={{ gridArea: "side-1", width: "100%", height: "auto" }}
        className="hidden md:block"
      />
      <Image
        src="https://placehold.co/400x218/webp"
        width={0}
        height={0}
        sizes="100vw"
        alt="Main hotel picture"
        style={{ gridArea: "side-2", width: "100%", height: "auto" }}
        className="hidden md:block"
      />
    </div>
  );
};

export default Album;
