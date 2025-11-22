import React from "react";

const Menubar = ({ toggleSidebar }) => {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom shadow-sm"
      style={{ background: "#ffffff" }}
    >
      <div className="container-fluid">
        <button
          className="btn"
          id="sidebarToggle"
          onClick={toggleSidebar}
          style={{
            backgroundColor: "#008000",
            color: "white",
            borderRadius: "8px",
            padding: "8px 14px",
          }}
        >
          <i className="bi bi-list" style={{ fontSize: "22px" }}></i>
        </button>
      </div>
    </nav>
  );
};

export default Menubar;
