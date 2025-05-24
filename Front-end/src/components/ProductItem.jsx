import { useNavigate } from "react-router-dom";

const ProductItem = ({
  productId,
  productImage,
  productName,
  productPrice,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/product/${productId}`)}
        className="cursor-pointer flex-col max-w-[280px] mb-7"
      >
        <img
          src={productImage}
          alt="Product Image"
          className="hover:scale-95"
        />
        <p className="px-2">{productName}</p>
        <p className="px-2">${productPrice}</p>
      </div>
    </>
  );
};

export default ProductItem;
