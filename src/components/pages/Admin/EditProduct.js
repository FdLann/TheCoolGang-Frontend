import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../landing-page/SideBar";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setTitle(response.data.name);
      setPrice(response.data.harga);
      setPreview(response.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", title); // Ganti "title" menjadi "name"
    formData.append("harga", price); // Ganti "price" menjadi "harga"

    try {
      await axios.patch(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/productlist");
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <div className="container mt-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Edit Product</h3>
                  <form onSubmit={updateProduct}>
                    <div className="mb-3">
                      <label className="form-label">Product Name</label>
                      <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product Name" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Product Price</label>
                      <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Image</label>
                      <input type="file" className="form-control" onChange={loadImage} />
                    </div>
                    {preview && (
                      <div className="mb-3">
                        <img src={preview} alt="Preview" className="img-thumbnail" style={{ width: "200px" }} />
                      </div>
                    )}
                    <button type="submit" className="btn btn-success">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
