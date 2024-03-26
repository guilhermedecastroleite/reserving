"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

interface Option {
  value: string;
  name: string;
  label: string | React.ReactNode;
}

interface FilterProps {
  title: string;
  type: string;
  options: Option[];
  className?: string;
}

const Filter = ({ title, type, options, className }: FilterProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const selected = new URLSearchParams(searchParams).get(type);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    const params = new URLSearchParams(searchParams);
    if (selected === selectedValue) {
      params.delete(type);
    } else {
      params.set(type, selectedValue);
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div
      className={clsx(
        "rounded-md overflow-hidden border boder-grey-1",
        className
      )}
    >
      <div
        id="FilterHeader"
        className="p-4 bg-grey-2 font-medium border-b boder-grey-1"
      >
        {title}
      </div>
      <div id="FilterOptions" className="p-4 flex flex-col gap-3">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="checkbox"
              value={option.value}
              checked={selected === option.value}
              onChange={handleChange}
              name={option.name}
              className="rounded-md cursor-pointer w-5 h-5 focus:ring-2 focus:ring-blue-accent text-blue-accent"
            />
            <label htmlFor={option.value} className="ml-2 text-sm text-grey-4">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
