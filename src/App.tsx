import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
// this is example provider
import { CounterProvider } from "./context/counter/CounterProvider";
import {
  HomePage,
  ExamplePage,
  NotFoundPage,
  CartPage,
  AccountPage,
  CheckoutPage,
  RegisterPage,
} from "pages";
import ProductPage from "pages/product/Product";
import { ProductListProvider } from "context/productlist/ProductListProvider";
import { FilterProvider } from "context/filter/FilterProvider";
import { WishlistProvider } from "context/wishlist/WishlistProvider";
import { AccountProvider } from "context/account/AccountProvider";
import { ToastContainer, Slide } from "react-toastify";

function App() {
  return (
    <AccountProvider>
      <CounterProvider>
        <CartProvider>
          <WishlistProvider>
            <FilterProvider>
              <ProductListProvider>
                <div>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/example" element={<ExamplePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route
                      path="/product/:productID"
                      element={<ProductPage />}
                    />
                  </Routes>
                  <ToastContainer
                    position="top-center"
                    hideProgressBar={true}
                    autoClose={2000}
                    transition={Slide}
                    toastStyle={{
                      backgroundColor: "#e3e8fa",
                      opacity: 0.7,
                      color: "black",
                      textAlign: "center",
                      textTransform: "lowercase",
                      fontVariant: "small-caps",
                      fontWeight: 700,
                    }}
                  />
                </div>
              </ProductListProvider>
            </FilterProvider>
          </WishlistProvider>
        </CartProvider>
      </CounterProvider>
    </AccountProvider>
  );
}

export default App;
