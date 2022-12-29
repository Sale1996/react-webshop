import React, { useReducer } from "react";
import { FilterContext } from "./FilterContext";
import { FilterReducer } from "./FilterReducer";

export interface FilterState {
  minPriceFilter?: number;
  maxPriceFilter?: number;
  searchString: string;
  categoryFilter: string[];
  reset: boolean;
}

export type FilterContextProps = {
  filterState: FilterState;
  setMinPrice: (amount: number) => void;
  setMaxPrice: (amount: number) => void;
  setSearchString: (searchString: string) => void;
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
  clearAllFilters: () => void;
  clearMinPrice: () => void;
  clearMaxPrice: () => void;
};

const INITIAL_STATE: FilterState = {
  minPriceFilter: undefined,
  maxPriceFilter: undefined,
  searchString: "",
  categoryFilter: [],
  reset: false,
};

interface props {
  children: JSX.Element;
}

export const FilterProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(FilterReducer, INITIAL_STATE);

  const setMinPrice = (price: number) => {
    dispatch({ type: "SetMinPrice", payload: price });
  };
  const setMaxPrice = (price: number) => {
    dispatch({ type: "SetMaxPrice", payload: price });
  };
  const setSearchString = (searchString: string) => {
    dispatch({ type: "SetSearchString", payload: searchString });
  };
  const addCategory = (category: string) => {
    dispatch({ type: "AddCategory", payload: category });
  };
  const removeCategory = (category: string) => {
    dispatch({ type: "RemoveCategory", payload: category });
  };
  const clearAllFilters = () => {
    dispatch({ type: "ClearAllFilters", payload: null });
  };
  const clearMinPrice = () => {
    dispatch({ type: "ClearMinPrice", payload: null });
  };
  const clearMaxPrice = () => {
    dispatch({ type: "ClearMaxPrice", payload: null });
  };

  return (
    <FilterContext.Provider
      value={{
        filterState: state,
        setMinPrice,
        setMaxPrice,
        setSearchString,
        addCategory,
        removeCategory,
        clearAllFilters,
        clearMinPrice,
        clearMaxPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
