import styles from "./styles.module.css";
import logo from "../../assets/images/LogoLevi.png";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Row>
        <Col md={4}>
          <img
            className={styles.footer_img}
            src={logo}
            alt="logo"
            width="200"
          />
        </Col>
        <Col md={3}>
          <h3 className={styles.footer_h3}>
            {t("row-1-header", { ns: "footer" })}
          </h3>
          <ul className={styles.footer_ul}>
            <li>
              <a href="*">{t("row-1-item-1", { ns: "footer" })}</a>
            </li>
            <li>
              <a href="*">{t("row-1-item-2", { ns: "footer" })}</a>
            </li>
            <li>
              <a href="*">{t("row-1-item-3", { ns: "footer" })}</a>
            </li>
            <li>
              <a href="*">{t("row-1-item-4", { ns: "footer" })}</a>
            </li>
            <li>
              <a href="*">{t("row-1-item-5", { ns: "footer" })}</a>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <h3 className={styles.footer_h3}>
            {t("row-2-header", { ns: "footer" })}
          </h3>
          <ul className={styles.footer_ul}>
            <li>
              <a href="*">{t("row-2-item-1", { ns: "footer" })}</a>
            </li>
            <li>
              <a href="*">{t("row-2-item-2", { ns: "footer" })}</a>
            </li>
            <li>
              <a href="*">{t("row-2-item-3", { ns: "footer" })}</a>
            </li>
            <li>
              <a href="*">{t("row-2-item-4", { ns: "footer" })}</a>
            </li>
            <li>
              <a href="*">{t("row-2-item-5", { ns: "footer" })}</a>
            </li>
          </ul>
        </Col>

        <Col md={2}>
          <ul className={styles.footer_ul}>
            <div className={styles.footer_social_icons}>
              <li>
                <a href="https://sr-rs.facebook.com/Levi9Serbia/">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC9hzwzLaoIqt6FBNJMJ7dYw">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/levi9company">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
            </div>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
