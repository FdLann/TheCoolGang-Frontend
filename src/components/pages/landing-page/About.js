import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollReveal from "scrollreveal";
import fotobuAyu from "../../images/fotobuAyu.jpeg";
import fotologoestetik from "../../images/fotologoestetik.JPG";
import fotoubi3 from "../../images/fotoubi3.JPG";

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-left", {
      delay: 200,
      origin: "left",
      distance: "50px",
      duration: 1000,
      opacity: 0,
      interval: 200,
    });
    ScrollReveal().reveal(".reveal-right", {
      delay: 200,
      origin: "right",
      distance: "50px",
      duration: 1000,
      opacity: 0,
      interval: 200,
    });
  }, []);

  return (
    <>
      <div className="container-xxl py-5" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn reveal-left" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-60" src={fotobuAyu} width="300" height="200" alt="Bu Ayu" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn reveal-right" data-wow-delay="0.5s" style={{ textAlign: "justify" }}>
              <h1 className="display-5 mb-4">Tentang Kami</h1>
              <p className="mb-4">
                Merk Rujak Klasik merupakan produk unggulan Ibu Ayu Putu Setuti Asih, sudah dinikmati sejak 9 Mei 2018. <br />
                &nbsp; &nbsp; &nbsp; <strong>Rujak Klasik</strong> dibuat dari buah segar pilihan, diantaranya: buah mangga, kedondong, bengkoang, nanas, timun, dan ubi merah dengan sambal yang terbuat dari cabai dan bahan pilihan, level
                kepedasan yang bervariasi dan nikmat disantap dalam suhu ruang dan dingin yang lebih memberikan rasa segarnya. Selain rujak klasik dan sambal rujak, produk unggulan lainnya adalah Bubur Ubi Ungu. <br />
                &nbsp; &nbsp; &nbsp; <strong>Bubur Ubi Ungu</strong> atau sering disingkat dengan Burbiu merupakan olahan kuliner yang bisa dinikmati oleh segala usia, bermanfaat dan menyehatkan. Untuk mengolah ubi ungu menjadi Burbiu ini
                sangat mudah membuatnya, perpaduan rasa manis dan gurihnya santan yang diolah dari fiber cream dan rich cream menjadikan sensasi rasa tersendiri jika disantap pada suhu ruang, hangat ataupun dingin. <br />
                &nbsp; &nbsp; &nbsp; <strong>Rujak klasik, sambal rujak dan bubur ubi ungu</strong> tersedia dalam berbagai variasi ukuran, berat dan cocok untuk berbagai acara seperti arisan, acara pernikahan, reuni, rapat dan berbagai
                acara lainnya. Proses pengiriman dan bertransaksi sangat mudah sehingga kesegaran Rujak klasik, sambal klasik dan bubur ubi ungu terjaga sampai di tangan konsumen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn reveal-left" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src={fotologoestetik} alt="Logo Estetik" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn reveal-right" data-wow-delay="0.5s" style={{ textAlign: "justify" }}>
              <p className="mb-4">
                <strong>#Kepoin Kuy apa itu Rujak Klasik#</strong>
                <br />
                <br />
                Rujak Klasik adalah rujak buah seperti pada umumnya. Dibuat dari aneka buah segar pilihan yaitu mangga, kedondong, bengkoang, nanas, timun dan ubi merah, yang diserut dan dibumbui dengan sambal rujak original dari campuran
                gula merah, gula putih, cabai, asam jawa, dan garam. Bumbu rujak klasik tanpa dicampur dengan terasi dan kacang tanah sehingga memiliki citarasa tersendiri yang bisa dipilih level kepedasannya sehingga menjadikan rujak
                klasik lebih nikmat dan segar. Rujak Klasik ini bertahan sekitar 24 jam pada suhu ruang, 7-10 hari di kulkas dan 1 bulan di freezer. Rujak Klasik dikemas dalam toples, box mika dan plastik pouch atau sesuai dengan permintaan
                konsumen. Dan yang pasti rujak klasik ini sudah bersertifikat Halal. <br />
                <br />
                <strong>
                  {" "}
                  untuk 250 g rujak klasik dibandrol dengan harga 15K dan 25K untuk 430 gr.
                  <br />
                  <br />
                </strong>
                Untuk pemesanan sesuai permintaan konsumen bisa dengan harga khusus. Apapun kemasannya dijamin rasa rujak klasik tetep SEGER deh. <br />
                <br />
                <strong>#Reseller Welcome#</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn reveal-left" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src={fotoubi3} alt="Bubur Ubi Ungu" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn reveal-right" data-wow-delay="0.5s" style={{ textAlign: "justify" }}>
              <p className="mb-4">
                <strong>
                  #Bubur Ubi Ungu alias Burbiu#
                  <br />
                </strong>
                Bubur Ubi Ungu alias Burbiu, terbuat dari ubi jalar yang berwarna ungu, yang direbus kemudian dicampur tepung sagu, gula putih dan sedikit garam. Dihidangkan dengan santan yang dibuat dari Fiber Cream atau Rich Cream yang
                kaya akan serat sehingga aman untuk dikonsumsi. Bubur ubi ungu aman dikonsumsi dalam batas maksimal 12 jam pada suhu ruang atau 3 hari jika disimpan di kulkas. Proses pembuatannya yang mudah, bisa dinikmati oleh segala usia
                serta kaya manfaat antara lain ubi ungu sebagai antioksidan dan anti kanker menjadi alasan bubur ubi ungu ini diproduksi dan disantap dingin lebih menambah cita rasa perpaduan manis dan gurihnya.
                <br />
                <strong> Burbiu dalam kemasan 150 gram hanya dengan harga 6K dan harga 10K bisa menikmati 300 gram burbiu.</strong>
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Berkualitas
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Murah
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Lezaaaat
              </p>
              <a className="btn btn-success rounded-pill py-3 px-5 mt-3" href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
