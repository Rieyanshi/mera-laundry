// HeaderComponent.js
import React, { useState, useEffect } from 'react';
import header1 from "../img/header.png";
import "../style/header.css";
import header2 from "../img/header2.png";
const HeaderComponent = () => {
  const [currentImage, setCurrentImage] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between images
      setCurrentImage(prevImage => (prevImage === 1 ? 2 : 1));
    }, 3 * 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MERA-LAUNDRY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms auto" >
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Become a partner</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {currentImage === 1 ? (
        <img src={header1} alt="Image 1" />
      ) : (
        <img src={header2} alt="Image 2" />
      )}
    </header>
  );
};

export default HeaderComponent;
