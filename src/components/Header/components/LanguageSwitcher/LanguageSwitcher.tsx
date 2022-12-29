import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { classNames } from "utils";
import styles from "./styles.module.css";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <DropdownButton
        title={i18n.language}
        onSelect={(eventKey) => {
          i18n.changeLanguage(eventKey || undefined);
        }}
        className={styles.languageSwitcher}
      >
        <Dropdown.Divider />
        <Dropdown.Header className={styles.dropdownHeader}>
          {t("menuTitle", { ns: "languageSwitcher" })}
        </Dropdown.Header>
        <Dropdown.Item className={styles.dropdownItem} eventKey="RS">
          <span
            className={classNames(styles.dropdownFlagIcon, "fi fi-rs")}
          ></span>
          {t("RSMenuItem", { ns: "languageSwitcher" })}
        </Dropdown.Item>
        <Dropdown.Item eventKey="EN">
          <span
            className={classNames(styles.dropdownFlagIcon, "fi fi-gb")}
          ></span>
          {t("GBMenuItem", { ns: "languageSwitcher" })}
        </Dropdown.Item>
        <Dropdown.Item eventKey="JP">
          <span
            className={classNames(styles.dropdownFlagIcon, "fi fi-jp")}
          ></span>
          {t("JPMenuItem", { ns: "languageSwitcher" })}
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
export default LanguageSwitcher;
