import { useState } from "react";
import FullWrapper from "./components/UI/FullWrapper/FullWrapper.js";
import Header from "./components/Layout/Header/Header.js";
import BodyWrapper from "./components/UI/BodyWrapper/BodyWrapper.js";
import Summary from "./components/Dishes/Summary.js";
import AvailableDishes from "./components/Dishes/AvailableDishes.js";
import Cart from "./components/Cart/Cart.js";
import { CartContextProvider } from "./store/CartContextProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <FullWrapper>
      <CartContextProvider>
        <Header onShowCart={showCartHandler} />
        <BodyWrapper>
          <Summary />
          <AvailableDishes />
          {showCart && <Cart onClose={hideCartHandler} />}
        </BodyWrapper>
      </CartContextProvider>
    </FullWrapper>
  );
};

export default App;
