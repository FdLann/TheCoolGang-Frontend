import React from "react";
import customerImage1 from "../../images/fotowhatsapp.jpeg"; // Impor gambar pertama
import customerImage2 from "../../images/fotowhatsapp.jpeg"; // Impor gambar kedua (menggunakan gambar yang sama untuk contoh ini)

function CostumerReview() {
  return (
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
      <div className="container" id="kastemer">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
          <h1 className="display-5 mb-3">Customer Review</h1>
          <p>Penilaian terhadap costumer yang sudah membeli produk kami.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div id="review-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={customerImage1} className="d-block w-50" alt="Review Foto 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://picsum.photos/200/300" className="d-block w-50" alt="Review Foto 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={customerImage2} className="d-block w-50" alt="Review Foto 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#review-carousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#review-carousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostumerReview;
