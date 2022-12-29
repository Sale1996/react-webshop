import Headline from "components/Headline";
import { AppLayout } from "components/Layouts";
import CheckoutForm from "./components/CheckoutForm";

const Checkout = () => {
  return (
    <AppLayout>
      <Headline title="Checkout" />
      <CheckoutForm />
    </AppLayout>
  );
};

export default Checkout;
