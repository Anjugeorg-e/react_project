import React from "react";

function AzureCustomerCard({ image, content }) {
  return (
    <>
      <div className="AzureCustomerCard-Container">
        <img src={image} />
        <div className="AzureCustomerCard-subcontainer">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default AzureCustomerCard;
