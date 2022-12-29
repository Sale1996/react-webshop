import { IProduct, IProductPage } from "interfaces";

export interface ProductState extends IProductPage {}

type ProductAction =
  | { type: "FETCH_REQUEST"; payload: null }
  | { type: "FETCH_SUCCESS"; payload: IProduct }
  | { type: "FETCH_FAIL"; payload: any }
  | { type: "PRODUCT_IN_CART"; payload: null }
  | { type: "PRODUCT_NOT_IN_CART"; payload: null };

export const INITIAL_STATE: ProductState = {
  product: {
    id: -1,
    title: "",
    price: -1,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: -1,
      count: -1,
    },
  },
  loading: false,
  error: "",
  inCart: false,
};

export const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
      };

    case "PRODUCT_IN_CART":
      return {
        ...state,
        inCart: true,
      };

    case "PRODUCT_NOT_IN_CART":
      return {
        ...state,
        inCart: false,
      };

    default:
      return state;
  }
};
