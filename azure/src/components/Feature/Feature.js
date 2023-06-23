import React, { useEffect, useState } from "react";
import "./Feature.css";
import AzureProductCard from "./AzureProductCard/AzureProductCard";

function Feature({
  features,
  handleClick,
  feature,
  show,
  ai,
  compute,
  container,
  hybrid,
  iot,
}) {
  return (
    <div className="features-container">
      <div className="features-main-container">
        <ul>
          {features.map((container, index) => (
            <li onClick={() => handleClick(container.value)} key={index}>
              <span>{container.title}</span>
            </li>
          ))}
        </ul>

        <div className="azure-services">
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
                  text={item.content}
                />
              );
            })}
          {show === "compute" &&
            compute.map((item) => {
              return (
                <AzureProductCard
                  img={item.img}
                  link={item.link}
                  text={item.content}
                />
              );
            })}
          {show === "containers" &&
            container.map((item) => {
              return (
                <AzureProductCard
                  img={item.img}
                  link={item.link}
                  text={item.content}
                />
              );
            })}
          {show === "hybridmulticloud" &&
            hybrid.map((item) => {
              return (
                <AzureProductCard
                  img={item.img}
                  link={item.link}
                  text={item.content}
                />
              );
            })}
          {show === "iot" &&
            iot.map((item) => {
              return (
                <AzureProductCard
                  img={item.img}
                  link={item.link}
                  text={item.content}
                />
              );
            })}
        </div>
      </div>
      <div className="azure-all-produts">
        <a href="#">See all products(200+)</a>
      </div>
    </div>
  );
}

export default Feature;
