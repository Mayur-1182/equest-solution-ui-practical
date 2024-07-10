import React from "react";
import "./Magazine.css";

export default function Magazine() {
  return (
    <section className="magazine-container py-20 px-16 flex flex-col gap-10 text-white font-caslon min-h-[500px]">
      <div className="flex justify-between items-center">
        <p>from the megazine</p>
        <button>View more</button>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sx ">may 10, 2022</p>
        <h2 className="md:max-w-[50%] font-caslon text-5xl md:text-6xl">
          Our high summer lookbook
        </h2>
        <button className="bg-white text-black py-2 px-4 rounded max-w-[20%] min-w-[8rem]">
          Read More
        </button>
      </div>
      <div className="flex flex-row gap-4 max-w-[70%] opacity-70">
        <p className="pt-1 border-t-2">Our high summer lookbook</p>
        <p className="pt-1 border-t-2">
          Overswim, light & breathable in the summer heat
        </p>
        <p className="pt-1 border-t-2">Fairy floss summer skies</p>
      </div>
    </section>
  );
}
