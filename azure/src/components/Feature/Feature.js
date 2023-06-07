import React, { useEffect, useState } from "react";
import './Feature.css';

function Feature() {
  const [data, setData] = useState([]);
//   const [nav, setNav] = useState([]);
  const [feature, setFeature] = useState([]);
  const [ai, setAi] = useState([]);
  const [compute, setCompute] = useState([]);
  const [container, setContainer] = useState([]);
  const [hybrid, setHybrid] = useState([]);
  const [iot, setIot] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/react_project/main/azure/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.azureProducts);
        setFeature(item.Featured);
        setAi(item.AIMachineLearning);
        setCompute(item.Compute);
        setContainer(item.Containers);
        setHybrid(item.HybridMulticloud);
        setIot(item.)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <div className="features-mainContainer">
    <ul>
    {data.map((container, index) => (
        <li key={index}>
            <span>{container.title}</span>
        </li>
        ))}
    </ul>
  </div>
  );
}

export default Feature;
