import React, { useEffect, useState } from "react";
import "./Discover.css";

function Discover({discover}) {
  return (
    <div className="discover-base-container">
      <h3>Discover what's happening on Azure</h3>
      <div className="discover-container">
        {discover.map((card, index) => (
          <div className="discover-cards" key={index}>
            <img src={card.image} />
            <div className="discover-cards-sub-container">
              <h4>{card.heading}</h4>
              <p>{card.content}</p>
              <a href="#">Learn more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
