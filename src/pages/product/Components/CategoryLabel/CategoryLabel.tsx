import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

interface IProps {
  categories: string;
}

const CategoryLabel: React.FC<IProps> = ({ categories, ...props }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.categories}>
      <b>{t("categories-label", { ns: "productPage" })} </b>
      {categories}
    </div>
  );
};

export default CategoryLabel;
