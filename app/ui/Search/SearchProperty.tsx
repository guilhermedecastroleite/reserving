"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";

import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchPropertyProps {
  className?: string;
}

const SearchProperty = ({ className }: SearchPropertyProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const initialValue =
    new URLSearchParams(searchParams).get("property") || undefined;

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("property", term);
    } else {
      params.delete("property");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div className={clsx("w-full rounded-md bg-grey-2 py-5 px-4", className)}>
      <p className="mb-4 font-medium text-sm text-text-medium">
        Search by property name
      </p>
      <div id="InputContainer" className={clsx("relative w-full", className)}>
        <input
          id="RoomSelect"
          className="rounded-md w-full h-full py-3 pr-3 pl-10 text-sm placeholder:text-text-light"
          placeholder="e.g. Beach west palm"
          value={initialValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <FaMagnifyingGlass className="mr-2 text-text-light absolute top-3.5 left-3 " />
      </div>
    </div>
  );
};

export default SearchProperty;
