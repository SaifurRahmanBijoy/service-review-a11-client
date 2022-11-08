import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Slider from "../Slider/Slider";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
