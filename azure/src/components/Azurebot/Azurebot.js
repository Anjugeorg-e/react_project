import React, { useState } from 'react'
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

  return (
    <div className='AzurebotContainer'>
        <img src={data.image} />
        <div className='Azurebot-subContainer'>
            <p>{data.content}</p>
        </div>
    </div>
  )
}

export default Azurebot