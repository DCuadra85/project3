import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <img></img>
            <ul>
                <li>
                    <Link to="/watchlist">My Watch List</Link>
                </li>
                <li>My Stocks</li>
                <li>Log Out</li>
            </ul>
        </nav>
    );
}

export default Navbar; 