import LoginModal from "components/Login/LoginModal";
import LogoutModal from "components/Login/LogoutModal";
import SvgIcon from "components/SvgIcon";
import { AccountContext } from "context/account/AccountContext";
import { useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const LoginMenu = () => {
  const { accountState } = useContext(AccountContext);
  const { t } = useTranslation();

  let accountNav = (
    <>
      <DropdownButton
        title={<SvgIcon type="log-in" className={styles.user_icon} />}
        className={styles.languageSwitcher}
      >
        <Dropdown.Divider />
        <Dropdown.Header className={styles.dropdownHeader}>
          {t("loginMenuTitle", { ns: "login" })}
        </Dropdown.Header>
        <Dropdown.Item className={styles.dropdownItem} eventKey="RS">
          <LoginModal />
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className={styles.login_menu_link} to={"/register"}>
            {t("registrationMenuEntry", { ns: "login" })}
          </Link>
        </Dropdown.Item>
      </DropdownButton>
    </>
  );

  if (accountState.isLoggedIn) {
    accountNav = (
      <>
        <DropdownButton
          title={<SvgIcon type="user" className={styles.user_icon} />}
          className={styles.languageSwitcher}
        >
          <Dropdown.Divider />
          <Dropdown.Header className={styles.dropdownHeader}>
            {t("accountMenuTitle", { ns: "login" })}
          </Dropdown.Header>
          <Dropdown.Item>
            <Link className={styles.login_menu_link} to={"/account"}>
              {t("accountMenuEntry", { ns: "login" })}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item className={styles.dropdownItem} eventKey="RS">
            <LogoutModal />
          </Dropdown.Item>
        </DropdownButton>
      </>
    );
  }

  return <div>{accountNav}</div>;
};
export default LoginMenu;
