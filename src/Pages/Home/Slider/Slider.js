import React from "react";
import "./Slider.css";

const Slider = () => {
  const sliderText = <>
  <h2 className="text-slate-200 md:p-20 text-sm lg:text-4xl font-semibold font-mono">As a photographer, good feedback motivates you to go out of the way for your clients.</h2>
  </>;
  return (
    <div className="carousel w-3/4 mx-auto my-6 rounded-xl">
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
