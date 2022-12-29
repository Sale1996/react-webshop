import { FilterContext } from "context/filter/FilterContext";
import { ProductListContext } from "context/productlist/ProductListContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { filterState, addCategory, removeCategory } =
    useContext(FilterContext);
  const { productListState } = useContext(ProductListContext);
  const { categories } = productListState;
  const { categoryFilter } = filterState;

  const SelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      addCategory(event.target.id);
    } else {
      removeCategory(event.target.id);
    }
  };

  const { t } = useTranslation();

  return (
    <form>
      <div className="fs-5 fw-semibold mb-2">
        {t("categories-title", { ns: "homepage" })}
      </div>
      {categories.map((category) => (
        <div key={category} className="form-check">
          <input
            id={category}
            type="checkbox"
            checked={categoryFilter.includes(category)}
            onChange={SelectHandler}
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor={category}>
            {category}
          </label>
        </div>
      ))}
    </form>
  );
};

export default Categories;
