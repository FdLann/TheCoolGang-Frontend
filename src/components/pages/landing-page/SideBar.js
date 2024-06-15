import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin/css/productlist.css";

function SideBar() {
  return (
    <div className="d-flex flex-column p-3 min-vh-100" style={{ backgroundColor: "#343A40" }}>
      <NavLink to="/" className="text-decoration-none" style={{ backgroundColor: "none" }}>
        <h4 className="text-center text-white">Admin Panel</h4>
      </NavLink>
      <br></br>
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/productlist"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            aria-current="page"
            style={{ color: "white", fontSize: "25px" }} // Menambahkan warna putih dan memperbesar font
          >
            Dashboard
          </NavLink>

          <br></br>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle className="w-100 text-start text-white" style={{ fontSize: "25px" }}>
              Manage Products
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to="/add" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} style={{ fontSize: "15px" }}>
                  Add Product
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/Addpromo" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} style={{ fontSize: "15px" }}>
                  Add Promo
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/AddCustomer" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} style={{ fontSize: "15px" }}>
                  Add Testimoni
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/ReviewList" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} style={{ fontSize: "15px" }}>
                  Review List
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/promos" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} style={{ fontSize: "15px" }}>
                  Promo List
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/CustomerList" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} style={{ fontSize: "15px" }}>
                  Testimoni List
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
