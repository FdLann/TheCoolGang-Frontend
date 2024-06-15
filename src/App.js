import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
// import Register from "./components/pages/landing-page/Register";
import AddProduct from "./components/pages/Admin/AddProduct";
import Home1 from "./components/pages/Home/Home1";
import ProductList from "./components/pages/Admin/ProductList";
import EditProduct from "./components/pages/Admin/EditProduct";
import Review from "./components/pages/landing-page/Review";
import ReviewList from "./components/pages/Admin/ReviewList";
import AddPromo from "./components/pages/Admin/AddPromo";
import ProtectedRoute from "./ProtectedRoute";
import PromoList from "./components/pages/Admin/PromoList";
import AddCustomerReview from "./components/pages/Admin/AddCustomerReview";
import CustomerReviewList from "./components/pages/Admin/CustomerList";
import CustomerReview from "./components/pages/landing-page/CustomerReview";

import "./bootstrap.scss";
import Register from "./components/Register";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("App render, loggedIn:", loggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route path="/review" element={<Review />} />
          <Route path="/promos" element={<PromoList />} />
          <Route path="/addpromo" element={<AddPromo />} />
          <Route path="/AddCustomer" element={<AddCustomerReview />} />
          <Route path="/CustomerList" element={<CustomerReviewList />} />
          <Route path="/CustomerReview" element={<CustomerReview />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/reviewlist" element={<ReviewList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
