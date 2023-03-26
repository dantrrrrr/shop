import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/shopSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("-");
  };
  const rootId = idString(_id);
  //   console.log(rootId);
  // console.log(_id)
  const handleDetail = () => {
    navigate(`/product/${rootId}`, {
      state: { item: product },
    });
  };
  return (
    <div className="group relative">
      <div
        onClick={handleDetail}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImage"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-sm font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-6 relative overflow-hidden w-26 text-sm  ">
            <div className="flex gap-2 text-sm w-28 transform group-hover:translate-x-32	transition-transform  duration-500">
              {" "}
              <p className="line-through text-gray-500">
                {/* ${(product.price * 0.8).toFixed(2)} */}${product.oldPrice}
              </p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                );
                toast(`${product.title} is added to cart`, {
                  type: "success",
                });
              }}
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to cart{" "}
              <span>
                <BsArrowRight className="font-bold text-sm" />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-red-700 text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
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

export default ProductCard;
