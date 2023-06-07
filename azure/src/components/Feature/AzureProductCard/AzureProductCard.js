import React from 'react'
import './AzureProductCard.css'

function AzureProductCard({img, text, link}) {
  return (
    <>
    <div className='azureProductCard-container'>
        <img src={img} />
        <p>{text}</p>
        <a href='#'>{link} </a>
    </div>
    </>
  )
}

export default AzureProductCard