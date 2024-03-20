import { TypographyType } from "@/app/types";
import { PropsWithChildren } from "react";

const Title = ({
  children,
  className,
  ...rest
}: PropsWithChildren<TypographyType>) => {
  return (
    <h1
      id="Title"
      className={`font-semibold	text-3xl text-text-dark ${className}`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default Title;
