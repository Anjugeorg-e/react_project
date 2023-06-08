import React, { useState, useEffect } from "react";
import './Customer.css'

function Customer() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState([]);
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

      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick  = (item) => {
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
      </div>
    </div>
  );
}

export default Customer;
