import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [displayBack, setDisplayBack] = useState(false)
  const showBackHandler = () => {
    setDisplayBack(true)
  }
  const hideBackHandler = () => {
    setDisplayBack(false)
  }
  return (
    <CartProvider>
      {displayBack && <Cart onClose={hideBackHandler} />}
      <Header onClick={showBackHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
