import type { PriceType } from "@/app/types";
import clsx from "clsx";
import Tag from "../Tag";

interface PriceProps {
  price: PriceType;
  className?: string;
}

const Price = ({ price, className }: PriceProps) => {
  const { discount, formatted, original_formatted } = price;

  return (
    <div className={clsx("flex flex-col justify-end gap-1.5", className)}>
      {discount && (
        <Tag className="bg-tag-green w-fit">{`${discount * 100}% off`}</Tag>
      )}
      <div className="text-sm font-light text-grey-4">1 room 2 days</div>
      <div className="flex flex-row items-center gap-2">
        <div className="text-tag-red text-sm font-semibold line-through">
          {original_formatted}
        </div>
        <div className="text-lg font-semibold text-grey-4">{formatted}</div>
      </div>
      <div className="text-sm font-light text-grey-4">
        Includes taxes and fees
      </div>
    </div>
  );
};

export default Price;
