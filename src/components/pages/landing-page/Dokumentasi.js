import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import Project1 from "../../images/project1.jpeg";
import Project2 from "../../images/project2.jpeg";
import Project3 from "../../images/project3.jpeg";

const Projects = () => {
  useEffect(() => {
   
  }, []);

  return (
    <div className="container-fluid bg-light bg-icon my-5 py-6">
      <div className="container">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
          <h1 className="display-5 mb-3">Dokumentasi Kami</h1>
          <p>Rujak buah menjadi salah satu alternatif buat kamu yang ingin dapet nutrisi dari berbagai macam buah. Beli sekarang disini</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp reveal-left" data-wow-delay="0.1s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src={Project1} alt="Project 1" />
              <h4 className="mb-3">Kebersamaan Kami</h4>
              <p className="mb-4">Kompak, kreatif, dan inovatif</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp reveal-right" data-wow-delay="0.3s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src={Project2} alt="Project 2" />
              <h4 className="mb-3">Mengecek Produk</h4>
              <p className="mb-4">Menjaga kualitas produk.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp reveal-left" data-wow-delay="0.5s">
            <div className="bg-white text-center h-100 p-4 p-xl-5">
              <img className="img-fluid mb-4" src={Project3} alt="Project 3" />
              <h4 className="mb-3">Mencicipi Produk</h4>
              <p className="mb-4">Memastikan kelezatan, rasa, dan kesegaran produk.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
