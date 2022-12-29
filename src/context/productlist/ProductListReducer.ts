import { FilterState } from "context/filter/FilterProvider";
import { IProduct } from "interfaces";
import { ProductListState, SortType } from "./ProductListProvider";

type ProductListAction =
  | { type: "ReadProducts"; payload: IProduct[] }
  | { type: "FilterProducts"; payload: FilterState }
  | { type: "SortProducts"; payload: SortType };

export const ProductListReducer = (
  state: ProductListState,
  action: ProductListAction
): ProductListState => {

  switch (action.type) {

    case "ReadProducts": {
      const priceArray = action.payload.map((product) => product.price);
      const minPrice = Math.min(...priceArray);
      const maxPrice = Math.max(...priceArray);

      const categories = action.payload
        .map((product) => product.category)
        .filter((v, i, a) => a.indexOf(v) === i);

      return {
        ...state,
        categories: categories,
        maxPrice: maxPrice,
        minPrice: minPrice,
        allProducts: action.payload,
        filteredProducts: action.payload
      };
    }

    case "FilterProducts": {
      const filterState = action.payload;

      let filteredProducts = state.allProducts;
      if (filterState.categoryFilter.length > 0) {
        filteredProducts = filteredProducts.filter((p) => {
          return filterState.categoryFilter.includes(p.category);
        });
      }

      filteredProducts = filteredProducts.filter((p) => {
        if (filterState.minPriceFilter !== undefined) {
          return p.price >= filterState.minPriceFilter;
        }
        return true;
      });

      filteredProducts = filteredProducts.filter((p) => {
        if (filterState.maxPriceFilter !== undefined) {
          return p.price <= filterState.maxPriceFilter;
        }
        return true;
      });

      if (filterState.searchString.length !== 0) {
        console.log("search");
        filteredProducts = filteredProducts.filter((p) => {
          return p.title.toLowerCase().includes(filterState.searchString.toLowerCase());
        });
      }

      return {
        ...state,
        filteredProducts: filteredProducts,
      };
    }

    case "SortProducts": {
      let compare = (a: IProduct, b: IProduct): number => {
        return 0;
      };

      switch (action.payload) {
        case SortType.Latest:
          compare = (a: IProduct, b: IProduct) => {
            if (a.id > b.id) return +1;
            if (a.id < b.id) return -1;
            return 0;
          };
          break;

        case SortType.Rating:
          compare = (a: IProduct, b: IProduct) => {
            if (a.rating.rate > b.rating.rate) return -1;
            if (a.rating.rate < b.rating.rate) return +1;
            return 0;
          };
          break;

        case SortType.PriceLowToHigh:
          compare = (a: IProduct, b: IProduct) => {
            if (a.price > b.price) return +1;
            if (a.price < b.price) return -1;
            return 0;
          };
          break;

        case SortType.PriceHighToLow:
          compare = (a: IProduct, b: IProduct) => {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return +1;
            return 0;
          };
          break;
      }

      const sortedProducts = [...state.allProducts].sort(compare);

      return { ...state, allProducts: sortedProducts };
    }

    default:
      return state;
  }
};
