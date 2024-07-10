import React from "react";
import "./EliteStory.css";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import eliteStory_img1 from "../../assets/images/elite_story_img1.png";
import eliteStory_img2 from "../../assets/images/friday_sale_img3.png";

export default function EliteStory() {
  return (
    <div className="elite-container max-w-[80%] m-auto border  grid grid-cols-1 gap-8 sm:grid-cols-2 py-8 sm:px-24 md:px-28">
      <div className="elite1 px-4 text-center">
        <img
          src={eliteStory_img1}
          alt="Elite Spliced Multifi One Piece"
          className="max-w-[90%]"
        />
        <p className="mt-8">Elite Spliced Multifit One Piece</p>
      </div>
      <div className="elite2 px-8 border  flex flex-col justify-start gap-20">
        <div className="flex flex-col justify-start items-left gap-4 ">
          <p className="elite-rating">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarOutline />
          </p>
          <h2>The Elite Story</h2>
          <p>
            Discover our Elite Spliced Multifit One Piece, featuring removable
            soft cups, adjustable & convertible straps, & our signature
            powermesh support front & back.
          </p>
          <button className=" border border-black rounded-md max-w-[60%] p-2">
            Shop Elite One Piece
          </button>
        </div>
        <div className="max-w-[70%] min-w-[14rem]">
          <img src={eliteStory_img2} alt="elite story image" />
        </div>
      </div>
    </div>
  );
}
