// frontend/src/components/AddProduct.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "../landing-page/SideBar";
import Swal from "sweetalert";

function AddProduct() {
  const [name, setName] = useState("");
  const [harga, setHarga] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [category, setCategory] = useState("rujak"); // Tambahkan state untuk kategori
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("harga", harga);
    formData.append("category", category); // Tambahkan kategori ke formData
    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal({
        icon: "success",
        title: "Product Saved",
        text: "Your product has been saved successfully!",
      }).then(() => {
        navigate("/ProductList");
      });
    } catch (error) {
      Swal({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add Product</h3>
            </div>
            <div className="card-body">
              <form onSubmit={saveProduct}>
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input type="text" className="form-control" value={harga} onChange={(e) => setHarga(e.target.value)} placeholder="Enter Price" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="rujak">Rujak</option>
                    <option value="ubi">Ubi</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Upload Image</label>
                  <input type="file" className="form-control" onChange={loadImage} accept="image/*" required />
                </div>

                {preview && (
                  <div className="mb-3">
                    <img src={preview} alt="Preview" className="img-thumbnail" />
                  </div>
                )}

                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
