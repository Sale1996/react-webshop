import { ProductListContext } from "context/productlist/ProductListContext";
import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { SortType } from "context/productlist/ProductListProvider";
import { useTranslation } from "react-i18next";

const SortList = () => {
  const { sortProducts } = useContext(ProductListContext);

  const { t } = useTranslation();

  return (
    <span>
      <Dropdown className="d-inline">
        <Dropdown.Toggle variant="dark">
          {t("sort-by-button", { ns: "homepage" })}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => sortProducts(SortType.Latest)}>
            {t("sort-by-latest", { ns: "homepage" })}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => sortProducts(SortType.Rating)}>
            {t("sort-by-average-rating", { ns: "homepage" })}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => sortProducts(SortType.PriceLowToHigh)}>
            {t("sort-by-price-l-to-h", { ns: "homepage" })}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => sortProducts(SortType.PriceHighToLow)}>
            {t("sort-by-price-h-to-l", { ns: "homepage" })}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </span>
  );
};

export default SortList;
