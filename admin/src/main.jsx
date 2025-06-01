import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/_root/Home.jsx";
import AddProduct from "./pages/_root/AddProduct.jsx";
import UpdateProduct from "./pages/_root/UpdateProduct.jsx";
import ViewProduct from "./pages/_root/ViewProducts.jsx";
import ViewOrdered from "./pages/_root/ViewOrdered.jsx";
import NotFound from "./pages/_error/NotFound.jsx";
import Context from "./context/Context.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/view-products" element={<ViewProduct />} />
        <Route path="/view-product-order" element={<ViewOrdered />} />
      </Route>

      {/* Error handling router | Not Found page */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
