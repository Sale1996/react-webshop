import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";
import RangeSlider from "./components/RangeSlider";
import ClearFilters from "./components/ClearFilters";
import SortList from "./components/SortList";
import SearchProduct from "./components/SearchProduct";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <Headline title={t("title", { ns: "homepage" })} />

      <div className="container mt-5">
        <div className="row">
          <div className="mh-100" style={{ width: "15em" }}>
            <div>
              <RangeSlider />
            </div>
            <div className="mt-4">
              <Categories />
            </div>
          </div>
          <div className="col">
            <div className="row m-1">
              <div className="d-flex flex-row-reverse">
                <div>
                  <SearchProduct />
                </div>
                <div className="me-4">
                  <SortList />
                </div>
              </div>
            </div>
            <div className="row">
              <ClearFilters />
            </div>
            <div className="row">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
