import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import SideBar from "../landing-page/SideBar";
import "../card.css";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const deleteReview = async (id) => {
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
        await axios.delete(`http://localhost:5000/reviews/${id}`);
        setReviews(reviews.filter((review) => review.id !== id));
        Swal.fire(
          'Deleted!',
          'Your review has been deleted.',
          'success'
        );
      } catch (error) {
        console.error("Error deleting review:", error);
        Swal.fire(
          'Error!',
          'There was an error deleting the review.',
          'error'
        );
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideBar /> {/* Sidebar */}
        </div>
        <div className="col-md-9 pt-3">
          <h3 className="text-center mt-3">Review List</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>No. Telepon</th>
                <th>Rating</th>
                <th>Isi Komentar</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review.id}>
                  <td>{index + 1}</td>
                  <td>{review.name}</td>
                  <td>{review.no_telepon}</td>
                  <td>{review.star_rating} stars</td>
                  <td>{review.comments}</td>
                  <td>
                    <Button variant="danger" onClick={() => deleteReview(review.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
