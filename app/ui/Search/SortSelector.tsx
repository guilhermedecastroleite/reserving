"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

interface SortSelectorProps {
  className?: string;
}

const sortOptions = [
  {
    value: "recommended",
    name: "Recommended",
  },
  {
    value: "lowest-price",
    name: "Lowest Price First",
  },
  {
    value: "highest-price",
    name: "Highest Price First",
  },
];

const SortSelector = ({ className }: SortSelectorProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const selectedSort =
    new URLSearchParams(searchParams).get("sort") || sortOptions[1].value;

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("sort", selected);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <select
      value={selectedSort}
      onChange={handleClick}
      className={clsx("rounded-md border-grey-1 py-2.5 px-3", className)}
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
