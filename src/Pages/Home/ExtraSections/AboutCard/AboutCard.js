import React from "react";

const AboutCard = () => {
  return (
    <div className="w-4/5 lg:w-3/5 mx-auto my-20">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-slate-100">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              What was your experience like when you first got in touch with me?
              What made you choose me as your photographer? How was the planning
              process and communication leading up to your session? Was there
              anything I did that pleasantly surprised you? And, of course, how
              do you like your photos?
            </p>
            <button className="btn btn-primary">Drop down your opinion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
