import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import SvgIcon from "components/SvgIcon";
import { Badge } from "react-bootstrap";
import useCartBadgeContext from "./useCartBadgeContext";

const CarBadge = () => {
  const cartState = useCartBadgeContext();
  return (
    <Link to={"/cart"}>
      <span className={styles.cart_badge}>
        <SvgIcon type="cart" className={styles.cart_icon} />
        <Badge pill bg="warning">
          {cartState.items.length}
        </Badge>
      </span>
    </Link>
  );
};

export default memo(CarBadge);
