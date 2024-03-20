import Image from "next/image";

const Album = () => {
  return (
    <div id="Album" className="grid grid-areas-album gap-4">
      <Image
        src="https://placehold.co/820x452/webp"
        width={820}
        height={452}
        alt="Main hotel picture"
        style={{ gridArea: "main" }}
      />
      <Image
        src="https://placehold.co/400x218/webp"
        width={400}
        height={218}
        alt="Main hotel picture"
        style={{ gridArea: "side-1" }}
      />
      <Image
        src="https://placehold.co/400x218/webp"
        width={400}
        height={218}
        alt="Main hotel picture"
        style={{ gridArea: "side-2" }}
      />
    </div>
  );
};

export default Album;
