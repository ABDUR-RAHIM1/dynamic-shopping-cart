import React from 'react'
import { Data } from '../../Data/Data'
import Product from '../Product/Product'
 
function Products() {
  return (
    <div className='products'>
         {
            Data.map(data => {
               return <Product
               key={data.id}
                   data={data}
               />
            })
            }
    </div>
  )
}

export default Products