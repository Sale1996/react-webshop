import { CartContext } from "context/cart/CartContext";
import { CartState } from "context/cart/CartProvider";
import { useContext } from "react";

const useCartBadgeContext = (): CartState => {
  const { cartState } = useContext(CartContext);

  return cartState;
};

export default useCartBadgeContext;
