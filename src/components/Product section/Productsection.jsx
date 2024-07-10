import React from "react";
import "./ProductSection.css";
import mainImg1 from "../../assets/images/product_sec_img1.png";
import mainImg2 from "../../assets/images/product_sec_img2.png";
import colorImg1 from "../../assets/images/product_sec_img1.png";
import colorImg2 from "../../assets/images/product_sec_img3.png";
import colorImg3 from "../../assets/images/product_sec_img4.png";
import colorImg4 from "../../assets/images/product_sec_img5.png";

export default function ProductSection() {
  return (
    <div className="border  container mx-auto px-4 py-8 font-caslon">
      <div className="border  grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:p-8">
        <div className=" col-span-2 grid grid-cols-2">
          <div className="col-span-1 flex justify-center">
            <img
              src={mainImg1}
              alt="Product Image 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img
              src={mainImg2}
              alt="Product Image 2"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className=" col-span-1 flex flex-col items-start justify-between gap-4 p-2">
          <div>
            <p className="text-[#9C9B9B]">Sea Level Swim</p>
            <h2 className="text-2xl font-semibold mb-2">
              Messina Panel Line Multi fit One Piece
            </h2>
            <p className="text-xl font-bold mb-2">£107.00</p>
            <div className="flex mb-4">
              <p className="text-gray-600 mr-2">★★★★★</p>
              <p className="text-gray-600">(1 review)</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Color: Vermont</p>
            <div className="flex space-x-2">
              <img
                src={colorImg1}
                alt="Color Option 1"
                className="w-16 h-24 object-cover border border-blue-500"
              />
              <img
                src={colorImg2}
                alt="Color Option 2"
                className="w-16 h-24 object-cover border"
              />
              <img
                src={colorImg3}
                alt="Color Option 3"
                className="w-16 h-24 object-cover border"
              />
              <img
                src={colorImg4}
                alt="Color Option 4"
                className="w-16 h-24 object-cover border"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 mb-2 font-bold">Size</p>
            <div className="product-sizes flex space-x-2">
              <button>4</button>
              <button>6</button>
              <button>8</button>
              <button>10</button>
              <button>12</button>
            </div>
          </div>
          <div className="flex items-center gap-4  mb-4">
            <div className="flex items-center gap-1">
              <button className="border py-2 px-4">-</button>
              <p className="border py-2 px-4">1</p>
              <button className="border py-2 px-4">+</button>
            </div>
            <button className="bg-black text-white py-2 px-4 rounded max-w-[100%]">
              Add to Cart
            </button>
          </div>
          <p className="mt-4 text-[#9C9B9B]">View product details</p>
        </div>
      </div>
    </div>
  );
}
