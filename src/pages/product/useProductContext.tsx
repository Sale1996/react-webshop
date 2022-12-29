import { CartContext } from "context/cart/CartContext";
import { IProduct } from "interfaces";
import getAPIService from "lib/api-service";
import { useContext, useEffect, useReducer } from "react";
import { INITIAL_STATE, productReducer, ProductState } from "./ProductReducer";

const { REACT_APP_BASE_API_URL } = process.env;

const useProductContext = (productID: number): ProductState => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
  const { cartState } = useContext(CartContext);

  const fetchProduct = async (productID: number) => {
    dispatch({
      type: "FETCH_REQUEST",
      payload: null,
    });
    try {
      const APIService = getAPIService();
      const product = await APIService.get<IProduct>(
        `${REACT_APP_BASE_API_URL}/products/${productID}`
      );

      dispatch({
        type: "FETCH_SUCCESS",
        payload: product,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_FAIL",
        payload: err,
      });
    }
  };

  useEffect(() => {
    fetchProduct(productID);
  }, [productID]);

  useEffect(() => {
    const product = cartState.items.find((pr) => pr.id === productID);
    if (product) {
      dispatch({
        type: "PRODUCT_IN_CART",
        payload: null,
      });
    } else {
      dispatch({
        type: "PRODUCT_NOT_IN_CART",
        payload: null,
      });
    }
  }, [cartState, productID]);

  return state;
};

export default useProductContext;
