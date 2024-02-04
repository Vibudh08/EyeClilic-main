import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Shop from "./Components/shop/shop";
import Aboutus from "./Components/aboutus/Aboutus";
import Contactus from "./Components/contact/Contactus";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/account/Profile";
import Orders from "./Components/account/Orders";
import Address from "./Components/account/Address";
import Wishlist from "./Components/account/Wishlist";
import ProductDetails from "./Components/productDetails/productDetails";
import PasswordRecovery from "./Components/account/PasswordRecovery";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<Address />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
