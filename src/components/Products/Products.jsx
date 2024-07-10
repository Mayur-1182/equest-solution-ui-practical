import React from "react";
import moreImg1 from "../../assets/images/more_img1.png";
import moreImg2 from "../../assets/images/more_img2.png";
import moreImg3 from "../../assets/images/more_img3.png";
import Product from "./Product";

const productData = [
  {
    img: moreImg1,
    name: "Tango with me",
    description:
      "Discover the alluring new tropical tango print, inspired by palm trees, beach escapes, & lush tropical settings",
  },
  {
    img: moreImg2,
    name: "Tango High Waist Gathered Side Pant",
    description:
      "If there’s one theme that inspires us the most it’s palm trees, beach escapes and lush tropical settings.",
  },
  {
    img: moreImg3,
    name: "Cross Front Multifit Bra Top",
    description:
      "Featuring a luxe V neckline, thick & supportive shoulder straps, & hidden soft cups, this shape offers the perfect amount of lift & support.",
  },
];

export default function Products() {
  return (
    <div className=" border  w-full  mx-auto flex flex-col text-center bg-[#E8E4DF] gap-7 py-16 px-14 sm:py-24 sm:px-20 font-caslon ">
      <div className="text-xl">
        <h2 className="font-caslon text-2xl md:text-3xl">
          More for you. Tango with us.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-8 ">
        {productData.map((product) => (
          <Product
            key={product.name}
            imageSrc={product.img}
            productName={product.name}
            productDescription={product.description}
          />
        ))}
      </div>
    </div>
  );
}
