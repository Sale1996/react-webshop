import { CartContext } from "context/cart/CartContext";
import { WishlistContext } from "context/wishlist/WishlistContext";
import { memo, useContext } from "react";
import styles from "./styles.module.css";
import WishlistItem from "./WishlistItem";

const WishlistModalContent = () => {
  const { wishlistState, removeWishlistItem } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const { items } = wishlistState;

  return (
    <div className={styles.cartItems}>
      {items
        .map((item) => ({ ...item }))
        .map((item) => {
          return (
            <WishlistItem
              key={item.id}
              {...item}
              removeHandler={removeWishlistItem}
              addToCartHandler={addToCart}
            />
          );
        })}
    </div>
  );
};

export default memo(WishlistModalContent);
