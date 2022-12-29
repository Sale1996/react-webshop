import React from "react";
import styles from "./styles.module.css";

interface IProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<IProps> = ({ src, alt, ...props }) => {
  return (
    <div className={styles.productImageContainer}>
      <img className={styles.productImage} src={src} alt={alt}></img>
    </div>
  );
};

export default ProductImage;
