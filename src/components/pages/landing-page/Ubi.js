import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ubi1 from "../../images/fotoubi6000150g.jpeg";
import ubi2 from "../../images/fotoubiunguterbaru.jpeg";
import ubi3 from "../../images/fotoubi3.JPG";
import ubi4 from "../../images/fotoubi2.JPG";

function UbiSection() {
  return (
    <div id="tab-2" className="tab-pane fade show p-0">
      <div className="row g-4">
        <div className="col-xl-3 col-lg-4 col-md-6">
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
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="product-item">
            <div className="position-relative bg-light overflow-hidden">
              <img className="img-fluid w-100" src={ubi4} alt="Ubi 4" />
              <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5 mb-2" href="">
                Ubi Ungu
              </a>
              <span className="text-primary me-1">Rp 7.000</span>
              <span className="text-body text-decoration-line-through">Rp 11.000</span>
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
  );
}

export default UbiSection;
