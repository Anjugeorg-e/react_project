import React, { useState, useEffect } from "react";
import "./Customer.css";
import AzureCustomerCard from "./AzureCustomerCard/AzureCustomerCard";

function Customer({
  customer,
  handleClickOnCustomer,
  customerShow,
  fujitsu,
  nba,
  hrblock,
  nhs,
  forza,
}) {
  return (
    <div className="customers-container">
      <div className="customer-sub-container">
        <h2>Find out how these customers are innovating with Azure</h2>
      </div>
      <div className="customer-card">
        <ul>
          {customer.map((card, index) => (
            <li onClick={() => handleClickOnCustomer(card.value)} key={index}>
              <img src={card.image} alt="customers" />
            </li>
          ))}
        </ul>

        <div className="azure-customer-card">
          {customerShow === "Fujitsu" && (
            <AzureCustomerCard
              image={fujitsu.image}
              content={fujitsu.content}
            />
          )}
          {customerShow === "NBA" && (
            <AzureCustomerCard image={nba.image} content={nba.content} />
          )}
          {customerShow === "HRblock" && (
            <AzureCustomerCard
              image={hrblock.image}
              content={hrblock.content}
            />
          )}
          {customerShow === "NHS" && (
            <AzureCustomerCard image={nhs.image} content={nhs.content} />
          )}
          {customerShow === "Forza" && (
            <AzureCustomerCard image={forza.image} content={forza.content} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Customer;
