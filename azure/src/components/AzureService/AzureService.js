import React, { useEffect, useState } from "react";
import "./AzureService.css";

function AzureService({ services }) {
  return (
    <div className="azure-servie-container">
      {services.map((card, index) => (
        <div className="azure-service-cards" key={index}>
          <img src={card.image} alt="cards" />
          <div className="azure-sub-container">
            <a href="#">{card.heading}</a>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AzureService;
