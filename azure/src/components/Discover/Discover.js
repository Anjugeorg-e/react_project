import React, { useEffect, useState } from 'react'
import './Discover.css';

function Discover() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/react_project/main/azure/public/data.json"
        )
        .then((response) => {
            return response.json();
        })
        .then((item) => {
            setData(item.discover);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);


  return (
    <div className='discover-baseContainer'>
        <h3>Discover what's happening on Azure</h3>
        <div className='discoverContainer'>
            {data.map((card, index) => (
                <div className="discoverCards" key={index}>
                    <img src={card.image} />
                    <div className='discoverCards-subContainer'>
                        <h4>{card.heading}</h4>
                        <p>{card.content}</p>
                        <a href='#'>Learn more</a>
                    </div>    
                </div>    
            ))}
        </div>
    </div>
  )
}

export default Discover