import React, { useEffect, useState } from "react";
import "./Feature.css";
import AzureProductCard from "./AzureProductCard/AzureProductCard";

function Feature() {
  const [data, setData] = useState([]);
  //   const [nav, setNav] = useState([]);
  const [show, setShow] = useState("featured");
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
        setIot(item.InternetOfThings);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (item) => {
    setShow(item);
  };

  return (
    <div className="features-container" >

    <div className="features-mainContainer">
      <ul>
        {data.map((container, index) => (
          <li onClick={() => handleClick(container.value)} key={index}>
            <span>{container.title}</span>
          </li>
        ))}
      </ul>

      <div className="azure-Services">
        {show === "featured" &&
          feature.map((item) => {
            return (
              <AzureProductCard
                img={item.img}
                link={item.link}
                text={item.content}
              />
            );
          })}
          {show === "aiml" && 
           ai.map((item) => {
            return (
                <AzureProductCard
                img={item.img}
                link={item.link}
                text ={item.content}
                />
            )
           })}
           {show === "compute" && 
            compute.map((item) => {
                return(
                    <AzureProductCard
                    img={item.img}
                    link={item.link}
                    text ={item.content}
                    />
                )
            })}
            {show === "containers" && 
            container.map((item) => {
                return(
                    <AzureProductCard
                    img={item.img}
                    link={item.link}
                    text ={item.content}
                    />
                )
            })}
             {show === "hybridmulticloud" && 
            hybrid.map((item) => {
                return(
                    <AzureProductCard
                    img={item.img}
                    link={item.link}
                    text ={item.content}
                    />
                )
            })}
            {show === "iot" && 
            iot.map((item) => {
                return(
                    <AzureProductCard
                    img={item.img}
                    link={item.link}
                    text ={item.content}
                    />
                )
            })}
            
      </div> 
    </div>
      <div className="azure-allProduts">
        <a href="#">See all products(200+) </a>
      </div>
    </div>
  );
}

export default Feature;
