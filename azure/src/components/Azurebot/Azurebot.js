import React, { useEffect, useState } from 'react'
import './Azurebot.css';


function Azurebot({azureBot}) {
  return (
    <div className='azurebot-container'>
        <img src={azureBot.image} />
        <div className='azurebot-sub-container'>
            <p>{azureBot.content}</p>
            <div className='azurebot-section'>
            <h3>{azureBot.subContent}</h3>
            <a href='#'>Check out more developer stories</a>
            </div>
        </div>
    </div>
  )
}

export default Azurebot