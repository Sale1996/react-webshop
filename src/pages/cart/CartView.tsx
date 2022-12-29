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

  return (
    <AppLayout>
      <Headline title={t("title", { ns: "cartPage" })} />
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
            <Button className={styles.proceedBtn}>
              {t("proceed-to-checkout-button", { ns: "cartPage" })}
            </Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default CartView;
