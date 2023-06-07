import React, { useEffect, useState } from "react";
import "./CloudSolution.css";

function CloudSolution() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/react_project/main/azure/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.onprimise);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cloud-solution">
      <p className="onpremise">
        On-premises, hybrid, multicloud, or at the edge—create secure,
        future-ready cloud solutions on Azure
      </p>
      <div className="container-onpremise"> 
      {data.map((container, index) => (
        <div className="onpremise-container" key={index}>
          <img src={container.image} />
          <div className="onpremise-subcontainer">
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
            <h3>Start putting your ideas into action with Azure products and services</h3>
        </div>
    </div>
  );
}

export default CloudSolution;
