import type { TypographyType } from "@/app/types";
import { PropsWithChildren } from "react";

const Detail = ({
  as: Component = "p",
  children,
  icon,
  className,
  iconClassName,
  ...rest
}: TypographyType) => {
  const Icon = icon;

  return (
    /* @ts-ignore-next-line */
    <Component
      id="Detail"
      className={`font-normal	text-sm text-text-light flex flex-row ${className}`}
      {...rest}
    >
      {icon && Icon && <Icon className={`h-4 mr-3 ${iconClassName}`} />}
      {children}
    </Component>
  );
};

export default Detail;
