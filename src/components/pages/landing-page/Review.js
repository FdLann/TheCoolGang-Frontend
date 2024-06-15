import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add icons to the library
library.add(faWhatsapp);

const Promo = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/promos");
        setPromos(response.data);
      } catch (error) {
        console.error("Error fetching promos:", error);
      }
    };

    fetchPromos();
  }, []);

  return (
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
      <div className="container" id="kastemer">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
          <h1 className="display-5 mb-3">Promo Kami!!!</h1>
        </div>

        {/* Carousel */}
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12">
            <Carousel>
              {promos.map((promo) => (
                <Carousel.Item key={promo.id}>
                  <div className="row">
                    <div className="col-md-6">
                      <img className="d-block w-100" src={`http://localhost:5000${promo.imageUrl}`} alt={promo.title} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <div>
                        <h3>{promo.title}</h3>
                        <p>{promo.description}</p>
                        <a className="text-body" target="_blank" rel="noopener noreferrer" href="https://wa.me/6285210303732?text=saya%20ingin%20memesan%20promo">
                          <FontAwesomeIcon icon={["fab", "whatsapp"]} className="fa-2x text-primary me-2" />
                          Pesan Disini
                        </a>
                      </div>
                    </div>
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

export default Promo;
