import Loading from "components/Loading";
import { ProductListContext } from "context/productlist/ProductListContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const ProductList = () => {
  const { productListState } = useContext(ProductListContext);
  const { filteredProducts } = productListState;

  let productList = <Loading />;

  if (filteredProducts.length > 0) {
    productList = (
      <>
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="me-1" style={{ width: "13rem" }}>
              <ProductCard product={product} />
            </div>
          </Link>
        ))}
      </>
    );
  }

  return (
    <div className="d-flex flex-wrap justify-content-around">{productList}</div>
  );
};

export default ProductList;
