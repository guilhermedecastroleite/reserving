import clsx from "clsx";
import SearchProperty from "./SearchProperty";
import Filter from "./Filter";
import { FaStar } from "react-icons/fa";
import { Suspense } from "react";

const budgetOptions = [
  {
    value: "0, 200",
    name: "budget-0-200",
    label: "$ 0 - $ 200",
  },
  {
    value: "200, 500",
    name: "budget-200-500",
    label: "$ 200 - $ 500",
  },
  {
    value: "500, 1000",
    name: "budget-500-1000",
    label: "$ 500 - $ 1,000",
  },
  {
    value: "1000, 2000",
    name: "budget-1000-2000",
    label: "$ 1,000 - $ 2,000",
  },
  {
    value: "2000, 5000",
    name: "budget-2000-5000",
    label: "$ 2,000 - $ 5,000",
  },
];

const ratingOptions = [
  {
    value: "1",
    name: "rating-1",
    label: (
      <div className="flex items-center">
        <div className="mr-2">1</div>
        <FaStar className="text-star" />
      </div>
    ),
  },
  {
    value: "2",
    name: "rating-2",
    label: (
      <div className="flex items-center">
        <div className="mr-2">2</div>
        {[...Array(2)].map((_, index) => (
          <FaStar key={index} className="text-star" />
        ))}
      </div>
    ),
  },
  {
    value: "3",
    name: "rating-3",
    label: (
      <div className="flex items-center">
        <div className="mr-2">3</div>
        {[...Array(3)].map((_, index) => (
          <FaStar key={index} className="text-star" />
        ))}
      </div>
    ),
  },
  {
    value: "4",
    name: "rating-4",
    label: (
      <div className="flex items-center">
        <div className="mr-2">4</div>
        {[...Array(4)].map((_, index) => (
          <FaStar key={index} className="text-star" />
        ))}
      </div>
    ),
  },
  {
    value: "5",
    name: "rating-5",
    label: (
      <div className="flex items-center">
        <div className="mr-2">5</div>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-star" />
        ))}
      </div>
    ),
  },
];

const popularOptions = [
  {
    value: "free-cancelation",
    name: "popular-free-cancelation",
    label: "Free cancelation",
  },
  {
    value: "spa",
    name: "popular-spa",
    label: "Spa",
  },
  {
    value: "beach-front",
    name: "popular-beach-front",
    label: "Beach front",
  },
  {
    value: "hot-tub",
    name: "popular-hot-tub",
    label: "Hot tub/ jacuzzi",
  },
  {
    value: "book-without-card",
    name: "popular-book-without-card",
    label: "Book without credit card",
  },
  {
    value: "no-prepayment",
    name: "popular-no-prepayment",
    label: "No prepayment",
  },
];

const activitiesOptions = [
  {
    value: "fishing",
    name: "activities-fishing",
    label: "Free cancelation",
  },
  {
    value: "hiking",
    name: "activities-hiking",
    label: "Hiking",
  },
  {
    value: "beach",
    name: "activities-beach",
    label: "Beach",
  },
  {
    value: "cycling",
    name: "activities-cycling",
    label: "Cycling",
  },
  {
    value: "sauna",
    name: "activities-sauna",
    label: "Sauna",
  },
  {
    value: "nigth-lights",
    name: "activities-nigth-lights",
    label: "Night lights",
  },
];

interface SideFiltersProps {
  className: string;
}

const SideFilters = ({ className }: SideFiltersProps) => {
  return (
    <div className={clsx("flex flex-col gap-5 h-full", className)}>
      <Suspense>
        <SearchProperty />
      </Suspense>
      <div className="text-xl font-semibold text-grey-4 ml-4">Filter by</div>
      <Filter title="Your budget per day" options={budgetOptions} />
      <Filter title="Rating" options={ratingOptions} />
      <Filter title="Popular Filters" options={popularOptions} />
      <Filter title="Activities" options={activitiesOptions} />
    </div>
  );
};

export default SideFilters;
