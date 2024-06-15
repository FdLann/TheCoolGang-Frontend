import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import blank2GridsCollage from "../../images/promo1.png"; // Adjust the path as necessary

// Add icons to the library
library.add(faWhatsapp);

const Promo = () => {
  return (
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
      <div className="container" id="kastemer">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
          {/* Optional Section Header Content */}
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="about-img position-relative overflow-hidden p-5 pe-0 align-items-center">
                <img className="img-fluid w-60" src={blank2GridsCollage} alt="Promotion" />
              </div>
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <br />
              <h1 className="display-5 mb-3">Promosi Kami</h1>
              <p className="text-justify">
                <strong style={{ fontSize: "20px", color: "#000000" }}>
                  Dapatkan harga khusus untuk berbagai macam acara: <br />
                  • Jum'at berkah <br />
                  • Arisan <br />
                  • Pernikahan <br />
                  • Seminar <br />
                  • Tujuh bulanan <br />
                  • dan lain-lain. <br />
                  Kami siap menyediakan rujak klasik dan bubur ubi ungu yang spesial.
                </strong>
              </p>
              <br />
              <a className="text-body" target="_blank" rel="noopener noreferrer" href="https://wa.me/6285210303732?text=saya%20ingin%20memesan%20promo">
                <FontAwesomeIcon icon={["fab", "whatsapp"]} className="fa-2x text-primary me-2" />
                Pesan Disini
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
