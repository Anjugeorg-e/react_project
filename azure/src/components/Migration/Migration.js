import React from "react";
import migrationMobile from "../asset/img/migration-mobile.avif";

import "./Migration.css";

function Migration() {
  return (
    <div className="migration-base-container">
      <div className="migration-container">
        <img src={migrationMobile} alt="migartion" />
        <div className="migration-sub-container">
          <h3>Accelerate your migration and modernization with Azure</h3>
          <div className="migration-sub-container-button">
            <a href="#">Explore help and tools</a>
          </div>
        </div>
      </div>
      <div className="migration-container-desktop">
        <div className="desktop-migartion-view">
          <img src={migrationMobile} alt="migration mobileview" />
          <div className="migration-sub-container">
            <h3>Accelerate your migration and modernization with Azure</h3>
            <div className="migration-sub-container-button">
              <a href="#">Explore help and tools</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Migration;
