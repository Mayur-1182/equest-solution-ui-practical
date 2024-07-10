import React from "react";
import "./FridaySale.css";
import Img1 from "../../assets/images/b_friday_sale_img1.png";
import Img2 from "../../assets/images/b_friday_sale_img2.png";
import Img3 from "../../assets/images/b_friday_sale_img3.png";
import Img4 from "../../assets/images/b_friday_sale_img4.png";

const SaleData = [
  {
    img: Img1,
    text: "Chamarel Cross Front Multifit Singlet Top",
    price: "£58.00",
  },
  {
    img: Img2,
    text: "Eco Essentials Square Neck Bra",
    price: "£58.00",
  },
  {
    img: Img3,
    text: "Amazing Lace High Waist Pant With Ladder Lace",
    price: "£50.00",
  },
  {
    img: Img4,
    text: "Eco Essentials Frill One Piece",
    price: "£74.00",
  },
];

export default function FridaySale() {
  return (
    <div className="w-full  h-screen bg-white my-4 px-16 md:px-20 friday-sale">
      <div className="w-full flex flex-row justify-between items-center friday-sale-head">
        <h2 className="collections-heading text-left font-caslon text-[1.5rem]">
          Black Friday Sale
        </h2>
        <button>View All</button>
      </div>
      <div className="w-full h-[90%] overflow-x-auto overflow-y-hidden whitespace-nowrap pb-10 bg-white  custom-scrollbar border  sale-scrollbar-banner">
        {SaleData.map((image, index) => (
          <div
            key={index}
            className="inline-block mr-4 h-[90%] sale-image-wrapper "
          >
            <img
              src={image.img}
              alt={`Image ${index + 1}`}
              className="h-full"
            />
            <p className="mt-4 text-center max-w-[80%]">{image.text}</p>
            <p>{image.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
