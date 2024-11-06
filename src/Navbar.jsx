/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar" >
            <Link to="/" className="navbar-links" >Homepage</Link>
            <Link to="/archive" className="navbar-links" >Archived Notes</Link>
        </nav>
    );
}

export default Navbar;
