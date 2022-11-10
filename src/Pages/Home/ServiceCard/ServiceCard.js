import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, about } = service;
  // console.log(service);
  return (
    <div className="card border border-slate-800 bg-gray-100 shadow-2xl m-4">
      <figure className="shadow-xl">
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="w-full" src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-justified">
          {about.slice(0, 100)}...
          <span className="text-blue-800">See more</span>
        </p>
        <p className="text-orange-600">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/services/${_id}`} className="btn w-full">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
