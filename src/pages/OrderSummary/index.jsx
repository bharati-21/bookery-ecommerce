import { useOrders } from "contexts";
import loadingImage from "assets/images/loader.svg";
import { useParams } from "react-router-dom";

const OrderSummary = () => {
  const { orders, ordersLoading, ordersError } = useOrders();
  const { orderId } = useParams();
  const order = orders?.find((order) => order.orderId === orderId);

  return (
    <main className="main order-summary-main my-2 mx-auto px-3 py-2">
      {ordersLoading ? (
        <img
          src={ordersLoading}
          alt="Loading svg"
          className="img img-responsive mx-auto"
        />
      ) : ordersError ? (
        <h1 className="error text error-color my-2 text-center">
          {ordersError}
        </h1>
      ) : (
        <section className="cart-wrapper mx-auto">
          <h2 className="main-head mb-2 py-0-25 text-center">Order Summary</h2>

          {order ? <div></div> : <h4>No such order found!</h4>}
        </section>
      )}
    </main>
  );
};

export { OrderSummary };
