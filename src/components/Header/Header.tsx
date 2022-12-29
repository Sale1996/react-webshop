import { memo } from "react";
import CartBadge from "components/Header/components/CartBadge";
import WishlistBadge from "components/Header/components/WishlistBadge";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Container from "components/Container";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LoginMenu from "./components/LoginMenu";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_content}>
          <div className={styles.header_logo}>
            {t("app-title", { ns: "navbar" })}
          </div>
          <nav>
            <ul className={styles.nav_items}>
              <Link to={"/"}>
                <li className={styles.nav_item}>
                  {t("home", { ns: "navbar" })}
                </li>
              </Link>
            </ul>
          </nav>
          <div className="flex">
            <CartBadge />
            <WishlistBadge />
            <LanguageSwitcher />
            <LoginMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);
