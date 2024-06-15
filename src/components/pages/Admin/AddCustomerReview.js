import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "../landing-page/SideBar";
import swal from "sweetalert";

const AddCustomerReview = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setPreview(URL.createObjectURL(selectedImage));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      swal("Error", "Please select an image.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:5000/api/customers", formData);
      swal("Success", "Review added successfully!", "success").then(() => {
        navigate("/CustomerList");
      });
    } catch (error) {
      console.error("Error adding review:", error);
      swal("Error", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">
          <div className="container mt-3">
            <h3>Add Customer Review</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="file" className="form-control" onChange={handleImageChange} />
              </div>
              {preview && (
                <div className="mb-3">
                  <img src={preview} alt="Preview" className="img-thumbnail" style={{ width: "200px" }} />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerReview;
