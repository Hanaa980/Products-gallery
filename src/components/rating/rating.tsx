import "./rating.css";
export default function Rating({
  rating,
}: {
  rating: { rate: number; count: number };
}) {
  const ratePercentage = (rating.rate / 5) * 100;

  return (
    <>
      <div className="star-wrapper ">
        <div className="stars-outer">
          <div
            className="stars-inner"
            style={{ width: `${ratePercentage}%` }}
          ></div>
        </div>
        <p className="text-base ms-2 text-gray-700 dark:text-gray-200"> ({rating.count})</p>
      </div>
    </>
  );
}
