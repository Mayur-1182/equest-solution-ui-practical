import React from "react";
import "./Shimmer.css";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import shimmer_img1 from "../../assets/images/shimmer_img1.png";
import shimmer_img2 from "../../assets/images/shimmer_img2.png";

export default function Shimmer() {
  return (
    <div className="shimmer-container max-w-[80%] mx-auto border  grid grid-cols-1 gap-8 sm:grid-cols-2 py-8 sm:px-24 md:px-28">
      <div className="shimmer2    flex flex-col justify-start gap-4">
        <div className="flex flex-col justify-start items-left gap-4  py-12 ">
          <p className="shimmer-rating">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarOutline />
          </p>
          <h2 className="text-xl sm:text-2xl">The Elite Story</h2>
          <p className="max-w-[90%]">
            Discover our Elite Spliced Multifit One Piece, featuring removable
            soft cups, adjustable & convertible straps, & our signature
            powermesh support front & back.
          </p>
          <button className=" border border-black rounded-md max-w-[60%] p-2">
            Shop Elite One Piece
          </button>
        </div>

        <div className=" flex flex-row justify-between gap-32">
          <div></div>
          <div className="text-center flex flex-col items-center">
            <img
              src={shimmer_img1}
              alt="elite story image"
              className=" max-w-[90%] min-w-[14rem] "
            />
            <p className="text-center">Lola Shimmer Tank Style One Piece</p>
          </div>
        </div>
      </div>

      <div className="shimmer1 px-4 flex flex-col items-center">
        <img
          src={shimmer_img2}
          alt="Elite Spliced Multifi One Piece"
          className="max-w-[100%]"
        />
        <p className="mt-8">Elite Spliced Multifit One Piece</p>
      </div>
    </div>
  );
}
