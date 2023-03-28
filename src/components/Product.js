import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/shopSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const Product = () => {
  const dispatch = useDispatch();

  const [details, setDetails] = useState({});
  const [baseQuantity, setBaseQuantity] = useState(1);
  console.log(baseQuantity);
  const location = useLocation();
  useEffect(() => {
    // console.log(location.state.item);
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-20 my-10 flex gap-10">
        {/* start left area single product */}

        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt=""
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        {/* end -left area single product */}

        {/* start - right area single product */}
        <div className="w-3/5 flex flex-col justify-center gap-12">
          {/* start product title and price */}
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-gray-500">
                {/* ${(product.price * 0.8).toFixed(2)} */}${details.oldPrice}
              </p>
              <p className=" text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          {/* end product title and price */}
          {/* start rate */}
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              {" "}
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>
          {/* end rate */}

          {/* description */}
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>

          {/* start cart   */}
          <div className="flex gap-4">
            {/* quantity control */}
            <div className=" w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 ">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                {" "}
                <button
                  onClick={() => setBaseQuantity((prev) => prev - 1)}
                  disabled={baseQuantity === 1}
                  //   style={{ cursor: "not-allowed" }}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQuantity}</span>
                <button
                  onClick={() => setBaseQuantity((prev) => prev + 1)}
                  disabled={baseQuantity === 10}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            {/* //add to cart button */}
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQuantity,
                    description: details.description,
                  })
                );
                toast(`${details.title} is added to cart`, { type: "success" });
              }}
              className="bg-black text-white px-6 py-3 active:bg-gray-800"
            >
              {" "}
              Add to cart
            </button>
          </div>
          {/* end cart  */}
          <p className="text-base text-gray-500">
            Category :{" "}
            <span className="font-medium capitalize ">{details.category}</span>{" "}
          </p>
        </div>
        {/*end - right area single product */}
      </div>
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

export default Product;
