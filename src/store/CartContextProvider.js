import { CartContext } from "./cart-context";
import { useContext, useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
  
      const existingItemIndex = state.items.findIndex(
        (item) => item.id == action.item.id
      );
  
      let updatedItems;
  
      if (existingItemIndex != -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  
    if (action.type === "REMOVE_ITEM") {
      const removedItemIndex = state.items.findIndex(
        (item) => item.id == action.id
      );
      const removedItem = state.items[removedItemIndex];
  
      const updatedTotalAmount = state.totalAmount - removedItem.price;
  
      let updatedItems;
      if (removedItem.amount > 1) {
        const updatedItem = {
          ...removedItem,
          amount: removedItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[removedItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.filter(item => item.id != action.id)
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  
    if(action.type === "CLEAR_CART") {
      return defaultCartState
    }
  
    return defaultCartState;
  };
  
  export const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
      cartReducer,
      defaultCartState
    );
  
    const addItemToCartHandler = (item) => {
      dispatchCartAction({ type: "ADD_ITEM", item: item });
    };
    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({ type: "REMOVE_ITEM", id: id });
    };
    const clearCartHandler = () => {
      dispatchCartAction({type: "CLEAR_CART"})
    }
  
    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      clearCart: clearCartHandler
    };
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => useContext(CartContext);