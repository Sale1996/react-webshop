import { createContext } from "react";
import { CartContextProps } from './CartProvider'

export const CartContext = createContext<CartContextProps>({} as CartContextProps );