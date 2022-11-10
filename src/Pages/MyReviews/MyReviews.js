import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        const filteredReview = data.filter((d) => d.email === user?.email);
        setReviews(filteredReview);
        console.log(filteredReview);
      });
  }, [user]);
  return (
    <div>
      {reviews.map((r) => (
        <div key={r._id} className="w-4/5 lg:1/5 bg-slate-200 p-5 lg:p-10 m-2 my-7 shadow-xl mx-auto">
          <h2 className="text-2xl">Service: {r.serviceName}</h2>
          <p className="text-slate-500 text-xl font-serif py-2">Your opinion about this service: <br /> {r.review}</p>
          <p className="text-orange-400 text-xl">I thank you,{r.user}</p>
          <p className="text-blue-400 text-sm">Your Email: {r.email}</p>
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
