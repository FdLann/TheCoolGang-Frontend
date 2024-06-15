import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingBag, FaStar, FaBullhorn, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../card.css"; // Import custom CSS for styling

function ProductCountCard() {
  const [productCount, setProductCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [promoCount, setPromoCount] = useState(0);
  const [customerReviewCount, setCustomerReviewCount] = useState(0); // State for customer review count

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product count
        const productResponse = await axios.get("http://localhost:5000/products");
        setProductCount(productResponse.data.length);

        // Fetch review count
        const reviewResponse = await axios.get("http://localhost:5000/reviews");
        setReviewCount(reviewResponse.data.length);

        // Fetch promo count
        const promoResponse = await axios.get("http://localhost:5000/promos");
        setPromoCount(promoResponse.data.length);

        // Fetch customer review count
        const customerReviewResponse = await axios.get("http://localhost:5000/api/customers");
        setCustomerReviewCount(customerReviewResponse.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card product-count-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <FaShoppingBag className="icon" />
                <div className="ms-3">
                  <h5 className="card-title">{productCount}</h5>
                  <p className="card-text">Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card review-count-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <FaStar className="icon" />
                <div className="ms-3">
                  <h5 className="card-title">{reviewCount}</h5>
                  <p className="card-text">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card promo-count-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <FaBullhorn className="icon" />
                <div className="ms-3">
                  <h5 className="card-title">{promoCount}</h5>
                  <p className="card-text">Promos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card customer-review-count-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <FaUser className="icon" />
                <div className="ms-3">
                  <h5 className="card-title">{customerReviewCount}</h5>
                  <p className="card-text">Testimonials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCountCard;
