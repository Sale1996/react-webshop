import Button from "components/Button";
import QuantityButton from "components/QuantityButton/QuantityButton";
import { CartContext } from "context/cart/CartContext";
import { ICartItem } from "interfaces";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import useAddToCardButtonContext from "./useAddToCardButtonContext";

interface IProps {
  cartItem: ICartItem;
}

const AddToCardButton: React.FC<IProps> = ({ cartItem, ...props }) => {
  const { addToCart } = useContext(CartContext);
  const { quantity, changeQuantity } = useAddToCardButtonContext();
  const { t } = useTranslation();

  return (
    <div className={styles.arrangeHorizontally}>
      <QuantityButton quantity={quantity} cb={changeQuantity} />
      <Button
        onClick={() => {
          addToCart({ ...cartItem, quantity: quantity });
        }}
        className={styles.productAddToCartButton}
      >
        {t("add-to-cart-button", { ns: "productPage" })}
      </Button>
    </div>
  );
};

export default AddToCardButton;
