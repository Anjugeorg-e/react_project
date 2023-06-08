import React, { useState, useEffect } from "react";
import "./Customer.css";
import AzureCustomerCard from "./AzureCustomerCard/AzureCustomerCard";

function Customer() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState("Fujitsu");
  const [fujitsu, setFujitsu] = useState([]);
  const [nba, setNba] = useState([]);
  const [hrblock, sethrBlock] = useState([]);
  const [nhs, setNhs] = useState([]);
  const [forza, setForza] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/react_project/main/azure/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.customer);
        setFujitsu(item.Fujitsu);
        setNba(item.NBA);
        sethrBlock(item.HRblock);
        setNhs(item.NHS);
        setForza(item.Forza);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (item) => {
    setShow(item);
  };

  return (
    <div className="customers-container">
      <div className="customer-subcontainer">
        <h2>Find out how these customers are innovating with Azure</h2>
      </div>
      <div className="customer-card">
        <ul>
          {data.map((card, index) => (
            <li onClick={() => handleClick(card.value)} key={index}>
              <img src={card.image} />
            </li>
          ))}
        </ul>

        <div className="azure-customerCard">
          {show === "Fujitsu" && (
            <AzureCustomerCard
              image={fujitsu.image}
              content={fujitsu.content}
            />
          )}
          {show === "NBA" && (
             <AzureCustomerCard
             image={nba.image}
             content={nba.content}
           />
          )}
           {show === "HRblock" && (
             <AzureCustomerCard
             image={hrblock.image}
             content={hrblock.content}
           />
          )}
          {show === "NHS" && (
             <AzureCustomerCard
             image={nhs.image}
             content={nhs.content}
           />
          )}
          {show === "Forza" && (
             <AzureCustomerCard
             image={forza.image}
             content={forza.content}
           />
          )}

        </div>
      </div>
    </div>
  );
}

export default Customer;

{
  /* <div className="azure-customerCard">
    {show === "Fujitsu" && 
       nba.map((item) => {
            return(
                <AzureCustomerCard
                image={item.image}
                content={item.content}
                />
            );
        })
    }
</div> */
}
