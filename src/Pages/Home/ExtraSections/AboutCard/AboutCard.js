import React from "react";

const AboutCard = () => {
  return (
    <div className="p-10 border border-blue-500 w-full lg:w-3/5 text-justify mx-auto my-20">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg?crop=4:3")` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-justified text-slate-100">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">How have you been?</h1>
            <p className="mb-5">
              What was your experience like when you first got in touch with me?
              <br />
              What made you choose me as your photographer? <br /> How was the
              planning process and communication leading up to your session?{" "}
              <br /> Was there anything I did that pleasantly surprised you?{" "}
              <br /> And, of course, how do you like your photos?
            </p>
            <button className="btn btn-primary">Drop down your opinion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
