import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../landing-page/SideBar"; // Adjust the path as necessary

const PromoList = () => {
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

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/promos/${id}`);
        setPromos(promos.filter((promo) => promo.id !== id));
        Swal.fire(
          'Deleted!',
          'Your promo has been deleted.',
          'success'
        );
      } catch (error) {
        console.error("Error deleting promo:", error);
        Swal.fire(
          'Error!',
          'There was an error deleting the promo.',
          'error'
        );
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">
          <h3 className="text-center mt-3">Promo List</h3>
          <Link to="/addpromo" className="btn btn-primary mb-3">
            Add Promo
          </Link>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {promos.map((promo, index) => (
                <tr key={promo.id}>
                  <td>{index + 1}</td>
                  <td>{promo.title}</td>
                  <td>{promo.description}</td>
                  <td>
                    <img src={`http://localhost:5000${promo.imageUrl}`} alt={promo.title} width="100" />
                  </td>
                  <td>
                    <button onClick={() => handleDelete(promo.id)} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PromoList;
