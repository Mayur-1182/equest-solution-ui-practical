import React from "react";
import "./Signature.css";
import signImg from "../../assets/images/sign_img.png";

export default function Signature() {
  return (
    <section
      className="sign w-full bg-white flex flex-col gap-[22px] justify-end items-center  border 
    text-center py-12 px-8 sm:py-24 sm:px-12 "
    >
      <img
        src={signImg}
        alt="signature image"
        className="max-w-[40%] min-w-[5rem] sm:min-w-[8rem]"
      />
      <p className=" text-xs  md:text-[1rem] font-avenir">
        DESIGNED BY WOMEN FOR WOMEN
      </p>
      <h4 className="max-w-[70%] text-xl md:text-3xl">
        “The essence of the Australian beach lifestyle through relaxed escapism,
        a celebration of form and function, confidence and sustainable ideas.”
      </h4>
    </section>
  );
}
