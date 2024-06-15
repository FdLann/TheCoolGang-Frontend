import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Promo1 = () => {
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
      <div className="container">
        <h2 className="text-center mb-5">Promosi Kami</h2>
        <Carousel>
          {promos.map((promo) => (
            <Carousel.Item key={promo.id}>
              <img className="d-block w-100" src={`http://localhost:5000/${promo.imageUrl}`} alt={promo.title} /> {/* Perhatikan bahwa URL gambar di sini harus diawali dengan '/' */}
              <Carousel.Caption>
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Promo1;
