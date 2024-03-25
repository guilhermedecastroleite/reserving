"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const categories = [
  {
    value: "top-picks",
    name: "Our top picks",
  },
  {
    value: "hotels-apartments",
    name: "Hotel and apartments",
  },
  {
    value: "residence",
    name: "Residence",
  },
  {
    value: "resort",
    name: "Resort",
  },
  {
    value: "shared-space",
    name: "Shared Space",
  },
];

interface CategoriesSelectorProps {
  className?: string;
}

const CategoriesSelector = ({ className }: CategoriesSelectorProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const selected = new URLSearchParams(searchParams).get("category");

  const handleClick = (selected: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", selected);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div
      className={clsx(
        "flex flex-row border border-blue-accent rounded-md w-fit",
        className
      )}
    >
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => handleClick(category.value)}
          className={clsx(
            "py-2.5 px-4 border-r border-blue-accent cursor-pointer last:border-r-0",
            {
              "bg-blue-accent-5% text-blue-accent": selected === category.value,
            },
            {
              "text-text-light": selected !== category.value,
            }
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesSelector;
