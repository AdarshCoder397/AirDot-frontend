import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Link className='productCard' to={product._id}>
        <img src={product.images[0].url} alt={product.name}/>
        <p>{product.name}</p>
        <div>
            12345 <span>(34 Reviews)</span>
        </div>
        <span>{product.price}</span>
    </Link>
  )
}

export default Product