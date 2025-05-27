import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Title from "../elements/Title";

const TotalSummary = () => {
  const { cartItems } = useContext(GlobalState);
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);
  const [shippingFee] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // initial acc = 0
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(total.toFixed(2));
    setTotal((total + shippingFee).toFixed(2));
  }, [cartItems]);

  return (
    <>
      <div className="flex justify-start mb-4">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex-between">
        <p>Subtotal</p>
        <p>$ {subTotal}</p>
      </div>

      <div className="flex-between border-t-1 border-gray-200 pt-2">
        <p>Shipping Fee</p>
        <p>$ {shippingFee.toFixed(2)}</p>
      </div>

      <div className="flex-between font-semibold border-t-1 border-gray-200 pt-2">
        <p>Total</p>
        <p>$ {total}</p>
      </div>

      <div
        className="flex justify-end mt-4"
        onClick={() => navigate("/place-order")}
      >
        <button className="button">PROCEED TO CHECKOUT</button>
      </div>
    </>
  );
};

export default TotalSummary;
