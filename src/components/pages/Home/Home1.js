import React from "react";
import Navbar from "../landing-page/Navbar";
import Carousel from "../landing-page/Home";
import Promo from "../landing-page/Promo";
import About from "../landing-page/About";
// import ProductSection from "../landing-page/Produk";
import CostumerReview from "../landing-page/CustomerReview";
import Testimonials from "../landing-page/Costumer2";
import AlamatKami from "../landing-page/Dokumentasi";
import Projects from "../landing-page/Alamat";
import Footer from "../landing-page/Footer";
import Product1 from "../landing-page/product1";
import Review from "../landing-page/Review";

const Home1 = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      {/* <Promo /> */}
      <Review />
      <About />
      <Product1 />
      {/* <ProductSection /> */}
      <CostumerReview />
      <Testimonials />
      <AlamatKami />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home1;
