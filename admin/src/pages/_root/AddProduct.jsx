import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import VITE_BACKEND_ENDPOINT from "../../config/env";
import { GlobalState } from "../../context/Context";
import { toast } from "react-toastify";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const { token } = useContext(GlobalState);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        `${VITE_BACKEND_ENDPOINT}/products`,
        formData,
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      );

      if (response.data.success) {
        setName("");
        setDescription("");
        setCategory("");
        setSubCategory("");
        setPrice("");
        setSizes([]);
        setBestseller(false);
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Unauthorized access!");
    }
  };

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <>
      <div className="px-8 lg:px-22 py-10">
        <form className="flex flex-col gap-5" onSubmit={onSubmitHandler}>
          {/* Upload Images */}
          <div className="space-y-3">
            <p className="text-light-gray">Upload Image</p>
            {/* Images */}
            <div className="flex gap-3">
              <div>
                <label htmlFor="image1" className="cursor-pointer">
                  <img
                    src={
                      image1 ? URL.createObjectURL(image1) : assets.upload_area
                    }
                    alt="Upload Image Icon"
                    className="w-22"
                  />
                </label>
                <input
                  type="file"
                  id="image1"
                  hidden
                  required
                  onChange={(e) => setImage1(e.target.files[0])}
                />
              </div>

              <div>
                <label htmlFor="image2" className="cursor-pointer">
                  <img
                    src={
                      image2 ? URL.createObjectURL(image2) : assets.upload_area
                    }
                    alt="Upload Image Icon"
                    className="w-22"
                  />
                </label>
                <input
                  type="file"
                  id="image2"
                  hidden
                  onChange={(e) => setImage2(e.target.files[0])}
                />
              </div>

              <div>
                <label htmlFor="image3" className="cursor-pointer">
                  <img
                    src={
                      image3 ? URL.createObjectURL(image3) : assets.upload_area
                    }
                    alt="Upload Image Icon"
                    className="w-22"
                  />
                </label>
                <input
                  type="file"
                  id="image3"
                  hidden
                  onChange={(e) => setImage3(e.target.files[0])}
                />
              </div>

              <div>
                <label htmlFor="image4" className="cursor-pointer">
                  <img
                    src={
                      image4 ? URL.createObjectURL(image4) : assets.upload_area
                    }
                    alt="Upload Image Icon"
                    className="w-22"
                  />
                </label>
                <input
                  type="file"
                  id="image4"
                  hidden
                  onChange={(e) => setImage4(e.target.files[0])}
                />
              </div>
            </div>
          </div>

          {/* Product name */}
          <div className="flex flex-col space-y-3">
            <label htmlFor="product-name" className="text-light-gray">
              Product name
            </label>
            <input
              type="text"
              id="product-name"
              placeholder="Type here"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="p-2 border border-gray-300 rounded-lg max-w-[578px]"
            />
          </div>

          {/* Product description */}
          <div className="flex flex-col space-y-3">
            <label htmlFor="product-description" className="text-light-gray">
              Product description
            </label>
            <textarea
              type="text"
              id="product-description"
              placeholder="Write content here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
              className="p-2 border border-gray-300 rounded-lg max-w-[578px]"
            />
          </div>

          <div className="md:flex md:gap-10 md:w-full space-y-3 md:space-y-0">
            {/* Product category */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="product-category" className="text-light-gray">
                Product category
              </label>
              <select
                id="product-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            {/* Product sub-category */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="product-subcategory" className="text-light-gray">
                Sub category
              </label>
              <select
                id="product-subcategory"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Sub category</option>
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>

            {/* Product price */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="product-price" className="text-light-gray">
                Product price
              </label>
              <input
                type="number"
                id="product-price"
                min={1}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded-lg md:max-w-43"
                placeholder="100"
              />
            </div>
          </div>

          {/* Product sizes */}
          <div className="flex flex-col space-y-3">
            <p className="text-light-gray">Product sizes</p>
            {/* Sizes selection */}
            <div className="flex gap-3">
              <p
                className={`px-3 py-1 bg-[#E2E8F0] cursor-pointer ${
                  sizes.includes("S") && "border border-red"
                }`}
                onClick={() => toggleSize("S")}
              >
                S
              </p>
              <p
                className={`px-3 py-1 bg-[#E2E8F0] cursor-pointer ${
                  sizes.includes("M") && "border border-red"
                }`}
                onClick={() => toggleSize("M")}
              >
                M
              </p>
              <p
                className={`px-3 py-1 bg-[#E2E8F0] cursor-pointer ${
                  sizes.includes("L") && "border border-red"
                }`}
                onClick={() => toggleSize("L")}
              >
                L
              </p>
              <p
                className={`px-3 py-1 bg-[#E2E8F0] cursor-pointer ${
                  sizes.includes("XL") && "border border-red"
                }`}
                onClick={() => toggleSize("XL")}
              >
                XL
              </p>
              <p
                className={`px-3 py-1 bg-[#E2E8F0] cursor-pointer ${
                  sizes.includes("XXL") && "border border-red"
                }`}
                onClick={() => toggleSize("XXL")}
              >
                XXL
              </p>
            </div>
          </div>

          {/* Product best-seller */}
          <div className="flex gap-3">
            <input
              checked={bestseller}
              onChange={() => setBestseller(!bestseller)}
              type="checkbox"
              id="product-bestseller"
              className="rounded-lg"
            />
            <label htmlFor="product-bestseller">Add to bestseller</label>
          </div>

          {/* Submit Data */}
          <div className="w-20">
            <button type="submit" className="add-to-cart w-full">
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
