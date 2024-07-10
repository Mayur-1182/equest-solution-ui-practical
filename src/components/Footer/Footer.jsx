import React from "react";
import signImg from "../../assets/images/sign_img.png";
import { GoArrowRight } from "react-icons/go";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaAngleDown,
} from "react-icons/fa";

import Amex from "../../assets/images/paymentMethod/Amex.png";
import ApplePay from "../../assets/images/paymentMethod/ApplePay.png";
import Visa from "../../assets/images/paymentMethod/Visa.png";
import UnionPay from "../../assets/images/paymentMethod/UnionPay.png";
import Mastercard from "../../assets/images/paymentMethod/Mastercard.png";
import GPay from "../../assets/images/paymentMethod/GooglePay.png";
import Discover from "../../assets/images/paymentMethod/Discover.png";
import DinersClub from "../../assets/images/paymentMethod/DinersClub.png";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className=" p-12  sm:py-24 sm:px-20 font-avenir bg-[#E8E4DF]">
      <section className=" footer w-full  ">
        <ul className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4  gap-6 md:gap-10">
          <li className="flex flex-col gap-7 p-4">
            <h3>Talk about your store</h3>
            <p>
              Sea Level Swim features an extensive selection of precision
              contouring and body moulded swimsuits made from regenerated nylon.
              The result is a beautiful line up of luxurious high quality pieces
              that feel right for the times and designed to last.This is a
              demonstration of the Showcase theme for Shopify. Swimwear kindly
              donated by Sea Level Swim.
            </p>
            <img
              src={signImg}
              alt="signature image"
              className="footer_img min-w-20 max-w-[25%]"
            />
          </li>
          <li className="flex flex-col gap-7 p-4">
            <h3>Shop</h3>
            <ul className="flex flex-col gap-1">
              <li>One Pieces</li>
              <li>Swimwear Tops</li>
              <li>Swim Bottoms</li>
              <li>Tankinis</li>
              <li>Surf Suits & Rash vests</li>
              <li>Sustainable Swim</li>
            </ul>
          </li>
          <li className="flex flex-col gap-7 p-4">
            <h3>Help</h3>
            <ul className="flex flex-col gap-1">
              <li>Search</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </li>
          <li className="flex flex-col gap-7 p-4">
            <h3>Newsletter</h3>
            <p>Sign up for our newsletter to only receive good things.</p>
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-[80%] bg-[#E8E4DF]"
              />
              <GoArrowRight className="inline" />
              <ul className="flex flex-rows gap-4 mt-4">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTiktok />
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
        <div className="lower-footer flex flex-col gap-6 text-xs">
          <p>
            United Kingdom (GBP £) <FaAngleDown className="inline mr-6" />
          </p>
          <p>© 2023 mila. Powered by Shopify</p>
        </div>
        <div className="payment-methods flex flex-rows">
          <img src={UnionPay} alt="payment method image" className="" />
          <img src={Visa} alt="payment method image" />
          <img src={DinersClub} alt="payment method image" />
          <img src={Discover} alt="payment method image" />
          <img src={GPay} alt="payment method image" />
          <img src={Amex} alt="payment method image" />
          <img src={ApplePay} alt="payment method image" />
          <img src={Mastercard} alt="payment method image" />
        </div>
      </section>
    </footer>
  );
}
