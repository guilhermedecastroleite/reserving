import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "py-3 px-5 bg-blue-accent text-white rounded-md",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
