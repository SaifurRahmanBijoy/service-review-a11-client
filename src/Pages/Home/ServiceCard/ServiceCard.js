import React from "react";

const ServiceCard = (service) => {
  const { title, img, price, about } = service;
  return (
    <div className="mx-auto my-8 w-4/5 text-black">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{about}</p>
          <p className="text-orange-600">{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
