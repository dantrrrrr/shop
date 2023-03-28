import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartImg, logoDark } from "../assets";
const Header = () => {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-20 flex items-center justify-between">
        <Link to={"/"}>
          {" "}
          <div>
            {/* <img src={logoDark} alt="logoBrand" className="w-28" /> */}
            <h1 className="text-4xl font-titleFont text-black-900 font-bold">dantr</h1>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Home
              </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold ">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              src={userInfo ? userInfo.image : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"}
              alt=""
              className="w-8 h-8 rounded-full"
            />
          </Link>
          {userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
