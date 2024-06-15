import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "../card.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => <i key={i} className={`fa${i < rating ? "s" : "r"} fa-star`} style={{ color: "#f39c12" }} />);
  };

  return (
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
      <div className="container" id="kastemer">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
          <h1 className="display-5 mb-3">REVIEW Customer!!!</h1>
        </div>
        <Carousel className="testimonial-container" interval={null} indicators={false}>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-item position-relative bg-white p-5 mt-4">
                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p className="testimonial-text mb-4">{review?.comments}</p>
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 rounded-circle" src={`https://via.placeholder.com/100?text=${review?.name?.charAt(0)}`} alt="" style={{ width: "100px", height: "100px" }} />
                  <div className="ms-3">
                    <h5 className="testimonial-name mb-1">{review?.name}</h5>
                    <div className="testimonial-rating">{renderStars(review?.star_rating)}</div>
                    <span className="testimonial-telephone">No. Telepon: {review?.no_telepon}</span>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
