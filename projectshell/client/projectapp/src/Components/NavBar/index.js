import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <img></img>
            <ul>
                <li>
                    <Link to="/mywatchlist">My Watch List</Link>
                </li>
                <li>
                    <Link to="/myinvestments">My Investments</Link>
                </li>
                <li>
                <Link to="/myinvestments">Log Out</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar; 