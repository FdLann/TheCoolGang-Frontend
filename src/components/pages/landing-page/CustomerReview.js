import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerReviewCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/customers"); // Ensure the endpoint matches your backend
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleImageClick = (reviewId) => {
    navigate(`/review/${reviewId}`);
  };

  return (
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
      <div className="container" id="kastemer">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
          <h1 className="display-5 mb-3">Testimoni Reviews</h1>
          <p>Penilaian terhadap customer yang sudah membeli produk kami.</p>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto" style={{ width: "55%" }}>
            <Carousel interval={3000} wrap={true} controls={true} indicators={true} fade>
              {reviews.map((review) => (
                <Carousel.Item key={review.id}>
                  <div className="d-flex justify-content-center">
                    <img src={`http://localhost:5000${review.imageUrl}`} className="d-block w-75" alt="Review" onClick={() => handleImageClick(review.id)} style={{ cursor: "pointer" }} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCarousel;
