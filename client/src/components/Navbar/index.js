import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import ScrollToTop from "../ScrollToTop/index.js";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar() {
  return (
    <>
    <nav className="navbar">
                <h2>Wa Shin Ryu Jujutsu</h2>
                <form>
                  <ScrollToTop />
                <Link id="red" to="/main">ABOUT</Link>               
                    <Link id="green" to="/documentsList">DOCUMENTS</Link>
                    <Link id="blue" to="/contact">CONTACT</Link> 
                </form>
            </nav>
  </>
  );
}

export default Navbar;
