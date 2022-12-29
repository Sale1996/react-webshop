import { createContext } from "react";
import { WishlistContextProps } from "./WishlistProvider";

export const WishlistContext = createContext<WishlistContextProps>(
  {} as WishlistContextProps
);
