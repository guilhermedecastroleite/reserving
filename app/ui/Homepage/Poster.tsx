import type { ImageType } from "@/app/types";
import Image from "next/image";
import SearchForm, { SearchFormSkeleton } from "./SearchForm";
import clsx from "clsx";
import { Suspense } from "react";

interface PosterProps {
  title: string;
  subtitle: string;
  image: ImageType;
  className?: string;
}

const Poster = ({ title, subtitle, image, className }: PosterProps) => {
  const { src, alt } = image;
  return (
    <div id="Poster" className={clsx(className)}>
      <div
        id="PosterText"
        className="grid md:hidden  top-0 left-0 place-content-center w-full h-full text-dark mb-8"
      >
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-xl mt-5">{subtitle}</p>
      </div>
      <div id="PosterInner" className="relative">
        <Image
          priority
          src={src}
          alt={alt}
          width={1280}
          height={500}
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
        <Suspense
          fallback={
            <SearchFormSkeleton className="hidden lg:flex absolute bottom-[-7%] left-0 lg:left-[5%] xl:left-[10%] w-full lg:w-[90%]  xl:w-4/5" />
          }
        >
          <SearchForm className="hidden lg:flex absolute bottom-[-7%] left-0 lg:left-[5%] xl:left-[10%] w-full lg:w-[90%]  xl:w-4/5" />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <SearchForm className="flex lg:hidden" />
      </Suspense>
    </div>
  );
};

export default Poster;
