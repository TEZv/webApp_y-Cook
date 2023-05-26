import { useEffect, useState } from "react";
import { useCart } from "../../../../store/CartContextProvider";
import ShoppingCartIcon from "./ShoppingCartIcon";

const ShoppingCartButton = (props) => {
  const [buttonAnimate, setButtonAnimate] = useState(false);
  const { items } = useCart();
  const numOfCartItems = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );
  const buttonClasses = `relative h-10 w-10 hover:scale-110 hover:translate-y-1 transition-all duration-150 ${
    buttonAnimate ? "scale-150 ease-in ease-out" : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonAnimate(true);

    const timer = setTimeout(() => {
      setButtonAnimate(false);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <ShoppingCartIcon />
      <div className="rounded-full bg-Red text-white text-xs font-semibold absolute top-0 right-0 max-w-full min-w-4">
        {numOfCartItems}
      </div>
    </button>
  );
};

export default ShoppingCartButton;
