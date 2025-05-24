import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context from "./context/Context.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/_root/Home.jsx";
import Collection from "./pages/_root/Collection.jsx";
import Cart from "./pages/_root/Cart.jsx";
import Contact from "./pages/_root/Contact.jsx";
import About from "./pages/_root/About.jsx";
import ProductDetail from "./pages/_root/ProductDetail.jsx";
import Order from "./pages/_root/Order.jsx";
import NotFound from "./pages/_error/NotFound.jsx";
import Error from "./pages/_error/Error.jsx";
import SignUp from "./pages/_auth/SignUp.jsx";
import SignIn from "./pages/_auth/SignIn.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/product/:id"
        element={<ProductDetail />}
        errorElement={<Error />}
      />
      <Route path="/order" element={<Order />} />

      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      
      // Error handling router | Not Found page
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Context>
);
