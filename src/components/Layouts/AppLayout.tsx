import React, { ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./styles.module.css";
import Container from "components/Container";

interface IProps {
  children?: ReactNode;
}

const AppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.app_layout_main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
