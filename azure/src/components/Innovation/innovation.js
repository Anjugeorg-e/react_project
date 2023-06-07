import React, { useEffect, useState } from 'react'

import './innovation.css';

function Innovation() {
    const[data, setData] = useState([]);

    const fetchData = () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/react_project/main/azure/public/data.json"
        )
        .then((response) => {
            return response.json();
        })
        .then((item) => {
            setData(item.invent);
        });
        console.log(data)
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='innovation-head'>
            <div className='innovation-backgroundImage'>
                <img src={data.imgurl} />
                <div className='desktop-backgroundImg' style={{background: `url('${data.imgurl}')`}}
            </div>
            <div className='innovation-content'>
                <p className='azure-invent'>{data.azureSubhead}</p>
                <h3>{data.azureSubheadTwo}</h3>
                <p className='azure-invent-app'>{data.azureHeadingParagraph}</p>
            <div className='azure-header-button'>
               <a className='getStarted' href='#'>Get started</a>
               <a className='tryAzure' href='#'>Try Azure for free</a>
            </div>
            </div>
    </div>
  )
}

export default Innovation