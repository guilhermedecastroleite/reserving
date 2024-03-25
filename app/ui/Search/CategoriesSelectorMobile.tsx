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

interface CategoriesSelectorMobileProps {
  className?: string;
}

const CategoriesSelectorMobile = ({
  className,
}: CategoriesSelectorMobileProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const selected =
    new URLSearchParams(searchParams).get("category") || categories[1].value;

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("category", selected);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <select
      value={selected}
      onChange={handleClick}
      className={clsx("rounded-md border-grey-1 py-2.5 px-3", className)}
    >
      {categories.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CategoriesSelectorMobile;
