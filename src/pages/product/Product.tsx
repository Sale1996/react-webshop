import { useParams } from "react-router-dom";
import Rating from "components/Rating";
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import styles from "./styles.module.css";
import useProductContext from "./useProductContext";
import Title from "./Components/Title";
import CategoryLabel from "./Components/CategoryLabel";
import Price from "./Components/Price";
import Description from "./Components/Description";
import AddToCardButton from "./Components/AddToCardButton";
import WishlistIcon from "./Components/WishlistIcon";
import ProductImage from "./Components/ProductImage";
import { AppLayout } from "components/Layouts";
import Button from "components/Button";
import { useContext } from "react";
import { CartContext } from "context/cart/CartContext";
import Loading from "components/Loading";
import { useTranslation } from "react-i18next";

const ProductPage = () => {
  const params = useParams();
  const { productID } = params;
  const productState = useProductContext(Number(productID));
  const { removeCartItem } = useContext(CartContext);
  const { t } = useTranslation();

  const { product, loading, error, inCart } = productState;

  return loading ? (
    <AppLayout>
      <Loading />
    </AppLayout>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <AppLayout>
      <Helmet>
        <title>{product.title}</title>
      </Helmet>
      <Row>
        <Col md={6}>
          <ProductImage src={product.image} alt={product.title} />
        </Col>
        <Col md={6}>
          <ul className={styles.productUl}>
            <li>
              <Title title={product.title} />
            </li>
            <li>
              <Rating
                rating={product.rating.rate}
                numReviews={product.rating.count}
              />
            </li>
            <li>
              <Price price={product.price} />
            </li>
            <li>
              <Description description={product.description} />
            </li>
            <li className={styles.arrangeHorizontally}>
              {inCart === false ? (
                <AddToCardButton
                  cartItem={{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  }}
                />
              ) : (
                <Button
                  className={styles.productRemoveButton}
                  onClick={() => removeCartItem(product.id)}
                >
                  {t("remove-from-cart-button", { ns: "productPage" })}
                </Button>
              )}
              <WishlistIcon
                wishlistItem={{
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                }}
              />
            </li>
            <li>
              <CategoryLabel categories={product.category} />
            </li>
          </ul>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default ProductPage;
