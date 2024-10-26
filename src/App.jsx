import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import { useState } from "react";
import LayoutWithNavbar from "./components/layout/LayoutWithNavbar";
import LayoutWithoutNavbar from "./components/layout/WithoutNvbr";
import About from "./pages/About";

function App() {
  const [detailedItem, setDetailedItem] = useState();

  return (
    <Routes>
      <Route element={<LayoutWithNavbar />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product setDetailedItem={setDetailedItem} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details" element={<ProductDetails detailedItem={detailedItem} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<LayoutWithoutNavbar />}>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
