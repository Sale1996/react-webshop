import React from "react";
import styles from "./styles.module.css";

interface IProps {
  title: string;
}

const Title: React.FC<IProps> = ({ title, ...props }) => {
  return <div className={styles.title}>{title}</div>;
};

export default Title;
