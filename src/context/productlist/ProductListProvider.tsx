import { useReducer, useEffect, useContext } from "react";
import { IProduct } from "interfaces";
import { ProductListContext } from "./ProductListContext";
import { ProductListReducer } from "./ProductListReducer";
import productServices from "services/product.services";
import { FilterContext } from "context/filter/FilterContext";

export interface ProductListState {
  allProducts: IProduct[];
  filteredProducts: IProduct[];
  categories: string[];
  maxPrice: number;
  minPrice: number;
}

export enum SortType {
  Latest = "Latest", 
  Rating = "Rating",  
  PriceLowToHigh = "PriceLowToHigh",
  PriceHighToLow = "PriceHighToLow"
}

export type ProductListContextProps = {
  productListState: ProductListState;
  sortProducts: (sortType: SortType) => void;
};

const INITIAL_STATE: ProductListState = {
  allProducts: [],
  filteredProducts: [],
  categories: [],
  maxPrice: 0,
  minPrice: 0
};

interface props {
  children: JSX.Element;
}

export const ProductListProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(ProductListReducer, INITIAL_STATE);
  const filterContext = useContext(FilterContext);

  useEffect(() => {
    productServices.getAll().then((response) => {
      dispatch({
        type: "ReadProducts",
        payload: response.data,
      });
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "FilterProducts",
      payload:filterContext.filterState,
    });
  }, [filterContext, state.allProducts]);

  const sortProducts = (sortType: SortType) => {
    dispatch({ type: "SortProducts", payload: sortType});
  };

  return (
    <ProductListContext.Provider
      value={{
        productListState: state,
        sortProducts: sortProducts
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
