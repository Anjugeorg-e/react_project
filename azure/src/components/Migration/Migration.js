import React from "react";
import migrationMobile from "../asset/img/migration-mobile.avif";

import "./Migration.css";

function Migration() {
  return (
    <div className="migrationBaseContainer">
      <div className="migrationContainer">
        <img src={migrationMobile} />
        <div className="migration-SubContainer">
          <h3>Accelerate your migration and modernization with Azure</h3>
          <div className="migration-subcontainerButton">
            <a href="#">Explore help and tools</a>
          </div>
        </div>
      </div>
      <div className="migrationContainerDesktop">
        <div className="desktop-migartionView">
          <img src={migrationMobile} />
          <div className="migration-SubContainer">
            <h3>Accelerate your migration and modernization with Azure</h3>
            <div className="migration-subcontainerButton">
              <a href="#">Explore help and tools</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Migration;
