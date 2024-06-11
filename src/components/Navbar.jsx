import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white fixed inset w-full">
      <div className="flex flex-row justify-between mx-5">
        <NavLink to="/">
          <div className="">
            <img src="https://picsum.photos/200/300" width={30} height={30} />
          </div>
        </NavLink>

        <div className="flex flex-row gap-5">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
