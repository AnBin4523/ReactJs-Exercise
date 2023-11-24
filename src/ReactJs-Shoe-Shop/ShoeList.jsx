import React from 'react'
import ShoeItem from './ShoeItem'

export default function ShoeList({product, onSelect}) {
  return (
    <div className='row'>
      {product.map((product) => (
        <div key={product.id} className='col-4'>
          <ShoeItem product={product} onSelect={onSelect}/>
        </div>
      ))}
    </div>
  )
}
