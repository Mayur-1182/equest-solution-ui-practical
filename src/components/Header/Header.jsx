import React from "react";
import "./Header.css";
import NavigationBar from "../Navigation/NavigationBar";

export default function Header() {
  return (
    <header className="header  w-full min-h-screen bg-cover bg-center">
      <NavigationBar />
      <main>
        <div className="w-full h-[25rem] flex justify-center items-center flex-col  text-white gap-7">
          <p>swimwear</p>
          <h1 className=" text-center font-bold text-white text-[2rem] sm:text-5xl">
            Maximum Impact
          </h1>
          <p className="text-center w-[70vw] md:[100%]">
            Shop our collection of glamorous swimsuits and mix-and-match
            bikinis.
          </p>
          <button className="bg-white text-black py-2 px-3 rounded-sm">
            Shop new arrivals
          </button>
        </div>
      </main>
    </header>
  );
}
