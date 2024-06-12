import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex w-11/12">
      {cart.length > 0 ? (
        <div className="flex justify-center">
          <div className="">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div>
            <div className="font-semibold">
              <div>Your Cart</div>
              <div className="text-3xl text-green-600 font-semibold">
                Summary
              </div>
              <p>
                <span className="font-bold">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="my-44">
              <p>Total Amount: ${totalAmount}</p>
              <button className=" flex text-green-900 font-semibold w-48 justify-center items-center bg-yellow-500 rounded-md border-none">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
