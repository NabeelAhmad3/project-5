import React from 'react'
import { Products } from '../../Products'
import { Product } from './Product'
export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>My shop</h1>
      </div>
      <div className='Products'>
        {Products.map((product) => (
          <Product data={product} />)
        )}

      </div>
    </div>
  )
}
