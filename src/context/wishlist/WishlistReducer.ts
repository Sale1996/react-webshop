import { WishlistState } from "./WishlistProvider";
import { IWishlistItem } from "interfaces";

type WishlistAction =
  | { type: "getAll"; payload: IWishlistItem[] }
  | { type: "addToWishlist"; payload: IWishlistItem }
  | { type: "removeFromWishlist"; payload: number };

export const wishlistReducer = (
  state: WishlistState,
  action: WishlistAction
): WishlistState => {
  switch (action.type) {
    case "getAll":
      return {
        ...state,
        items: [...state.items],
      };

    case "addToWishlist":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "removeFromWishlist":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
