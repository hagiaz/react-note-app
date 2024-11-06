/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={navbarStyle}>
            <Link to="/" style={linkStyle}>Homepage</Link>
            <Link to="/archive" style={linkStyle}>Archived Notes</Link>
        </nav>
    );
}

const navbarStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    backgroundColor: "#333",
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
    fontWeight: "bold",
};

export default Navbar;
