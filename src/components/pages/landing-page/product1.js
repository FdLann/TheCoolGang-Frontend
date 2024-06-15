import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Modal, Button } from "react-bootstrap"; // Import modal and button components
import ScrollReveal from "scrollreveal";

function Product1() {
  const [selectedProduct, setSelectedProduct] = useState("rujak");
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  const handleViewDetail = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
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
                {products.slice(0, 3).map((product) => (
                  <div className="col-xl-3 col-lg-4 col-md-6 product-item" key={product.id}>
                    <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src={`http://localhost:5000${product.url}`} alt={product.name} />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="#">
                        {product.name}
                      </a>
                      <span className="text-primary me-1">{`Rp.${product.harga}`}</span>
                      <span className="text-body text-decoration-line-through">{product.oldPrice}</span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <button className="text-body btn btn-link" onClick={() => handleViewDetail(`http://localhost:5000${product.url}`)}>
                          <i className="fa fa-eye text-primary me-2"></i>View detail
                        </button>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" target="_blank" href={`https://wa.me/6285210303732?text=saya%20ingin%20memesan%20ukuran%20${product.weight}%20${product.name}`}>
                          <FontAwesomeIcon icon={faWhatsapp} className="text-primary me-2" />
                          Pesan Disini
                        </a>
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedProduct === "ubi" && (
            <div id="tab-2" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {products.slice(3, 5).map((product) => (
                  <div className="col-xl-3 col-lg-4 col-md-6 product-item" key={product.id}>
                    <div className="position-relative bg-light overflow-hidden">
                      <img className="img-fluid w-100" src={`http://localhost:5000${product.url}`} alt={product.name} />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="#">
                        {product.name}
                      </a>
                      <span className="text-primary me-1">{`Rp.${product.harga}`}</span>
                      <span className="text-body text-decoration-line-through">{product.oldPrice}</span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <button className="text-body btn btn-link" onClick={() => handleViewDetail(`http://localhost:5000${product.url}`)}>
                          <i className="fa fa-eye text-primary me-2"></i>View detail
                        </button>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" target="_blank" href={`https://wa.me/6285210303732?text=saya%20ingin%20memesan%20ukuran%20${product.weight}%20${product.name}`}>
                          <FontAwesomeIcon icon={faWhatsapp} className="text-primary me-2" />
                          Pesan Disini
                        </a>
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal untuk menampilkan gambar produk yang diperbesar */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalImage} alt="Product" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Product1;
