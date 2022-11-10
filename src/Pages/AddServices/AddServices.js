import React from "react";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle("Add Services");
  //   -->
  const handlePlaceService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const about = form.about.value;

    const newService = {
      title: title,
      img: img,
      price: price,
      about: about,
    };
    fetch(
      "https://a11-service-review-server-saifurrahmanbijoy.vercel.app/services",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Your service has been placed!");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  //   --<
  return (
    <div className="w-4/5 lg:w-3/5 mx-auto mb-20">
      <form onSubmit={handlePlaceService}>
        <h2 className="text-2xl text-slate-500 font-bold text-center my-5 uppercase">
          Please insert all info to add the service
        </h2>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full my-1"
          required
        />
        <input
          name="img"
          type="text"
          placeholder="Image link"
          className="input input-bordered w-full my-1"
          required
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          className="input input-bordered w-full my-1"
          required
        />

        <textarea
          name="about"
          type="text"
          placeholder="Description"
          className="input input-bordered w-full my-1"
          required
        ></textarea>
        <input
          className="btn btn-primary w-full  my-1"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddServices;
