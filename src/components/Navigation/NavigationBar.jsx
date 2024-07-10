import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdCloseFullscreen } from "react-icons/md";
import { PiCaretRight } from "react-icons/pi";
import { PiTote } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

export default function NavigationBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-[#00000050] p-2  text-white  ">
      <nav className="max-w-[1200px] flex justify-between mx-auto  items-center px-1 my-4 ">
        <div className="text-3xl font-bold font-mono text-white">HOLA</div>

        {!toggle && (
          <FaBarsStaggered
            className="text-2xl md:hidden block"
            onClick={() => setToggle(!toggle)}
          />
        )}
        {toggle && (
          <MdCloseFullscreen
            className="text-2xl hidden:md block fixed z-20 left-8 text-black"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <ul className="hidden md:flex justify-center items-center gap-5  ">
          <li>
            <a href="/">New Arrivals</a>
          </li>
          <li>
            <a href="/">Swimwear</a>
          </li>
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Demos</a>
          </li>
        </ul>

        <ul className="hidden md:flex justify-center items-center gap-5  ">
          <li>
            <a href="/">Accounts</a>
          </li>
          <li>
            <CiSearch />
          </li>
          <li>
            <PiTote />
          </li>
        </ul>

        {/* responsive */}
        <ul
          className={` md:hidden block gap-5 fixed bg-white text-black   top-[0px] w-full z-10 h-screen  ${
            !toggle ? "left-[100%]  " : "left-0 "
          } transition-all duration-300 ease-in-out p-12 `}
        >
          <li className=" flex justify-start items-center gap-8 text-2xl mt-8">
            <li>
              <a href="/">HOLA</a>
            </li>
            <li>
              <CiSearch />
            </li>
            <li>
              <PiTote />
            </li>
          </li>
          <li className="p-3 font-sans mt-4 ">
            <a href="/">New Arrivals</a>
          </li>
          <li className="p-3 font-sans">
            <a href="/">
              Swimwear <PiCaretRight className="inline" />
            </a>
          </li>
          <li className="p-3 font-sans">
            <a href="/">
              Collections <PiCaretRight className="inline" />
            </a>
          </li>
          <li className="p-3 font-sans">
            <a href="/">
              About Us <PiCaretRight className="inline" />
            </a>
          </li>
          <li className="p-3 font-sans">
            <a href="/">
              Demos <PiCaretRight className="inline" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
