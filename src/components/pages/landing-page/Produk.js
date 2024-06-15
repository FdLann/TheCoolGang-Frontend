import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import rujak1 from "../../images/fotoproduk1rujak.JPG";
import rujak2 from "../../images/fotoangel2.jpeg";
import rujak3 from "../../images/fotoproduk2rujak.JPG";
import ubi1 from "../../images/fotoubi6000150g.jpeg";
import ubi2 from "../../images/fotoubiunguterbaru.jpeg";
import ubi3 from "../../images/fotoubi3.JPG";
import ubi4 from "../../images/fotoubi2.JPG";

function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState("rujak");

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container" id="prodak">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div className="section-header text-start mb-5">
              <h1 className="display-5 mb-3">Produk Kami</h1>
              <p>Produk kami sangat berkualitas dan juga fresh tentunya</p>
            </div>
          </div>
          <div className="col-lg-6 text-start text-lg-end">
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              <li className="nav-item me-2">
                <a className={`btn btn-outline-primary border-2 ${selectedProduct === "rujak" ? "active" : ""}`} data-bs-toggle="pill" href="#tab-1" onClick={() => handleProductChange("rujak")}>
                  Rujak
                </a>
              </li>
              <li className="nav-item me-2">
                <a className={`btn btn-outline-primary border-2 ${selectedProduct === "ubi" ? "active" : ""}`} data-bs-toggle="pill" href="#tab-2" onClick={() => handleProductChange("ubi")}>
                  Ubi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          {selectedProduct === "rujak" && (
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {/* Rujak Products */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src={rujak3} alt="Rujak 3" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Rujak Klasik (500g)
                      </a>
                      <span className="text-primary me-1">Rp 30.000</span>
                      <span className="text-body text-decoration-line-through">Rp 35.000</span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="/">
                          <i className="fa fa-eye text-primary me-2"></i>View detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" target="_blank" href="https://wa.me/6285210303732?text=saya%20ingin%20memesan%20ukuran%20500g%20rujak%20klasik">
                          <FontAwesomeIcon icon={faWhatsapp} className="text-primary me-2" />
                          Pesan Disini
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  {/* ... your rujak product items here*/}
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100 ratio ratio-1x1" src={rujak2} alt="Rujak 2" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Rujak Klasik (250 g)
                      </a>
                      <span className="text-primary me-1">Rp 15.000</span>
                      <span className="text-body text-decoration-line-through">Rp20.000</span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" target="_blank" href="https://wa.me/6285210303732?text=saya%20ingin%20memesan%20ukuran%20250g%20rujak%20klasik">
                          <FontAwesomeIcon icon={faWhatsapp} className="text-primary me-2" />
                          Pesan Disini
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  {/* ... your rujak product items here*/}
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100 ratio ratio-1x1" style={{ width: "300px" }} src={rujak1} alt="Rujak 1" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Rujak Klasik
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedProduct === "ubi" && (
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {/* Rujak Products */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                  {/* ... your rujak product items here*/}
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src={ubi1} alt="Ubi 1" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Ubi Ungu (150g)
                      </a>
                      <span className="text-primary me-1">Rp 6.000</span>
                      <span className="text-body text-decoration-line-through">Rp 10.000</span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" target="_blank" href="https://wa.me/6285210303732?text=saya%20ingin%20memesan%20ukuran%20250g%20rujak%20klasik">
                          <FontAwesomeIcon icon={faWhatsapp} className="text-primary me-2" />
                          Pesan Disini
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  {/* ... your rujak product items here*/}
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src={ubi2} alt="Ubi 2" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Ubi Ungu
                      </a>
                      <span className="text-primary me-1">Rp 6.000</span>
                      <span className="text-body text-decoration-line-through">Rp 10.000</span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" target="_blank" href="https://wa.me/6285210303732?text=saya%20ingin%20memesan%20ukuran%20250g%20rujak%20klasik">
                          <FontAwesomeIcon icon={faWhatsapp} className="text-primary me-2" />
                          Pesan Disini
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  {/* ... your rujak product items here*/}
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src={ubi3} alt="Ubi 3" />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        Ubi Ungu (300g)
                      </a>
                      <span className="text-primary me-1">Rp 10.000</span>
                      <span className="text-body text-decoration-line-through">Rp 15.000</span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" target="_blank" href="https://wa.me/6285210303732?text=saya%20ingin%20memesan%20ukuran%20250g%20rujak%20klasik">
                          <FontAwesomeIcon icon={faWhatsapp} className="text-primary me-2" />
                          Pesan Disini
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
