import type { ImageType } from "@/app/types";
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
    <div id="Poster">
      <div
        id="PosterText"
        className="grid md:hidden  top-0 left-0 place-content-center w-full h-full text-dark mb-8"
      >
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-xl mt-5">{subtitle}</p>
      </div>
      <div id="PosterInner" className="relative">
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="hidden sm:block w-full h-auto rounded-md"
        />
        <div
          id="Overlay"
          className="w-full h-full absolute top-0 left-0 bg-blend-multiply bg-gradient-to-b from-black/0 to-black/50 rounded-md"
        />
        <div
          id="PosterText"
          className="absolute hidden md:grid  top-0 left-0 place-content-center w-full h-full text-white text-center"
        >
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-xl w-4/5 m-auto mt-5">{subtitle}</p>
        </div>
        <SearchForm className="hidden lg:flex absolute bottom-[-7%] left-0 lg:left-[5%] xl:left-[10%] w-full lg:w-[90%]  xl:w-4/5" />
      </div>
      <SearchForm className="flex lg:hidden" />
    </div>
  );
};

export default Poster;
