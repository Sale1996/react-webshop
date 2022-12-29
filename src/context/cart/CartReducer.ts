import { CartState } from "./CartProvider";
import { ICartItem } from "interfaces";

type CartAction =
  | { type: "getAll"; payload: ICartItem[] }
  | { type: "addToCart"; payload: ICartItem }
  | { type: "removeFromCart"; payload: number }
  | { type: "updateQuantity"; payload: ICartItem[] }
  | { type: "amountUpdate" }
  | { type: "removeAll" };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "getAll":
      return {
        ...state,
        items: [...state.items],
      };

    case "addToCart":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "removeFromCart":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "removeAll":
      return {
        ...state,
        items: [],
        amount: 0,
      };

    case "updateQuantity":
      return {
        ...state,
        items: action.payload,
      };

    case "amountUpdate":
      const total = state.items
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
      return {
        ...state,
        amount: Number(total),
      };

    default:
      return state;
  }
};
