import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
