import { FilterState } from "./FilterProvider";

type FilterActions =
  | { type: "ClearAllFilters"; payload: null }
  | { type: "ClearMinPrice"; payload: null }
  | { type: "ClearMaxPrice"; payload: null }
  | { type: "SetMinPrice"; payload: number }
  | { type: "SetMaxPrice"; payload: number }
  | { type: "AddCategory"; payload: string }
  | { type: "SetSearchString"; payload: string }
  | { type: "RemoveCategory"; payload: string };

export const FilterReducer = (
  state: FilterState,
  action: FilterActions
): FilterState => {
  switch (action.type) {
    case "SetMinPrice":
      return {
        ...state,
        minPriceFilter: action.payload,
      };

    case "SetMaxPrice":
      return {
        ...state,
        maxPriceFilter: action.payload,
      };

    case "ClearAllFilters":
      return {
        ...state,
        minPriceFilter: undefined,
        maxPriceFilter: undefined,
        categoryFilter: [],
      };

    case "ClearMinPrice":
      return {
        ...state,
        minPriceFilter: undefined,
      };

    case "ClearMaxPrice":
      return {
        ...state,
        maxPriceFilter: undefined,
      };

    case "AddCategory": {
      const categories = [...state.categoryFilter, action.payload];
      return {
        ...state,
        categoryFilter: categories,
      };
    }

    case "RemoveCategory":
      const categories = state.categoryFilter.filter(
        (c) => c !== action.payload
      );
      return {
        ...state,
        categoryFilter: categories,
      };

    case "SetSearchString":
      return {
        ...state,
        searchString: action.payload,
      };

    default:
      return state;
  }
};
