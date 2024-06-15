import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import $ from "jquery"; // Import jQuery for the scroll handling

const Navbar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading time

    const handleScroll = () => {
      if (window.innerWidth < 992) {
        if (window.scrollY > 45) {
          $(".fixed-top").addClass("bg-white shadow");
        } else {
          $(".fixed-top").removeClass("bg-white shadow");
        }
      } else {
        if (window.scrollY > 45) {
          $(".fixed-top").addClass("bg-white shadow").css("top", -45);
        } else {
          $(".fixed-top").removeClass("bg-white shadow").css("top", 0);
        }
      }
    };

    const handleBackToTopButton = () => {
      if (window.scrollY > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleBackToTopButton);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleBackToTopButton);
    };
  }, []);

  return (
    <>
      {loading && (
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      )}

      <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s" id="home">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex bg-white">
          <div className="col-lg-6 px-5 text-start">
            <small>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              Depok, Indonesia
            </small>
            <small className="ms-4">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Rujakklasik.ayuputu552@gmail.com
            </small>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <a className="text-body ms-3" href="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="text-body ms-3" href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="text-body ms-3" href="/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="text-body ms-3" href="https://www.instagram.com/rujak.klasik/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="fw-bold text-danger m-0">
              <span style={{ color: "red" }}>Rujak Klasik</span>
              <span className="text-primary">&</span>
              <span style={{ color: "purple" }}>Bubur Ubi</span>
            </h1>
          </a>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="#about" className="nav-item nav-link active">
                Tentang Kami
              </a>
              <a href="#prodak" className="nav-item nav-link active">
                Produk Kami
              </a>
            </div>
          </div>
        </nav>
      </div>

      <button className="btn btn-primary back-to-top" style={{ display: "none" }}>
        <i className="fa fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Navbar;
