import React from "react";
import styles from "./styles.module.css";

interface IProps {
  price: number;
}

const Price: React.FC<IProps> = ({ price, ...props }) => {
  return <div className={styles.price}>${price}</div>;
};

export default Price;
