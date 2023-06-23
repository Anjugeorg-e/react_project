import React, { useEffect, useState } from "react";

import "./innovation.css";

function Innovation(props) {
  return (
    <div className="innovation-head">
      <div className="mobile_invent">
        <div className="innovation-background-image">
          <img src={props.innovation.imgurl} alt="azure background image" />
        </div>
        <div className="innovation-content">
          <p className="azure-invent">{props.innovation.azureSubhead}</p>
          <h3>{props.innovation.azureSubheadTwo}</h3>
          <p className="azure-invent-app">
            {props.innovation.azureHeadingParagraph}
          </p>
          <div className="azure-header-button">
            <a className="get-started" href="#">
              Get started
            </a>
            <a className="try-azure" href="#">
              Try Azure for free
            </a>
          </div>
        </div>
      </div>
      <div
        className="desktop-background-img"
        style={{
          background: `url('${props.innovation.imgDesktopUrl}') 50% 0%/ cover no-repeat`,
        }}
      >
        <div className="innovation-content">
          <p className="azure-invent">{props.innovation.azureSubhead}</p>
          <h3>{props.innovation.azureSubheadTwo}</h3>
          <p className="azure-invent-app">
            {props.innovation.azureHeadingParagraph}
          </p>
          <div className="azure-header-button">
            <a className="get-started" href="#">
              Get started
            </a>
            <a className="try-azure" href="#">
              Try Azure for free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Innovation;
