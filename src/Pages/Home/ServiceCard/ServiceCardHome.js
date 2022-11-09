import React from "react";
import { Link } from "react-router-dom";

const ServiceCardHome = ({ service }) => {
  const { _id, title, img, price, about } = service;
  return (
    <div className="card border border-slate-800 bg-gray-100 shadow-2xl m-4">
      <figure className="shadow-xl">
        <img className="w-full" src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-justified">
          {about.slice(0, 100)}...
          <span className="text-blue-800">See more</span>
        </p>
        <p className="text-orange-600">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`services/${_id}`} className="btn w-full">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardHome;
