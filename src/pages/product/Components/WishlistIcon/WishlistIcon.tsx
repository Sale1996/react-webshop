import { WishlistContext } from "context/wishlist/WishlistContext";
import { IWishlistItem } from "interfaces";
import React, { memo, useContext } from "react";
import { classNames } from "utils";
import styles from "./styles.module.css";

interface IProps {
  wishlistItem: IWishlistItem;
}

const WishListIcon: React.FC<IProps> = ({ wishlistItem, ...props }) => {
  const { wishlistState, addToWishlist, removeWishlistItem } =
    useContext(WishlistContext);

  return (
    <React.Fragment>
      {wishlistState.items.find((pr) => pr.id === wishlistItem.id) ? (
        <span className={styles.wishlist_badge}>
          <svg
            className={classNames(
              styles.wishlist_icon,
              styles.wishlist_badge_active
            )}
            fill="#4c55ff"
            stroke="#4c55ff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => removeWishlistItem(wishlistItem.id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </span>
      ) : (
        <span className={styles.wishlist_badge}>
          <svg
            className={styles.wishlist_icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => addToWishlist({ ...wishlistItem })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </span>
      )}
    </React.Fragment>
  );
};

export default memo(WishListIcon);
