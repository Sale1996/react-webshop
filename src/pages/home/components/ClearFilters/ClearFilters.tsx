import { FilterContext } from "context/filter/FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const ClearFilters = () => {
  const {
    filterState,
    clearAllFilters,
    clearMinPrice,
    clearMaxPrice,
    removeCategory,
  } = useContext(FilterContext);
  const { categoryFilter } = filterState;
  const { t } = useTranslation();

  const clearAllEnabled =
    filterState.minPriceFilter !== undefined ||
    filterState.maxPriceFilter !== undefined ||
    categoryFilter.length > 0;

  const categoryElements = categoryFilter.map((category) => {
    return (
      <button
        className="mx-1 btn btn-sm btn-outline-secondary"
        onClick={() => removeCategory(category)}
      >
        <FontAwesomeIcon icon={faTimes} /> {category}
      </button>
    );
  });

  return (
    <div className="d-flex" style={{ minHeight: "2em" }}>
      {clearAllEnabled ? (
        <button
          className="mx-1 btn btn-sm btn-outline-secondary"
          onClick={() => clearAllFilters()}
        >
          <FontAwesomeIcon icon={faTimes} />{" "}
          {t("clear-filters", { ns: "homepage" })}
        </button>
      ) : (
        ""
      )}

      {filterState.minPriceFilter !== undefined ? (
        <button
          className="mx-1 btn btn-sm btn-outline-secondary"
          onClick={() => clearMinPrice()}
        >
          <FontAwesomeIcon icon={faTimes} />{" "}
          {t("min-price-filter", { ns: "homepage" })}
          {filterState.minPriceFilter}
        </button>
      ) : (
        ""
      )}

      {filterState.maxPriceFilter !== undefined ? (
        <button
          className="mx-1 btn btn-sm btn-outline-secondary"
          onClick={() => clearMaxPrice()}
        >
          <FontAwesomeIcon icon={faTimes} />{" "}
          {t("max-price-filter", { ns: "homepage" })}
          {filterState.maxPriceFilter}
        </button>
      ) : (
        ""
      )}

      {categoryFilter.length > 0 ? categoryElements : ""}
    </div>
  );
};

export default ClearFilters;
