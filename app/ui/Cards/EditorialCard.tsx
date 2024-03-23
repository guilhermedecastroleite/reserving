import Image from "next/image";
import { ImageType } from "../../types";
import clsx from "clsx";

interface EditorialCardProps {
  title: string;
  subtitle: string;
  image: ImageType;
  className: string;
}

const EditorialCard = ({
  title,
  subtitle,
  image,
  className,
}: EditorialCardProps) => {
  const { src, alt, width, height } = image;

  return (
    <article className={clsx(className)}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes="100vw"
        style={{ width: "100%", height: "auto", borderRadius: ".5rem" }}
      />
      <h3 className="mt-4 font-semibold text-xl">{title}</h3>
      <p className="mt-1.5 text-sm">{subtitle}</p>
    </article>
  );
};

export default EditorialCard;
