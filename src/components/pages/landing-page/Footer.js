import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Footer = () => {
  const [formData, setFormData] = useState({
    star_rating: 1,
    name: "",
    no_telepon: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/reviews", formData);
      swal("Success", "Review added successfully!", "success");
      setFormData({
        star_rating: 1,
        name: "",
        no_telepon: "",
        comments: "",
      });
    } catch (error) {
      swal("Error", "Something went wrong. Please try again.", "error");
    }
  };
  return (
    <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6" style={{ textAlign: "justify" }}>
            <h1 className="fw-bold text-danger m-0">
              <span style={{ color: "red" }}>Rujak Klasik</span>
              <span className="text-primary">&</span>
              <span style={{ color: "purple" }}>Bubur Ubi</span>
            </h1>
            <p>Rujak serut, minuman sehat yang cocok dikonsumsi kapan aja dan dimana aja. Makin enak lagi dikonsumsi pas lagi dingin-dinginnya. Boleh banget loh request ekstra es batu, gratis tanpa biaya tambahan</p>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light rounded-circle me-1" href="https://youtube.com/@kbmayuarraffah8886">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a target="_blank" className="btn btn-square btn-outline-light rounded-circle me-1" href="https://youtube.com/@kbmayuarraffah8886">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a target="_blank" className="btn btn-square btn-outline-light rounded-circle me-0" href="https://www.instagram.com/rujak.klasik/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Alamat</h4>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
              Depok, Indonesia
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="me-3" />
              085210303732
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-3" />
              ayusurya954@gmail.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <Link className="btn btn-link" to="/login">
              Admin
            </Link>
            <a className="btn btn-link" href="#contact">
              Contact Us
            </a>
            <a className="btn btn-link" href="#kastemer">
              Customer
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="form-review">
              <h4 className="text-light mb-4">Beri Kami Penilaian!</h4>
              <form onSubmit={handleSubmit}>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <label key={value} style={{ cursor: "pointer" }}>
                      <input type="radio" name="star_rating" value={value} checked={formData.star_rating === value} onChange={handleChange} required style={{ display: "none" }} />
                      <span
                        onClick={() => setFormData({ ...formData, star_rating: value })}
                        style={{
                          fontSize: "1.5em",
                          color: formData.star_rating >= value ? "gold" : "gray",
                        }}
                      >
                        ★
                      </span>
                    </label>
                  ))}
                </div>
                <div className="form-group rating-star row">
                  <div className="col-lg-12 col-6 mb-3 mt-2">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Nama" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-12 col-6 mb-3">
                    <input type="text" className="form-control" id="no_telepon" name="no_telepon" placeholder="No. Telepon" value={formData.no_telepon} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-12 col-6 mb-3">
                    <textarea name="comments" cols="24" rows="4" required placeholder="Komen kamu" className="comment-input" value={formData.comments} onChange={handleChange}></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary rounded-pill py-2 px-3 mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">The Cool Gang</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="https://freewebsitecreate.net">Website Create</a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default Footer;
