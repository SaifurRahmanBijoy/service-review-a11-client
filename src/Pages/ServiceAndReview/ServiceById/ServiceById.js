import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Review from "../Review/Review";

const ServiceById = () => {
  useTitle('Service & Review')
  const { user } = useContext(AuthContext);
  const { _id, img, title, price, about } = useLoaderData();
  //   ->

  //   -->
  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const review = form.review.value;
    const email = user?.email || "unregistered";
    const userImg = user?.photoURL || "👤";
    console.log(review);

    const revDetails = {
      service: _id,
      serviceName: title,
      user: name,
      userImg: userImg,
      email,
      review: review,
    };
    fetch(
      "https://a11-service-review-server-saifurrahmanbijoy.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(revDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Your review has been placed!");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  //   --<
  return (
    <div>
      <div className="mx-2 mb-20">
        <h2 className="text-2xl lg:text-5xl text-gray-400 text-center my-5 font-extrabold uppercase">
          {title}
        </h2>
        <img
          className="shadow-xl lg:w-2/5 mx-auto rounded-lg p-1 border border-orange-200"
          src={img}
          alt=""
        />
        <p className="shadow-xl my-2 lg:w-3/5 mx-auto text-justify border p-4 lg:p-10 border-slate-500 text-xl bg-slate-100">
          <span className="text-xl font-bold uppercase text-orange-500">
            Price for this service: ${price}
          </span>
          <br />
          <br />
          {about}
        </p>
      </div>
      {/* Reviews and submission */}
      <div>
        {/* ---> */}
        <h2 className="text-xl lg:text-3xl text-orange-400 text-center my-5 font-extrabold uppercase">
          Reviews about this service:
        </h2>
        <div className="w-4/5 lg:w-3/5 mx-auto mb-20">
          <Review _id={_id}></Review>
        </div>
        {/* ----< */}

        {user ? (
          <div className="w-4/5 lg:w-3/5 mx-auto mb-20">
            <form onSubmit={handlePlaceReview}>
              <h2 className="text-2xl text-slate-500 font-bold text-center my-5 uppercase">
                Please drop a review about this service of mine
              </h2>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
              <input
                name="email"
                type="text"
                placeholder="Your Email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                readOnly
              />

              <textarea
                name="review"
                type="text"
                placeholder="Your Review"
                className="input input-bordered w-full"
                required
              ></textarea>
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        ) : (
          <h2 className="text-2xl text-center my-10">
            Please{" "}
            <Link className="btn-ghost text-blue-500" to="/login">
              login
            </Link>{" "}
            to provide a review.
          </h2>
        )}
      </div>
    </div>
  );
};

export default ServiceById;
