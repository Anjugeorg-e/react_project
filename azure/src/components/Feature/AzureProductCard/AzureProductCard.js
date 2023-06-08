import React from 'react'
import './AzureProductCard.css'

function AzureProductCard({img, text, link}) {
  return (
    <>
    <div className='azureProductCard-container'>
        <img src={img} />
        <p>{text}</p>
        <div className='productcard-link'>
        <a href='#'>{link} </a>
        </div>
    </div>
    </>
  )
}

export default AzureProductCard