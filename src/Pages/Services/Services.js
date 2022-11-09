import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl bg-green-100 font-bold border border-gray-500 rounded-2xl text-center py-2 mx-3 lg:mx-20 mt-16 mb-6 shadow-xl">
        All Available Photography Services
      </h2>
      <div className="lg:w-3/5 mx-auto mb-10 grid grid-cols-1 lg:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
