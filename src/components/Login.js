import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import akunImg from "../components/images/akun.jpg";
import "./login.css";

function Login({ setLoggedIn }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Login button clicked");
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: values.email,
        password: values.password,
      });
      console.log("Response received:", response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setLoggedIn(true);
      console.log("Login status updated");
      navigate("/productlist");
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password");
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
          <Link to="/register" className="text-white fs-2" style={{ fontFamily: "Courier New, Courier, monospace", fontWeight: "600", textDecoration: "none" }}>
            Be Verified
          </Link>
          <small className="text-white text-wrap text-center" style={{ width: "17rem", fontFamily: "Courier New, Courier, monospace" }}>
            Join experienced Designers on this platform.
          </small>
        </div>

        {/* Right Box */}
        <div className="col-md-6 right-box">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello, Again</h2>
                <p>We are happy to have you back.</p>
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email" name="email" onChange={handleChange} />
              </div>
              <div className="input-group mb-1">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" name="password" onChange={handleChange} />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary">
                    <small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot"></div>
              </div>
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
