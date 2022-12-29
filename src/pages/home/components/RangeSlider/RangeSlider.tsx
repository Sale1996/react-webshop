import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "context/filter/FilterContext";
import { ProductListContext } from "context/productlist/ProductListContext";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import { useTranslation } from "react-i18next";

const RangeSlider = () => {
  const {
    filterState,
    setMinPrice,
    setMaxPrice,
    clearMinPrice,
    clearMaxPrice,
  } = useContext(FilterContext);
  const { minPriceFilter, maxPriceFilter } = filterState;

  const { productListState } = useContext(ProductListContext);
  const { minPrice, maxPrice } = productListState;

  const [currMinPrice, setCurrMinPrice] = useState(0);
  const [currMaxPrice, setCurrMaxPrice] = useState(0);

  useEffect(() => {
    setCurrMinPrice(minPrice);
    setCurrMaxPrice(maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (minPriceFilter !== undefined && maxPriceFilter === undefined) {
      setCurrMinPrice(minPriceFilter);
      setCurrMaxPrice(maxPrice);
    } else if (maxPriceFilter !== undefined && minPriceFilter === undefined) {
      setCurrMinPrice(minPrice);
      setCurrMaxPrice(maxPriceFilter);
    } else if (minPriceFilter !== undefined && maxPriceFilter !== undefined) {
      setCurrMinPrice(minPriceFilter);
      setCurrMaxPrice(maxPriceFilter);
    } else {
      setCurrMinPrice(minPrice);
      setCurrMaxPrice(maxPrice);
    }
  }, [minPrice, maxPrice, minPriceFilter, maxPriceFilter]);

  const handleChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      const userMinPrice = value[0];
      const userMaxPrice = value[1];

      setCurrMinPrice(userMinPrice);
      setCurrMaxPrice(userMaxPrice);

      userMinPrice === minPrice ? clearMinPrice() : setMinPrice(userMinPrice);
      userMaxPrice === maxPrice ? clearMaxPrice() : setMaxPrice(userMaxPrice);
    }
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className="fs-5 fw-semibold mb-2">
        {t("price-range-filter-title", { ns: "homepage" })}
      </div>
      <div className="d-flex justify-content-between">
        <span>{minPrice}</span>
        <span>{maxPrice}</span>
      </div>

      <Range
        range
        value={[currMinPrice, currMaxPrice]}
        onChange={handleChange}
        min={minPrice}
        max={maxPrice}
        trackStyle={{ backgroundColor: "black" }}
        handleStyle={{
          borderColor: "gray",
          backgroundColor: "black",
        }}
      />
      <div className="d-flex justify-content-center">
        <span>{currMinPrice}</span>
        <span className="mx-2">-</span>
        <span>{currMaxPrice}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
