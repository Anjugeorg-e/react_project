import React, { useEffect, useState } from "react";
import "./CloudSolution.css";

function CloudSolution({onPremise}) {
  return (
    <div className="cloud-solution">
      <p className="on-premise">
        On-premises, hybrid, multicloud, or at the edge—create secure,
        future-ready cloud solutions on Azure
      </p>
      <div className="container-on-premise">
        {onPremise.map((container, index) => (
          <div className="on-premise-container" key={index}>
            <img src={container.image} alt="cards" />
            <div className="on-premise-sub-container">
              <a href="#">{container.title}</a>
              <p>{container.content}</p>
            </div>
            <div className="space"></div>
          </div>
        ))}
      </div>

      <div className="new-toAzure">
        <span>New to Azure?</span>
        <a href="#"> Get an overview</a>
      </div>
      <div className="azure-products">
        <h3>
          Start putting your ideas into action with Azure products and services
        </h3>
      </div>
    </div>
  );
}

export default CloudSolution;
