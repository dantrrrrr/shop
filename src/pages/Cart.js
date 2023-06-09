import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CartItem from "../components/CartItem";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Cart = () => {
  const productData = useSelector((state) => state.shop.productData);
  const [totalAmount, setTotalAmount] = useState("");
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast(`Please sign in to checkout `, { type: "error" });
    }
  };
  const payment =async(token)=>{
    await axios.post('http://localhost:5000/pay',{
      amount:totalAmount*100,
      token:token

    })
  }
  return (
    <div className="">
      <img
        src={
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        className="w-full h-60 object-cover"
        alt="cartImg"
      />
      <div className="mx-20 py-20 flex max-w-screen-xl">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-gray-400 pb-6 ">
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                ${totalAmount}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                ati earum esse porro! Eaque veniam sit recusandae laboriosam.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total : <span className="text-xl font-bold">${totalAmount}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="bg-black text-white text-base w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Check out{" "}
          </button>
          {payNow && (
            <div>
              <StripeCheckout
                stripeKey="pk_test_51MCnG7GVN4VUhj0QUY7vA1KpQltX6VvU0hpItAkq7hgArvMp3BLjM9wPokhpzaWrxUGOueaTXrinLwl7dylklmLQ004KIhVCAY"
                name="Shoping dantr"
                amount={totalAmount * 100}
                label="pay to dantr"
                description={`Your payment is ${totalAmount}`}
                email={userInfo.email}
                token={payment}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
