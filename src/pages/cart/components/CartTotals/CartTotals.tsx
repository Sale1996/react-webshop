import { CartContext } from "context/cart/CartContext";
import { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const CartTotals = () => {
  const { cartState } = useContext(CartContext);
  const { tax, amount } = cartState;
  const { t } = useTranslation();

  return (
    <div className={styles.cartTotal}>
      <div className={styles.cart_content}>
        <h4>{t("carttotals", { ns: "cartPage" })}</h4>
        <table>
          <thead>
            <tr>
              <th className={styles.subtotal_title}>
                {t("subttotals", { ns: "cartPage" })}
              </th>
              <th>${amount}</th>
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            <tr>
              <td className={styles.title_head}>
                {t("shipping", { ns: "cartPage" })}
              </td>
              <td className={styles.table_value}></td>
            </tr>
            <tr>
              <td className={styles.title_head}>
                {t("flat-rate", { ns: "cartPage" })}
              </td>
              <td className={styles.table_value}>${amount === 0 ? 0 : tax}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <table>
        <tfoot>
          <tr>
            <th className={styles.title_head}>
              {t("total-price", { ns: "cartPage" })}
            </th>
            <th>${amount + (amount === 0 ? 0 : tax)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default memo(CartTotals);
