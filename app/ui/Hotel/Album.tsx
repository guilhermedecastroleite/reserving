import Image from "next/image";

const Album = () => {
  return (
    <div id="Album" className="grid grid-areas-album gap-4">
      {/* <Image
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
      /> */}
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
      />
      <Image
        src="https://placehold.co/400x218/webp"
        width={0}
        height={0}
        sizes="100vw"
        alt="Main hotel picture"
        style={{ gridArea: "side-2", width: "100%", height: "auto" }}
      />
      {/* <div className="bg-rose-500 w-full h-full" style={{ gridArea: "main" }} />
      <div
        className="bg-teal-500 w-full h-full"
        style={{ gridArea: "side-1" }}
      />
      <div
        className="bg-purple-500 w-full h-full"
        style={{ gridArea: "side-2" }}
      /> */}
    </div>
  );
};

export default Album;
