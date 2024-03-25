import clsx from "clsx";

interface TagProps {
  className?: string;
  children: React.ReactNode | string;
}

const Tag = ({ className, children }: TagProps) => {
  return (
    <div
      className={clsx(
        "text-xs text-white text-center w-fit h-fit rounded-md py-1 px-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
