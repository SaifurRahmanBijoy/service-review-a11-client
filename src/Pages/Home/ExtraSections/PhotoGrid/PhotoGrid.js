import React from "react";

const PhotoGrid = () => {
  return (
    <div className="mb-10">
      <h2 className="text-xl lg:text-3xl bg-orange-200 uppercase font-bold border border-gray-500 rounded-2xl text-center py-2 mx-3 lg:mx-20 mt-16 mb-6 shadow-xl">
        Some of my best works
      </h2>
      <div className="w-2/3 grid lg:grid-cols-2 gap-2 mx-auto">
        <div className="w-full rounded">
          <img
            src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/62020/soura-nath319387819.jpeg"
            alt=""
            className="rounded-xl border p-1 border-slate-700"
          />
        </div>
        <div className="w-full rounded">
          <img
            src="https://images.squarespace-cdn.com/content/v1/4f5616e3e4b02ee84fb6f99b/1611776271347-KHE7E2SHRD4HTW16BSLP/Charleston+Bride+and+Groom+Portrait?format=1000w"
            alt=""
            className="rounded-xl border p-1 border-slate-700"
          />
        </div>
        <div className="w-full rounded">
          <img
            src="https://photutorial.com/wp-content/uploads/2022/01/Gallery.jpg"
            alt=""
            className="rounded-xl border p-1 border-slate-700"
          />
        </div>
        <div className="w-full rounded">
          <img
            src="https://envywigs.com/wp-content/uploads/2021/08/0821-Envy-Blog-Header-Active-Lifestyle-Wig-Tips-01-450x450-1.jpeg"
            alt=""
            className="rounded-xl w-full border p-1 border-slate-700"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
