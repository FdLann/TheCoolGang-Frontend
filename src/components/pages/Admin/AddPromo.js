import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert"; // Import SweetAlert
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../landing-page/SideBar"; // Import Sidebar component

function AddPromo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // State untuk preview gambar
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setPreview(URL.createObjectURL(selectedImage)); // Membuat preview URL untuk tampilan gambar
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      console.error("Image is required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/promos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      swal("Success", "Promo added successfully!", "success").then(() => {
        navigate("/promos");
      });
    } catch (error) {
      console.log(error);
      swal("Error", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideBar /> {/* Sidebar */}
        </div>
        <div className="col-md-9">
          <h3 className="text-center">Add Promo</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="file" className="form-control" onChange={handleImageChange} required />
            </div>
            {preview && ( // Menampilkan preview gambar jika preview ada
              <div className="mb-3">
                <img src={preview} alt="Preview" className="img-thumbnail" style={{ width: "200px" }} />
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Add Promo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPromo;
