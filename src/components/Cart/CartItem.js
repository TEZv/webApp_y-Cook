import { useCart } from "../../store/CartContextProvider";
import InvertedMiniButton from "../UI/Buttons/InvertedMiniButton";
import MiniButton from "../UI/Buttons/MiniButton";

const CartItem = (props) => {
  const {addItem, removeItem} = useCart();
  const price = `$${props.item.price.toFixed(2)}`

  const addItemHandler = (item) => {
    addItem({...item, amount: 1})
  }

  const removeItemHandler = (id) => {
    removeItem(id)
  }

  return (
    <div className="">
      <div className="text-xl">{props.item.name}</div>
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div className="font-semibold">{price}</div>
          <div>x{props.item.amount}</div>
        </div>
        <div className="grid-rows space-x-2">
          <InvertedMiniButton className="w-10 grow-0" onClick={removeItemHandler.bind(null, props.item.id)}>-</InvertedMiniButton>
          <MiniButton className="w-10" onClick={addItemHandler.bind(null, props.item)}>+</MiniButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
