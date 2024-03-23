import { ImageType } from "@/app/types";
import Image from "next/image";
import SearchForm from "./SearchForm";

interface PosterProps {
  title: string;
  subtitle: string;
  image: ImageType;
}

const Poster = ({ title, subtitle, image }: PosterProps) => {
  const { src, alt } = image;
  return (
    <div id="Poster" className="relative">
      <Image
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        alt={alt}
        style={{ width: "100%", height: "auto", borderRadius: ".625rem" }}
      />
      <div
        id="Overlay"
        className="w-full h-full absolute top-0 left-0 bg-blend-multiply bg-gradient-to-b from-black/0 to-black/50 rounded-md"
      />
      <div
        id="PosterText"
        className="absolute top-0 left-0 grid place-content-center w-full h-full text-white text-center"
      >
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-xl w-4/5 m-auto mt-5">{subtitle}</p>
      </div>
      <SearchForm className="absolute" />
    </div>
  );
};

export default Poster;