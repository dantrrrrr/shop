import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineArrowBack, MdOutlineClose } from "react-icons/md";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
  resetCart,
} from "../redux/shopSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  const productData = useSelector((state) => state.shop.productData);
  const dispatch = useDispatch();

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex  items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2 w-48">
              <MdOutlineClose
                onClick={() => {
                  dispatch(deleteFromCart(item._id));
                  toast(`${item.title} is removed`, { type: "error" });
                }}
                className="text-2xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="product-cart-img"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className=" w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 ">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                {" "}
                <button
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: item._id,
                      })
                    )
                  }
                  //   disabled={baseQuantity === 1}
                  //   style={{ cursor: "not-allowed" }}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        _id: item._id,
                      })
                    )
                  }
                  //   disabled={baseQuantity === 10}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      {productData.length !== 0 ? (
        <button
          className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
          onClick={() =>
            dispatch(resetCart()) &&
            toast(`Your cart is empty`, { type: "error" })
          }
        >
          Reset Cart
        </button>
      ) : (
        <Link to="/">
          <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
            {" "}
            <MdOutlineArrowBack />
            go Shoping
          </button>
        </Link>
      )}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CartItem;
