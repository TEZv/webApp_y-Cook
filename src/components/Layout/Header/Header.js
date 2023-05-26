import { useCart } from "../../../store/CartContextProvider";
import Button from "../../UI/Buttons/Button";
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";

const Header = (props) => {
  const {clearCart} = useCart()

  return (
    <nav className="relative container mx-auto p-6 flex items-center justify-between">
      <div className="text-roseRed text-2xl font-bold tracking-wider border-x-2 border-y-4 border-roseRed border-double rounded-lg">
        y*Cook
      </div>
      <div className="hidden lg:flex text-slate-50 text-2xl subpixel-antialiased bg-black tracking-widest italic underline decoration-roseRed decoration-2 underline-offset-8">
        ~Only the best Delivery~
      </div>
      <div className="flex justify-between items-center space-x-3">
        <ShoppingCartButton onClick={props.onShowCart}/>
        <Button className="px-6" onClick={clearCart}>Empty Cart</Button>
      </div>
    </nav>
  );
};

export default Header;
