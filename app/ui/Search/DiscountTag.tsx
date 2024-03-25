import clsx from "clsx";
import Tag from "../Tag";

const discountOptions = {
  "book-now": {
    text: "Book now and receive 15% off",
    color: "tag-red",
  },
  restaurant: {
    text: "Book now and receive 15% off",
    color: "tag-yellow",
  },
};

interface DiscountTagProps {
  discount: keyof typeof discountOptions;
  className?: string;
}

const DiscountTag = ({ discount, className }: DiscountTagProps) => {
  const selectedDiscount = discountOptions?.[discount];

  if (!selectedDiscount) {
    return null;
  }

  return (
    <Tag className={clsx(`bg-${selectedDiscount?.color}`, className)}>
      {selectedDiscount?.text}
    </Tag>
  );
};

export default DiscountTag;
