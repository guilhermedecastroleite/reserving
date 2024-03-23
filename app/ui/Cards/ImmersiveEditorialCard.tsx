import Image from "next/image";
import { ImageType } from "../../types";
import clsx from "clsx";

interface ImmersiveEditorialCardProps {
  title: string;
  subtitle: string;
  image: ImageType;
  className?: string;
}

const ImmersiveEditorialCard = ({
  title,
  subtitle,
  image,
  className,
}: ImmersiveEditorialCardProps) => {
  const { src, alt, width, height } = image;

  return (
    <article className={clsx("relative w-full", className)}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes="100vw"
        style={{ width: "100%", height: "auto", borderRadius: ".5rem" }}
      />
      <div
        id="Overlay"
        className="w-full h-full absolute top-0 left-0 bg-blend-multiply bg-gradient-to-b from-black/0 to-black/50 rounded-md"
      />
      <div id="TextLayer" className="absolute bottom-0 left-0 text-white p-5">
        <h3 className="mt-4 font-semibold text-xl">{title}</h3>
        <p className="mt-1.5 text-sm line-clamp-2">{subtitle}</p>
      </div>
    </article>
  );
};

export default ImmersiveEditorialCard;
