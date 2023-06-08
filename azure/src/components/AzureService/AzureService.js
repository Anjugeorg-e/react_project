import React, { useEffect, useState } from 'react'
import './AzureService.css';


function AzureService() {
    const[data, setData] = useState([]);

    const fetchData = () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/react_project/main/azure/public/data.json"
        )
        .then((response) => {
            return response.json();
        })
        .then((item) => {
            setData(item.azureCards);
        });
    };

    useEffect(()=>{
        fetchData();
    });

  return (
    <div className='azureServieContainer'> 
        {data.map((card, index) => (
            <div className='azureService-cards' key={index}>
                <img src={card.image} />
                <div className='azureSubContainer'>
                <a href='#'>{card.heading}</a>
                <p>{card.content}</p>
                </div>
            </div>    
        ))}
    </div>
  )
}

export default AzureService