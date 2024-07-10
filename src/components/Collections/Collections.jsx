import React from "react";
import "./Collections.css";
import moreImg1 from "../../assets/images/collection_img1.png";
import moreImg2 from "../../assets/images/collections_img2.png";
import moreImg3 from "../../assets/images/collections_img3.png";
import moreImg4 from "../../assets/images/friday_sale_img1.png";

const Collections = () => {
  const images = [
    { src: moreImg1, text: "Black Friday" },
    { src: moreImg2, text: "Our Collections" },
    { src: moreImg3, text: "Multi-fit" },
    { src: moreImg4, text: "Black-Friday" },
  ];

  return (
    <div className="w-full h-screen  flex justify-center items-center flex-col bg-white">
      <h2 className="collections-heading text-left font-caslon">
        Our Collections
      </h2>
      <div className="w-3/4 h-3/4 overflow-x-auto overflow-y-hidden whitespace-nowrap pb-5 bg-white  custom-scrollbar ">
        {images.map((image, index) => (
          <div key={index} className="inline-block mr-4 h-full image-wrapper">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="h-full"
            />
            <div className="overlay">
              <span className="text-center font-caslon">{image.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
