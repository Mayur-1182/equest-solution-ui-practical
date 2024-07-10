import React from "react";
import "./BlackFridaySale.css";

const BlackFridaySale = () => {
  return (
    <div className="w-full h-[200vh] sm:h-[120vh]  gap-8 grid grid-cols-1 sm:grid-cols-2 p-20 bg-[#E8E4DF]">
      <div className="  relative p-8">
        <div className="absolute inset-0 bg-cover bg-center sale-img-right"></div>
        <div className="sale-description">
          <p className=" mb-2 z-99">New arrivals</p>
          <h2 className="text-2xl font-bold">Maximum Impact</h2>
        </div>
      </div>
      <div className=" relative p-8">
        <div className="absolute inset-0 bg-cover bg-center sale-img-left"></div>
        <div className="sale-description">
          <p className=" mb-2 z-99">New arrivals</p>
          <h2 className="text-2xl font-bold">Maximum Impact</h2>
        </div>
      </div>
    </div>
  );
};
export default BlackFridaySale;
