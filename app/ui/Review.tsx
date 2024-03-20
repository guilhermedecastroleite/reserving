const Review = ({ className }) => {
  const rating = 4.5;
  const totalReviews = 1200;
  const reviewString = totalReviews > 1 ? "Reviews" : "Review";

  return (
    <div id="Review" className={`pt-3 ${className}`}>
      REPLACE WITH STARS {`${rating} (${totalReviews} ${reviewString})`}
    </div>
  );
};

export default Review;
