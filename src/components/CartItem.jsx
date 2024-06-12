import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="mx-16">
      <div className="flex flex-row gap-5">
        <div className="">
          <img src={item.image} alt="" className="w-[220px] h-[250px] aspect-auto" />
        </div>
        <div>
          <h1 className="text-red-600 font-semibold text-md">{item.title}</h1>
          <h1 className="text-sm w-48">{item.description}</h1>
          <div className="flex flex-row justify-between">
            <p className="text-green-800 font-bold">${item.price}</p>
            <div onClick={removeFromCart} className="bg-red-500 rounded-3xl ">
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
      <div className="line my-10"></div>
    </div>
  );
};

export default CartItem;
