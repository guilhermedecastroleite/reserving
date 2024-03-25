import clsx from "clsx";
import { FaStar, FaStarHalf } from "react-icons/fa";

interface ReviewProps {
  rating: number;
  amountReviews: number;
  className?: string;
}

const Review = ({ rating, amountReviews, className }: ReviewProps) => {
  const reviewString = amountReviews > 1 ? "Reviews" : "Review";

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [...Array(fullStars)].map((_, index) => (
    <FaStar key={index} className="text-star" />
  ));

  const halfStar = hasHalfStar && <FaStarHalf className="text-star" />;

  return (
    <div id="Review" className={clsx("flex flex-row items-center", className)}>
      {stars} {halfStar}
      {`${rating} (${amountReviews} ${reviewString})`}
    </div>
  );
};

export default Review;
