import React from "react";
import "./Product.css";

const Product = ({ imageSrc, productName, productDescription }) => {
  return (
    <div className="product border text-2xl text-center">
      <img src={imageSrc} alt={productName} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{productName}</h2>
        <p className="text-sm text-gray-700">{productDescription}</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Product;
