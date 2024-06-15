import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import akunImg from "../components/images/akun.jpg"; // Path to your image
import "./login.css"; // Ensure this file exists and contains your custom styles

function Register({ setLoggedIn }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Register button clicked");
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        email,
        password,
      });
      console.log("Response received:", response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setLoggedIn(true); // Update login status
      console.log("Registration successful, logging in...");
      navigate("/productlist"); // Redirect to product list page after registration
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        // Server responded with a status code other than 2xx
        setError(error.response.data.message || "Registration failed. Please try again later.");
      } else if (error.request) {
        // Request was made but no response received
        setError("No response received from server. Please try again later.");
      } else {
        // Something else happened while setting up the request
        setError("Error setting up the registration request. Please try again later.");
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        {/* Left Box */}
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#103cbe" }}>
          <div className="featured-image mb-3">
            <img src={akunImg} className="img-fluid" style={{ width: "250px" }} alt="Featured" />
          </div>
          <p className="text-white fs-2" style={{ fontFamily: "Courier New, Courier, monospace", fontWeight: "600" }}>
            Be Verified
          </p>
          <small className="text-white text-wrap text-center" style={{ width: "17rem", fontFamily: "Courier New, Courier, monospace" }}>
            Join experienced Designers on this platform.
          </small>
        </div>

        {/* Right Box */}
        <div className="col-md-6 right-box">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Create Account</h2>
                <p>Sign up to get started.</p>
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email" name="email" onChange={handleChange} />
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" name="password" onChange={handleChange} />
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
              </div>
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;