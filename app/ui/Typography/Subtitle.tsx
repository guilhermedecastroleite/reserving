import { TypographyType } from "@/app/types";
import { PropsWithChildren } from "react";

const Subtitle = ({
  children,
  className,
  ...rest
}: PropsWithChildren<TypographyType>) => {
  return (
    <h2
      id="Subtitle"
      className={`font-semibold	text-2xl text-text-medium ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
