import React from "react";
import whatsappIcon from "../img/WhatsApp.svg.png";

const WhatsAppButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '10%',
    right: '10%',
    zIndex: '3',
  };

  const imageStyle = {
    maxWidth: '100px',  // Adjust the max width as needed
    maxHeight: '100px', // Adjust the max height as needed
  };

  return (
    <div style={buttonStyle} className="MainMaster" id="mainmaster">
      <a href="https://wa.me/917338635050" target="_blank">
        <img src={whatsappIcon} alt="WhatsApp Icon" style={imageStyle} />
      </a>
    </div>
  );
}

export default WhatsAppButton;
