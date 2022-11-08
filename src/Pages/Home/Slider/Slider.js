import React from "react";
import "./Slider.css";

const Slider = () => {
  const sliderText = (
    <>
      <h2 className="text-slate-200 p-10 md:p-20 text-xs lg:text-4xl font-thin font-mono">
        <span className="font-extrabold text-sm lg:text-5xl">
          As a photographer,
        </span>good feedback motivates me to go out of the way for my clients.
      </h2>
    </>
  );
  return (
    <div className="carousel lg:w-4/5 lg:mx-auto m-3 lg:m-8 rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="gradient">
          <img
            src="https://i.ibb.co/pxMw6c2/20221108-230608.jpg"
            className="w-full"
            alt=""
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 text-center top-1/2">
          {sliderText}
        </div>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle text-white btn-outline">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle text-white btn-outline">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="gradient">
          <img
            src="https://i.ibb.co/nfDcpqD/20221108-230753.jpg"
            className="w-full"
            alt=""
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 text-center top-1/2">
          {sliderText}
        </div>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle text-white btn-outline">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle text-white btn-outline">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="gradient">
          <img
            src="https://i.ibb.co/72gSQdc/20221108-230825.jpg"
            className="w-full"
            alt=""
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 text-center top-1/2">
          {sliderText}
        </div>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle text-white  btn-outline">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle text-white btn-outline">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="gradient">
          <img
            src="https://i.ibb.co/r4CtNSb/20221108-230903.jpg"
            className="w-full"
            alt=""
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 text-center top-1/2">
          {sliderText}
        </div>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle text-white btn-outline">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle text-white btn-outline">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
