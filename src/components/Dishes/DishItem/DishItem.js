import { useCart } from "../../../store/CartContextProvider";
import DishItemForm from "./DishItemForm";

const DishItem = (props) => {
  const { addItem } = useCart();

  const addToCartHandler = (amount) => {
    addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className="flex items-center justify-between snap-center">
      <div className="flex flex-col space-y-1">
        <div className="font-semibold">{props.name}</div>
        <div className="italic text-sm">{props.description}</div>
        <div className="font-semibold text-darkGreen">{price}</div>
      </div>
      <DishItemForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
  );
};

export default DishItem;
