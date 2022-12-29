import SvgIcon from "components/SvgIcon";
import { CartContext } from "context/cart/CartContext";
import { ICartItem, IWishlistItem } from "interfaces";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

interface WishlistItemProps extends IWishlistItem {
  removeHandler: (id: number) => void;
  addToCartHandler: (item: ICartItem) => void;
}

const WishlistItem = ({
  id,
  title,
  price,
  image,
  removeHandler,
  addToCartHandler,
}: WishlistItemProps) => {
  const { cartState } = useContext(CartContext);
  const { t } = useTranslation();

  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItem_image} src={image} alt={title} />
      <div className={styles.wishlistItem_info}>
        <p className={styles.wishlistItem_title}>{title}</p>
        <span className={styles.wishlistItem_priceInfo}>${price}</span>
        <div>
          {cartState.items.find((pr) => pr.id === id) ? (
            <div className={styles.product_in_cart_desc}>
              {t("product-in-cart", { ns: "wishlist" })}
            </div>
          ) : (
            <button
              className={styles.wishlist_add_to_cart}
              onClick={() =>
                addToCartHandler({
                  id: id,
                  title: title,
                  price: price,
                  image: image,
                  quantity: 1,
                })
              }
            >
              {t("add-to-cart-button", { ns: "productPage" })}
            </button>
          )}
        </div>
      </div>

      <span onClick={() => removeHandler(id)}>
        <SvgIcon
          className={styles.wishlist_delete_icon}
          type="remove"
          width={20}
          height={20}
          color="#928F8F"
        />
      </span>
    </div>
  );
};

export default WishlistItem;
