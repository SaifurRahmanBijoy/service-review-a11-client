import { Link, useLoaderData } from "react-router-dom";
import AboutCard from "../ExtraSections/AboutCard/AboutCard";
import PhotoGrid from "../ExtraSections/PhotoGrid/PhotoGrid";
import ServiceCard from "../ServiceCard/ServiceCard";
import Slider from "../Slider/Slider";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      {/* Service section */}
      <div>
        <h2 className="text-xl lg:text-3xl bg-green-100 uppercase font-bold border border-gray-500 rounded-2xl text-center py-2 mx-3 lg:mx-20 mt-16 mb-6 shadow-xl">
          Some of my Available Photography Services
        </h2>
        <div className="lg:w-4/5 mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="w-2/3 lg:w-2/5 mx-auto">
          <Link to="/services" className="btn btn-secondary text-white w-full">
            See all
          </Link>
        </div>
      </div>
      {/* Extra sections */}
      <PhotoGrid></PhotoGrid>
      <AboutCard></AboutCard>
    </div>
  );
};

export default Home;
