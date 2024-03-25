import type { TypographyType } from "@/app/types";
import { PropsWithChildren } from "react";

const SectionTitle = ({
  children,
  className,
  ...rest
}: PropsWithChildren<TypographyType>) => {
  return (
    <h3
      id="SectionTitle"
      className={`text-lg font-medium	text-text-dark ${className}`}
      {...rest}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
