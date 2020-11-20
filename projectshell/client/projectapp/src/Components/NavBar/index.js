import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <img></img>
            <ul>

                <li className="nav-item">
                    <Link to="/home">Current Stocks</Link>
                </li>
                <li className="nav-item">
                    <Link to="/watchlist">My Watch List</Link>
                </li>
                <li className="nav-item">
                    <Link to="/myinvestments">My Stocks</Link>
                </li>
                <li className="nav-item">
                    <Link to="watchlist">Stock Watchlist</Link>
                </li>
                <li>Log Out</li>

            </ul>
        </nav>
    );
}

export default Navbar; 