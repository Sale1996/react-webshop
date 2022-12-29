import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FilterContext } from "context/filter/FilterContext";
import { useTranslation } from "react-i18next";

const SearchProduct = () => {
  const { setSearchString } = useContext(FilterContext);
  const [search, setSearch] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchString(search);
  };

  const { t } = useTranslation();

  return (
    <span>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder={t("search-input-text", { ns: "homepage" }) || ""}
            aria-label={t("search-input-text", { ns: "homepage" }) || ""}
            aria-describedby="basic-addon1"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
          />
          <button
            className="btn btn-outline-secondary"
            style={{ zIndex: "0" }}
            type="submit"
            id="basic-addon1"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </span>
  );
};

export default SearchProduct;
