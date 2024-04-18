import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <a href="/home" className="nav-link">Home</a>
      <a href="/creations" className="nav-link">Creations</a>
      <a href="/records" className="nav-link">Records</a>
    </div>
  );
}

export default Header;



