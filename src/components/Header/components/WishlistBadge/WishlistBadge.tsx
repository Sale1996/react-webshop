import Modal from "components/SideModal";
import { WishlistContext } from "context/wishlist/WishlistContext";
import { memo, useContext, useState } from "react";
import { Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import WishlistModalContent from "./WishlistModalContent";

const WishlistBadge = () => {
  const [show, setShow] = useState(false);
  const { wishlistState } = useContext(WishlistContext);
  const { t } = useTranslation();

  return (
    <span className={styles.cart_badge}>
      <svg
        className={styles.cart_icon}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setShow(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
      <Badge pill bg="warning">
        {wishlistState.items.length}
      </Badge>
      <Modal
        title={t("title", { ns: "wishlist" })}
        onClose={() => setShow(false)}
        show={show}
      >
        <WishlistModalContent />
      </Modal>
    </span>
  );
};

export default memo(WishlistBadge);
