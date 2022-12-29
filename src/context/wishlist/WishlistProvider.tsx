import { useEffect, useReducer } from "react";
import { IWishlistItem } from "interfaces";
import { wishlistReducer } from "./WishlistReducer";
import { WishlistContext } from "./WishlistContext";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export interface WishlistState {
  items: IWishlistItem[];
}

export type WishlistContextProps = {
  wishlistState: WishlistState;
  addToWishlist: (item: IWishlistItem) => void;
  removeWishlistItem: (id: number) => void;
};

const INITIAL_STATE: WishlistState = localStorage.getItem("wishlistState")
  ? JSON.parse(localStorage.getItem("wishlistState") || "{}")
  : {
      items: [],
    };
interface props {
  children: JSX.Element;
}

export const WishlistProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(wishlistReducer, INITIAL_STATE);
  const { t } = useTranslation();

  const addToWishlist = (item: IWishlistItem) => {
    const product = state.items.find((pr) => pr.id === item.id);
    if (product) return false;

    dispatch({
      type: "addToWishlist",
      payload: { ...item },
    });
    toast(t("product-added-notification", { ns: "wishlist" }));
  };

  const removeWishlistItem = (id: number) => {
    dispatch({ type: "removeFromWishlist", payload: id });
    toast(t("product-removed-notification", { ns: "wishlist" }));
  };

  useEffect(() => {
    localStorage.setItem("wishlistState", JSON.stringify(state));
  }, [state]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistState: state,
        addToWishlist,
        removeWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
