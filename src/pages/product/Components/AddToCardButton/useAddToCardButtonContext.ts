import { useState } from "react";

export type CartContextProps = {
  quantity: number;
  changeQuantity: (type: "plus" | "minus") => void;
};

const useAddToCardButtonContext = (): CartContextProps => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (type: "plus" | "minus") => {
    if (type === "plus") setQuantity(quantity + 1);
    else if (quantity > 1) setQuantity(quantity - 1);
  };

  return { quantity, changeQuantity };
};

export default useAddToCardButtonContext;
