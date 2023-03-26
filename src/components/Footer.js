import React from "react";
import { logoLight, paymentLogo } from "../assets";
import { ImGithub } from "react-icons/im";
import { MdHome, MdLocationCity } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-20 grid grid-cols-4">
        {/* logo  */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide"> @ dantr.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex flex-row gap-5 text-gray-500 text-lg">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* logo end */}
        {/* locate start */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Ho Chi Minh City</p>
            <p>Phone: 099999999</p>
            <p>Email: google@gmail.com</p>
          </div>
        </div>
        {/* locate end */}
        {/* profile start */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile </h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              My account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>{" "}
              Check out
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdHome />
              </span>{" "}
              Home
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationCity />
              </span>{" "}
              Help & support
            </p>
          </div>
        </div>
        {/* profile end */}
        <div className="flex flex-col justify-center ">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="Email"
            type="text"
          />

          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subcsribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
