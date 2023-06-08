import React, { useEffect, useState } from 'react'
import './Azurebot.css';


function Azurebot() {
const[data, setData] = useState([]);

const fetchData =()=>{
    fetch(
        "https://raw.githubusercontent.com/Anjugeorg-e/react_project/main/azure/public/data.json"
    )
    .then((response) => {
        return response.json();
    })
    .then((item) => {
        setData(item.voiceAssistant);
    });
};
useEffect(() =>
{
    fetchData();
},[]);

  return (
    <div className='azurebotContainer'>
        <img src={data.image} />
        <div className='azurebot-subContainer'>
            <p>{data.content}</p>
            <div className='azureBotSection'>
            <h3>{data.subContent}</h3>
            <a href='#'>Check out more developer stories</a>
            </div>
        </div>
    </div>
  )
}

export default Azurebot