import React from "react";
import styles from "./styles.module.css";

interface IProps {
  description: string;
}

const Description: React.FC<IProps> = ({ description, ...props }) => {
  return <div className={styles.description}>{description}</div>;
};

export default Description;
