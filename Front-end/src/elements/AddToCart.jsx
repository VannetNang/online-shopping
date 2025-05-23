import { assets } from "../assets/data.js";

const AddToCart = () => {
  return (
    <button className="add-to-cart flex-center">
      <img src={assets.button_cart} alt="Cart Button" width={22} className="invert" />
      <p className="px-2"> Add to Cart </p>
    </button>
  );
};

export default AddToCart;
