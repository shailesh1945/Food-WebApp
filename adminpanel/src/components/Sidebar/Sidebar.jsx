import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = ({ sidebarVisible }) => {
  return (
    <div
      className={`border-end shadow-sm ${
        sidebarVisible ? "" : "d-none"
      }`}
      id="sidebar-wrapper"
      style={{
        width: "240px",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        className="sidebar-heading d-flex align-items-center gap-2"
        style={{
          padding: "18px",
          backgroundColor: "#f2fff2",
          borderBottom: "1px solid #e6e6e6",
          fontWeight: "600",
          fontSize: "18px",
          color: "#008000",
        }}
      >
        <img src={assets.logo} alt="" height={32} width={32} />
        Admin Panel
      </div>

      <div className="list-group list-group-flush mt-2">
        <Link
          className="list-group-item list-group-item-action p-3"
          to="/add"
          style={{
            border: "none",
            fontWeight: "500",
            color: "#008000",
          }}
        >
          <i className="bi bi-plus-circle me-2"></i> Add Food
        </Link>

        <Link
          className="list-group-item list-group-item-action p-3"
          to="/list"
          style={{
            border: "none",
            fontWeight: "500",
            color: "#008000",
          }}
        >
          <i className="bi bi-list-ul me-2"></i> List Food
        </Link>

        <Link
          className="list-group-item list-group-item-action p-3"
          to="/orders"
          style={{
            border: "none",
            fontWeight: "500",
            color: "#008000",
          }}
        >
          <i className="bi bi-cart me-2"></i> Orders
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
