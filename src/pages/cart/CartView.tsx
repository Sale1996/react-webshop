import { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
import { CartContext } from "context/cart/CartContext";
import CartItem from "./components/CartItem";
import CartTotals from "./components/CartTotals";
import Button from "components/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cartState, removeCartItem, updateQuantity } = useContext(CartContext);
  const { items } = cartState;
  const { t } = useTranslation();
  const isEmpty = items.length === 0;
  return (
    <AppLayout>
      <Headline title={t("title", { ns: "cartPage" })} />
      {isEmpty ? 
        <p className={styles.cardEmptyText}>
          {t("cart-is-empty", { ns: "cartPage" })}
        </p>: ""}
      <div className={styles.cartPage}>
        <div className={styles.cartItems}>
          {items
            .map((item) => ({ ...item }))
            .map((item) => {
              return (
                <CartItem
                  key={item.id}
                  {...item}
                  removeHandler={removeCartItem}
                  updateQuantity={updateQuantity}
                />
              );
            })}
        </div>
        <div className={styles.cartTotalWrapp}>
          <CartTotals />
          <Link to={"/checkout"}>
            <Button className={isEmpty ? styles.disabledBtn: styles.proceedBtn} disabled={isEmpty}>
              {t("proceed-to-checkout-button", { ns: "cartPage" })}
            </Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default CartView;
