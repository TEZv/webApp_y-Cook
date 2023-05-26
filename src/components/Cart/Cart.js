import Button from "../UI/Buttons/Button";
import InvertedButton from "../UI/Buttons/InvertedButton";
import CartList from "./CartList";
import Modal from "../UI/Modal/Modal";
import { useCart } from "../../store/CartContextProvider";
import Checkout from "./Checkout";
import { useState } from "react";
import useHttp from "../../hooks/use-http";
import Spinner from "../UI/Spinner/Spinner";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { items, totalAmount, clearCart } = useCart();
  const { loading, error, requestHttp: submitOrder } = useHttp();

  const fixedTotalAmount = `$${totalAmount.toFixed(2)}`;

  const hasItems = items.length > 0;

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const editOrderHandler = () => {
    setShowCheckout(false);
  };

  const checkoutOrderHandler = (userData) => {
    submitOrder({
      url: "https://yummy-4e21c-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      method: "POST",
      body: JSON.stringify({ user: userData, orderedItems: items }),
    });
    setDidSubmit(true);
    clearCart()
  };

  const cartView = (
    <>
      <CartList items={items} />
      <hr className="bg-black h-1"></hr>
      <div className="flex justify-between">
        <div className="text-xl tracking-wider">Total Cost</div>
        <div className="text-xl font-semibold tracking-wider">
          {fixedTotalAmount}
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <InvertedButton className="basis-20" onClick={props.onClose}>
          Return
        </InvertedButton>
        <Button
          disabled={!hasItems}
          className="basis-20"
          onClick={orderHandler}
        >
          I Order
        </Button>
      </div>
    </>
  );

  const checkoutView = (
    <Checkout onEditOrder={editOrderHandler} onOrder={checkoutOrderHandler} />
  );

  const loadingView = (
    <div className="text-center">
      <Spinner />
    </div>
  );

  const successView = (
    <>
      <div className="text-2xl text-darkGreen text-center">It Was SuccessFul!</div>
      <div className="text-center text-sm">
        Thanks for the order!
      </div>
      <div className="text-center text-sm">
        I'm Sure Your order will arive shortly...
      </div>
      <Button className="w-40 self-end" onClick={props.onClose}>
        Okay
      </Button>
    </>
  );

  return (
    <Modal>
      <div className="p-2 py-4 pl-4 text-3xl tracking-wider bg-beige text-black rounded-t-xl">
        {showCheckout ? "Order Information" : "Cart"}
      </div>
      <div className="p-6 flex flex-col space-y-3">
        {!loading && !didSubmit && (showCheckout ? checkoutView : cartView)}
        {loading && loadingView}
        {!loading && didSubmit && successView}
      </div>
    </Modal>
  );
};

export default Cart;
