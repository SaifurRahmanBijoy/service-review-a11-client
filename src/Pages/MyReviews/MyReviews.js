import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      "https://a11-service-review-server-saifurrahmanbijoy.vercel.app/reviews"
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredReview = data.filter((d) => d.email === user?.email);
        setReviews(filteredReview);
        console.log(filteredReview);
      });
  }, [user]);
  //
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure about this?");
    if (proceed) {
      fetch(
        `https://a11-service-review-server-saifurrahmanbijoy.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("review deleted.");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  if (loading) {
    return <h2 className="animate-spin text-6xl text-center my-10">߷</h2>;
  }
  return (
    <div>
      {reviews ? (
        reviews.map((r) => (
          <div
            key={r._id}
            className="w-4/5 lg:1/5 bg-slate-200 p-5 lg:p-10 m-2 my-7 shadow-xl mx-auto"
          >
            <h2 className="text-2xl">Service: {r.serviceName}</h2>
            <p className="text-slate-500 text-xl font-serif py-2">
              Your opinion about this service: <br /> {r.review}
            </p>
            <p className="text-orange-400 text-xl">I thank you,{r.user}</p>
            <p className="text-blue-400 text-sm">Your Email: {r.email}</p>
            <div className="py-3">
              <Link className="btn mr-4 py-0 ">Update</Link>
              <button
                className="btn btn-error"
                onClick={() => handleDelete(r._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <>
          <h2 className="text-3xl text-center text-orange-500">
            No reviews were added by you,dear!
          </h2>
        </>
      )}
    </div>
  );
};

export default MyReviews;
