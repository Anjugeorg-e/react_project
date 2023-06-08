import React from "react";
import './AzureCustomerCard.css'

function AzureCustomerCard({ image, content }) {
  return (
    <>
      <div className="AzureCustomerCard-Container">
        <img src={image} />
        <div className="AzureCustomerCard-subcontainer">
          <p>{content}</p>
          <p className="caseStudy">Case study </p>
        </div>
      </div>
    </>
  );
}

export default AzureCustomerCard;
