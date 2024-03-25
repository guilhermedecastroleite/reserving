import type { TypographyType } from "@/app/types";
import { PropsWithChildren } from "react";

const Description = ({
  children,
  className,
  ...rest
}: PropsWithChildren<TypographyType>) => {
  return (
    <p
      id="Description"
      className={`font-normal	text-base text-text-light ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Description;
