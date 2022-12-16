import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { ChangeColor } from "./components/ChangeColor";
import { Navbar } from "./components/NavBar";
import { CartContainer } from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./feautures/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
