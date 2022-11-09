import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ServiceById = () => {
  const { user } = useContext(AuthContext);
  const { _id, img, title, price, about } = useLoaderData();
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
          <div className="card flex items-center justify-center card-side bg-gray-100 shadow-xl">
            <img
              className="w-16 h-16 mx-5 rounded-full"
              src="https://placeimg.com/200/280/arch"
              alt=""
            />
            <div className="card-body">
              <h2 className="card-title text-lg mb-0">Saifur Rahman</h2>
              <p className="text-md">
                Click the button to watch on Jetflix app.
              </p>
            </div>
          </div>
        </div>
        {/* ----< */}

        {user ? (
          <div className="w-4/5 lg:w-3/5 mx-auto mb-20">
            <form>
              <h2 className="text-2xl text-slate-500 font-bold text-center my-5 uppercase">
                Please drop a review about this service of mine
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-3">
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
                  // defaultValue={user?.email}
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full "
                placeholder="Your Message"
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
            Please <Link className="btn-ghost text-blue-500" to="/login">login</Link> to provide a review.
          </h2>
        )}
      </div>
    </div>
  );
};

export default ServiceById;
