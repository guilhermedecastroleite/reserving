import { TypographyType } from "@/app/types";
import { PropsWithChildren } from "react";
import IconLibrary from "./IconLibrary";

const Detail = ({
  as: Component = "p",
  children,
  icon,
  className,
  iconClassName,
  ...rest
}: PropsWithChildren<TypographyType>) => {
  const Icon = icon ? IconLibrary?.[icon] : null;

  return (
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
