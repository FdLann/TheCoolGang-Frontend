import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../landing-page/SideBar"; // Import Sidebar
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/customers"); // Ensure the endpoint matches your backend
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/customers/${id}`); // Ensure the endpoint matches your backend
        setReviews(reviews.filter((review) => review.id !== id));
        Swal.fire("Deleted!", "Your review has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting review:", error);
        Swal.fire("Error!", "There was an error deleting the review.", "error");
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar /> {/* Add Sidebar here */}
        </div>
        <div className="col-md-9">
          <div className="container mt-3">
            <h3>Customer Reviews</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <tr key={review.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={`http://localhost:5000${review.imageUrl}`} alt={review.description} width="100" />
                    </td>
                    <td>{review.description}</td>
                    <td>
                      <button onClick={() => handleDelete(review.id)} className="btn btn-danger">
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
    </div>
  );
};

export default CustomerReviewList;
