import React from 'react'

export const Product = (props) => {
  const { id, name, Price, img } = props.data;
  return (
    <div className='product'>
      <img src={img} />
      <div className='description'>
        <p><b>{name}</b></p>
        <p>${Price}</p>
        <button className='style-btn'>Add to Cart</button>
      </div>
    </div>
  )
}
