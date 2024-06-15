import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons for edit and delete buttons
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import SideBar from "../landing-page/SideBar";
import ProductCountCard from "../landing-page/ProductCountCard";
import "../Admin/css/productlist.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
      Swal.fire("Deleted!", "Your product has been deleted.", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(productId);
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 min-vh-100">
          <SideBar />
        </div>
        <div className="col-md-9">
          <div className="container mt-5">
            <ProductCountCard />
            {loading ? (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th> {/* Tambahkan kolom Category */}
                    <th scope="col">Image</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.harga}</td>
                      <td>{product.category}</td> {/* Tampilkan kategori produk */}
                      <td>
                        <img src={`http://localhost:5000${product.url}`} alt={product.name} style={{ width: "100px" }} />
                      </td>
                      <td>
                        <Link to={`/edit/${product.id}`} className="btn btn-primary me-2">
                          <FaEdit /> Edit
                        </Link>
                        <button onClick={() => handleDeleteClick(product.id)} className="btn btn-danger">
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
