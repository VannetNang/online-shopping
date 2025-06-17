import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GlobalState } from "../../context/Context";
import VITE_BACKEND_ENDPOINT from "../../config/env";

const VerifyStripe = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token, setQuantity, setCartItems } = useContext(GlobalState);

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyStripePayment = async () => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_ENDPOINT}/place-order/verify`,
        { orderId, success },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await response.data;

      if (data.success) {
        navigate("/order");
        setCartItems([]);
        setQuantity(0);
      } else {
        console.log("hi");
        navigate("/cart");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    verifyStripePayment();
  }, []);

  return <></>;
};

export default VerifyStripe;
