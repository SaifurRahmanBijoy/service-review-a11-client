import React, { useEffect, useState } from "react";

const Review = ({ _id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        const filteredReview = data.filter((d) => d.service === _id);
        setReviews(filteredReview);
        console.log(data);
      });
  }, [_id]);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review._id} className="card flex items-center justify-center card-side bg-gray-100 my-2 shadow-xl">
          {review?.userImg ? (
            <img
              className="w-16 h-16 mx-5 rounded-full"
              src={review.userImg}
              alt=""
            />
          ) : (
            "👤"
          )}
          <div className="card-body">
            <h2 className="card-title text-lg mb-0">{review.user}</h2>
            <p className="text-md">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
