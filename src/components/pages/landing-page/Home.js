import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import fotoproduk4 from "../../images/fotoproduk4 bagus.JPG";
import fotoubi3 from "../../images/fotoubi3.JPG";

const CarouselComponent = () => {
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <Carousel id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <Carousel.Item>
          <img className="w-100" src={fotoproduk4} alt="Fresh Rujak Klasik" />
          <Carousel.Caption className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                  <h1 className="display-2 mb-5 animated slideInDown text-white" style={{ textShadow: "5px 5px red" }}>
                    Fresh Rujak Klasik
                  </h1>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={fotoubi3} alt="Bubur Ubi Ungu" />
          <Carousel.Caption className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                  <h1 className="display-2 mb-5 animated slideInDown text-white" style={{ textShadow: "5px 5px rgb(100, 2, 113)" }}>
                    Bubur Ubi Ungu
                  </h1>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
