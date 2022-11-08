import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Slider from "../Slider/Slider";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <h2 className="text-2xl lg:text-3xl bg-green-100 font-bold border border-gray-500 rounded-2xl text-center py-2 mx-3 lg:mx-20 mt-16 mb-6 shadow-xl">Available Photography Services</h2>
      <div className="lg:w-3/5 mx-auto grid lg:grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
