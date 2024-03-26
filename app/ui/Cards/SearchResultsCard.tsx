import clsx from "clsx";
import Image from "next/image";
import Review from "../Review";
import Description from "../Typography/Description";
import Button from "../Button";
import DiscountTag from "../Search/DiscountTag";
import Price from "../Search/Price";
import Link from "next/link";

interface SearchResultsCard {
  data: any;
  className?: string;
}

const SearchResultsCard = ({ data, className }: SearchResultsCard) => {
  const { hotel_id, name, description, rating, promotion, price, cover } = data;

  return (
    <Link
      href={`/hotel/${hotel_id}`}
      className={clsx(
        "p-5 border border-grey-1 rounded-md flex flex-row flex-wrap md:flex-nowrap gap-6 cursor-pointer",
        className
      )}
    >
      <div className="relative w-full pt-[50%] md:pt-0 md:min-w-72">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="rounded-md object-cover w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div
          id="HotelInformation"
          className="flex flex-col justify-between col-span-3"
        >
          <h2 className="text-xl font-semibold text-text-dark">{name}</h2>
          <Review
            className="mt-2"
            rating={rating.rating}
            amountReviews={rating.amount_reviews}
          />
          <Description className="mt-4 text-xs line-clamp-3">
            {description}
          </Description>
          <Button type="button" className="mt-4 w-fit hidden sm:block">
            See availability
          </Button>
        </div>
        <div
          id="HotelValues"
          className="col-span-1 sm:col-span-2 mt-4 sm:mt-0 flex flex-col-reverse justify-between sm:items-end"
        >
          <Price
            price={price}
            className="mt-3 sm:mt-0 items-start sm:items-end"
          />
          {promotion && <DiscountTag discount={promotion} />}
        </div>
      </div>
      <Button type="button" className="mt-3 w-full sm:hidden">
        See availability
      </Button>
    </Link>
  );
};

export default SearchResultsCard;
